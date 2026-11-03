// Copy-to-clipboard for [data-copy] buttons, and the nav highlight. The copied
// text comes from the attribute or from the element referenced by data-copy-target.
document.querySelectorAll<HTMLButtonElement>('[data-copy], [data-copy-target]').forEach((button) => {
  const label = button.querySelector('[data-copy-label]') ?? button
  const original = label.textContent
  button.addEventListener('click', async () => {
    const targetId = button.dataset.copyTarget
    const text = targetId ? document.getElementById(targetId)?.textContent ?? '' : button.dataset.copy ?? ''
    try {
      await navigator.clipboard.writeText(text)
      label.textContent = 'Copied'
    } catch {
      label.textContent = 'Copy failed'
    }
    setTimeout(() => (label.textContent = original), 1400)
  })
})

// Nav highlight: mark the section currently in view, in the side nav and in the
// small-screen strip. Each section id maps to one link per nav.
const links = new Map<string, HTMLAnchorElement[]>()
document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]').forEach((a) => {
  const id = a.hash.slice(1)
  links.set(id, [...(links.get(id) ?? []), a])
})

// The strip follows the active section, but leaves it alone for a moment after
// someone scrolls it by hand so it doesn't snap back under their finger.
const strip = document.querySelector<HTMLElement>('[data-nav-strip]')
let manualUntil = 0
const holdStrip = () => (manualUntil = Date.now() + 2500)
strip?.addEventListener('wheel', holdStrip, { passive: true })
strip?.addEventListener('touchstart', holdStrip, { passive: true })
strip?.addEventListener('pointerdown', holdStrip)

function revealInStrip(link: HTMLAnchorElement) {
  if (!strip || !strip.contains(link) || !strip.offsetParent || Date.now() < manualUntil) return
  const left = link.offsetLeft - (strip.clientWidth - link.offsetWidth) / 2
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const motion = document.documentElement.dataset.motion
  const smooth = motion === 'on' || (motion !== 'off' && !reduce)
  strip.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' })
}

if ('IntersectionObserver' in window && links.size) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        links.forEach((group) => group.forEach((a) => a.removeAttribute('aria-current')))
        links.get(entry.target.id)?.forEach((a) => {
          a.setAttribute('aria-current', 'true')
          revealInStrip(a)
        })
      }
    },
    { rootMargin: '-30% 0px -60% 0px' },
  )
  links.forEach((_, id) => {
    const section = document.getElementById(id)
    if (section) observer.observe(section)
  })
}
