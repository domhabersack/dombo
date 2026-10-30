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

// Nav highlight: mark the section currently in view.
const links = new Map<string, HTMLAnchorElement>()
document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]').forEach((a) => links.set(a.hash.slice(1), a))
if ('IntersectionObserver' in window && links.size) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        links.forEach((a) => a.removeAttribute('aria-current'))
        links.get(entry.target.id)?.setAttribute('aria-current', 'true')
      }
    },
    { rootMargin: '-30% 0px -60% 0px' },
  )
  links.forEach((_, id) => {
    const section = document.getElementById(id)
    if (section) observer.observe(section)
  })
}
