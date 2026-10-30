// Theme preference (auto / light / dark). Auto removes data-theme so the
// tokens' dark: variant follows the OS.
type Theme = 'auto' | 'light' | 'dark'
const KEY = 'dombo:theme'
const root = document.documentElement

function read(): Theme {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'light' || v === 'dark' ? v : 'auto'
  } catch {
    return 'auto'
  }
}

function apply(theme: Theme) {
  if (theme === 'auto') root.removeAttribute('data-theme')
  else root.setAttribute('data-theme', theme)
  document.querySelectorAll<HTMLButtonElement>('[data-theme-option]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.themeOption === theme))
  })
}

apply(read())

document.querySelectorAll<HTMLButtonElement>('[data-theme-option]').forEach((button) => {
  button.addEventListener('click', () => {
    const theme = button.dataset.themeOption as Theme
    try {
      if (theme === 'auto') localStorage.removeItem(KEY)
      else localStorage.setItem(KEY, theme)
    } catch {}
    apply(theme)
  })
})
