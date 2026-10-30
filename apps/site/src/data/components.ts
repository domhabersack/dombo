/**
 * Component recipes. Each `html` string is rendered as the live preview *and*
 * shown as the copyable snippet, so the two can never drift apart.
 */
import { icon, icons } from './icons'

export type Recipe = {
  id: string
  name: string
  description: string
  html: string
}

const focus =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'
const arrow = icon(icons.arrowRight, 'size-4 transition duration-150 ease-out group-hover:translate-x-0.5')

export const recipes: Recipe[] = [
  {
    id: 'button',
    name: 'Button',
    description:
      'Use one brand button per view. Secondary actions are solid neutral-900, and ghost buttons only show a background on hover. Buttons press down slightly on click.',
    html: `<div class="flex flex-wrap items-center gap-3">
  <button type="button" class="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition duration-150 ease-out hover:bg-brand-500 active:scale-[0.98] ${focus}">Primary</button>
  <button type="button" class="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition duration-150 ease-out hover:bg-neutral-700 active:scale-[0.98] dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 ${focus}">Secondary</button>
  <button type="button" class="rounded-lg px-4 py-2 text-sm font-semibold text-neutral-600 transition duration-150 ease-out hover:bg-neutral-100 hover:text-neutral-900 active:scale-[0.98] dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white ${focus}">Ghost</button>
  <a href="#button" class="group inline-flex items-center gap-1 rounded-lg text-sm font-semibold text-neutral-900 transition duration-150 hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300 ${focus}">Text link ${arrow}</a>
</div>`,
  },
  {
    id: 'badge',
    name: 'Badge',
    description: 'A rounded-md chip with a 100 background and 700 text in the same hue. The color carries meaning, so never use it for decoration.',
    html: `<div class="flex flex-wrap gap-2">
  <span class="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700 dark:bg-white/10 dark:text-neutral-300">Draft</span>
  <span class="inline-flex items-center rounded-md bg-brand-100 px-2 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">New</span>
  <span class="inline-flex items-center rounded-md bg-success-100 px-2 py-1 text-xs font-medium text-success-700 dark:bg-success-500/15 dark:text-success-300">Active</span>
  <span class="inline-flex items-center rounded-md bg-warning-100 px-2 py-1 text-xs font-medium text-warning-800 dark:bg-warning-500/15 dark:text-warning-300">Pending</span>
  <span class="inline-flex items-center rounded-md bg-danger-100 px-2 py-1 text-xs font-medium text-danger-700 dark:bg-danger-500/15 dark:text-danger-300">Failed</span>
</div>`,
  },
  {
    id: 'card',
    name: 'Card',
    description: 'A white surface on the neutral-50 page, with no border and no shadow. When the whole card is a link, hovering softens the title and nudges the arrow.',
    html: `<a href="#card" class="group flex max-w-sm flex-col gap-2 rounded-xl bg-white p-6 dark:bg-neutral-900 ${focus}">
  <p class="text-sm/6 font-semibold text-neutral-600 dark:text-neutral-400">Case study</p>
  <h3 class="text-lg/7 font-black text-neutral-900 transition duration-150 group-hover:text-neutral-600 dark:text-white dark:group-hover:text-neutral-300">Cutting onboarding time in half</h3>
  <p class="text-sm/6 text-neutral-600 dark:text-neutral-400">How a calmer first-run experience doubled activation without adding a single feature.</p>
  <p class="mt-2 inline-flex items-center gap-1 text-sm/6 font-semibold text-neutral-900 dark:text-white">Read the case study ${arrow}</p>
</a>`,
  },
  {
    id: 'input',
    name: 'Input field',
    description: 'A bordered field that darkens on hover. On focus the border turns brand-colored and a soft halo appears. Errors replace the help text instead of adding to it.',
    html: `<div class="grid max-w-sm gap-6">
  <div class="flex flex-col gap-1.5">
    <label for="email" class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
    <input id="email" type="email" placeholder="you@example.com" class="rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 transition duration-150 placeholder:text-neutral-400 hover:border-neutral-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-neutral-500 dark:hover:border-white/25 dark:focus:border-brand-400 dark:focus:ring-brand-400/20">
    <p class="text-sm text-neutral-500 dark:text-neutral-400">We only email you about your account.</p>
  </div>
  <div class="flex flex-col gap-1.5">
    <label for="handle" class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Handle</label>
    <input id="handle" value="dom" aria-invalid="true" aria-describedby="handle-error" class="rounded-lg border border-danger-300 bg-white px-3.5 py-2.5 text-sm text-danger-900 transition duration-150 focus:border-danger-500 focus:ring-4 focus:ring-danger-500/10 focus:outline-none dark:border-danger-500/50 dark:bg-white/5 dark:text-danger-300 dark:focus:ring-danger-400/20">
    <p id="handle-error" class="text-sm text-danger-600 dark:text-danger-400">That handle is already taken.</p>
  </div>
</div>`,
  },
  {
    id: 'alert',
    name: 'Alert',
    description: 'A tinted surface with a Heroicon, a semibold title and body text in the same hue. Never gray text on color, and no border.',
    html: `<div class="grid gap-4">
  <div class="flex gap-3 rounded-xl bg-info-50 p-4 dark:bg-info-500/10">
    ${icon(icons.informationCircle, 'size-5 shrink-0 text-info-500')}
    <div class="flex flex-col gap-1 text-sm/6"><p class="font-semibold text-info-800 dark:text-info-300">A new version is available</p><p class="text-info-700 dark:text-info-400">Refresh to get the latest tokens.</p></div>
  </div>
  <div class="flex gap-3 rounded-xl bg-success-50 p-4 dark:bg-success-500/10">
    ${icon(icons.checkCircle, 'size-5 shrink-0 text-success-500')}
    <p class="text-sm/6 font-medium text-success-800 dark:text-success-300">Changes saved.</p>
  </div>
  <div class="flex gap-3 rounded-xl bg-warning-50 p-4 dark:bg-warning-500/10">
    ${icon(icons.exclamationTriangle, 'size-5 shrink-0 text-warning-500')}
    <p class="text-sm/6 font-medium text-warning-800 dark:text-warning-300">Your trial ends in 3 days.</p>
  </div>
  <div class="flex gap-3 rounded-xl bg-danger-50 p-4 dark:bg-danger-500/10">
    ${icon(icons.xCircle, 'size-5 shrink-0 text-danger-500')}
    <div class="flex flex-col gap-1 text-sm/6"><p class="font-semibold text-danger-800 dark:text-danger-300">Payment failed</p><p class="text-danger-700 dark:text-danger-400">Your card was declined. Update it to keep your plan.</p></div>
  </div>
</div>`,
  },
  {
    id: 'avatar',
    name: 'Avatar',
    description: 'Avatars are round, with initials on a tinted background as the fallback. In a stack, each avatar gets a ring in the page color so they read as separate.',
    html: `<div class="flex items-center gap-6">
  <span class="inline-flex size-10 items-center justify-center rounded-full bg-neutral-200 text-sm font-semibold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">DH</span>
  <div class="flex -space-x-2">
    <span class="inline-flex size-8 items-center justify-center rounded-full bg-accent-100 text-xs font-semibold text-accent-800 ring-2 ring-neutral-50 dark:ring-neutral-950">AL</span>
    <span class="inline-flex size-8 items-center justify-center rounded-full bg-success-100 text-xs font-semibold text-success-800 ring-2 ring-neutral-50 dark:ring-neutral-950">MK</span>
    <span class="inline-flex size-8 items-center justify-center rounded-full bg-info-100 text-xs font-semibold text-info-800 ring-2 ring-neutral-50 dark:ring-neutral-950">JS</span>
    <span class="inline-flex size-8 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-700 ring-2 ring-neutral-50 dark:bg-neutral-700 dark:text-neutral-300 dark:ring-neutral-950">+4</span>
  </div>
</div>`,
  },
  {
    id: 'stat',
    name: 'Stat',
    description: 'The number is the hero: large, black and tabular. The label sits above it in a small muted style, and the change below is colored by meaning.',
    html: `<dl class="grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
  <div class="flex flex-col gap-1 rounded-xl bg-white p-6 dark:bg-neutral-900">
    <dt class="text-sm/6 font-medium text-neutral-500 dark:text-neutral-400">Monthly revenue</dt>
    <dd class="text-3xl font-black tracking-tight text-neutral-900 tabular-nums dark:text-white">$48,210</dd>
    <dd class="text-sm/6 font-medium text-success-600 dark:text-success-400">Up 12.4% from last month</dd>
  </div>
  <div class="flex flex-col gap-1 rounded-xl bg-white p-6 dark:bg-neutral-900">
    <dt class="text-sm/6 font-medium text-neutral-500 dark:text-neutral-400">Churn</dt>
    <dd class="text-3xl font-black tracking-tight text-neutral-900 tabular-nums dark:text-white">2.1%</dd>
    <dd class="text-sm/6 font-medium text-danger-600 dark:text-danger-400">Up 0.3 points from last month</dd>
  </div>
</dl>`,
  },
  {
    id: 'tabs',
    name: 'Tabs',
    description: 'Segmented tabs on an inset track, with no underline. The current tab becomes a white surface, and the others only change color on hover.',
    html: `<nav class="inline-flex max-w-full gap-1 overflow-x-auto rounded-lg bg-neutral-200/70 p-1 dark:bg-white/10" aria-label="Tabs">
  <a href="#tabs" aria-current="page" class="rounded-md bg-white px-3 py-1.5 text-sm font-medium whitespace-nowrap text-neutral-900 dark:bg-neutral-800 dark:text-white ${focus}">Overview</a>
  <a href="#tabs" class="rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap text-neutral-600 transition-colors duration-150 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white ${focus}">Activity</a>
  <a href="#tabs" class="rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap text-neutral-600 transition-colors duration-150 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white ${focus}">Settings</a>
  <a href="#tabs" class="rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap text-neutral-600 transition-colors duration-150 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white ${focus}">Billing</a>
</nav>`,
  },
  {
    id: 'modal',
    name: 'Modal',
    description: 'Dialogs float above the page, so they are the one place with a shadow. The panel is rounded-2xl with actions right-aligned and the primary action last. It scales in from 96% when it opens.',
    html: `<div role="dialog" aria-modal="true" aria-labelledby="modal-title" class="flex max-w-md animate-scale-in flex-col gap-2 rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-neutral-900/10 dark:bg-neutral-800 dark:ring-white/10">
  <h3 id="modal-title" class="text-lg/7 font-black text-neutral-900 dark:text-white">Publish this version?</h3>
  <p class="text-sm/6 text-neutral-600 dark:text-neutral-400">Version 0.2.0 of the tokens will be published to npm. Projects that use a caret range will pick it up automatically.</p>
  <div class="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
    <button type="button" class="rounded-lg px-4 py-2 text-sm font-semibold text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white ${focus}">Cancel</button>
    <button type="button" class="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-500 ${focus}">Publish</button>
  </div>
</div>`,
  },
]
