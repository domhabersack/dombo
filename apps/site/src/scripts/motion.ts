// Motion preference (auto / on / off) and the scroll-reveal observer.
type Pref = 'auto' | 'on' | 'off'
const KEY = 'dombo:motion'
const root = document.documentElement

function read(): Pref {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'on' || v === 'off' ? v : 'auto'
  } catch {
    return 'auto'
  }
}

function apply(pref: Pref) {
  if (pref === 'auto') root.removeAttribute('data-motion')
  else root.setAttribute('data-motion', pref)
  document.querySelectorAll<HTMLButtonElement>('[data-motion-option]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.motionOption === pref))
  })
}

apply(read())

document.querySelectorAll<HTMLButtonElement>('[data-motion-option]').forEach((button) => {
  button.addEventListener('click', () => {
    const pref = button.dataset.motionOption as Pref
    try {
      if (pref === 'auto') localStorage.removeItem(KEY)
      else localStorage.setItem(KEY, pref)
    } catch {}
    apply(pref)
  })
})

// Reveal on scroll. Only hide elements once the observer exists, so nothing is
// stuck invisible if this script fails.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  )
  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
  root.setAttribute('data-reveal', '')
}

// Replay buttons in the motion section restart their target's animation.
document.querySelectorAll<HTMLButtonElement>('[data-replay]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.replay!)
    if (!target) return
    const cls = target.dataset.animation!
    target.classList.remove(cls)
    void target.offsetWidth
    target.classList.add(cls)
  })
})
