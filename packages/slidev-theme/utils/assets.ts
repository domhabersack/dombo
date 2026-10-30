// Resolve an image path from frontmatter the same way Slidev's own layouts do:
// absolute URLs pass through, and "/foo.png" is served from the deck's public dir.
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/')) return import.meta.env.BASE_URL + url.slice(1)
  return url
}
