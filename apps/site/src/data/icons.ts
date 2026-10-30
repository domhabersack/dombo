// Heroicons, imported as raw SVG markup so they can go into HTML strings.
import checkCircle from 'heroicons/20/solid/check-circle.svg?raw'
import exclamationTriangle from 'heroicons/20/solid/exclamation-triangle.svg?raw'
import informationCircle from 'heroicons/20/solid/information-circle.svg?raw'
import xCircle from 'heroicons/20/solid/x-circle.svg?raw'
import computerDesktop from 'heroicons/16/solid/computer-desktop.svg?raw'
import moon from 'heroicons/16/solid/moon.svg?raw'
import sun from 'heroicons/16/solid/sun.svg?raw'
import arrowPath from 'heroicons/16/solid/arrow-path.svg?raw'
import arrowRight from 'heroicons/16/solid/arrow-right.svg?raw'
import bell from 'heroicons/20/solid/bell.svg?raw'
import cog from 'heroicons/20/solid/cog-6-tooth.svg?raw'
import star from 'heroicons/20/solid/star.svg?raw'
import starOutline from 'heroicons/24/outline/star.svg?raw'

/** Returns the icon's markup on one line with the given classes on the <svg>. */
export function icon(svg: string, className: string) {
  return svg.replace('<svg ', `<svg class="${className}" `).replace(/\n\s*/g, '').trim()
}

export const icons = { checkCircle, exclamationTriangle, informationCircle, xCircle, computerDesktop, moon, sun, arrowPath, arrowRight, bell, cog, star, starOutline }
