/**
 * Visual do and don't examples for rules, keyed by rule id. The plain-language
 * explanation lives with the rule in content/rules.yaml; these are small,
 * non-interactive previews that show the difference at a glance.
 */
import { icon, icons } from './icons'

export type RuleExample = { do: string; dont: string }

const card = 'rounded-lg bg-white p-3 dark:bg-neutral-900'
const brandButton = 'rounded-md bg-brand-600 px-2.5 py-1 text-xs font-semibold text-white'
const ghostButton = 'rounded-md px-2.5 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-400'
const input = 'block w-full rounded-md border bg-white px-2.5 py-1.5 text-xs text-neutral-900 dark:bg-white/5 dark:text-white'
const code = 'w-full min-w-0 whitespace-pre-wrap break-words rounded-md bg-neutral-900 p-3 font-mono text-[11px]/5 text-neutral-300'

/** A small "Saved" notification that loops through its entrance. */
const toast = (animation: string) =>
  `<div class="flex flex-col items-center gap-3">
  <div class="flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-xs font-medium text-neutral-900 dark:bg-neutral-800 dark:text-white ${animation}">${icon(icons.checkCircle, 'size-4 text-success-500')}Changes saved</div>
  <p class="motion-hint text-[11px] text-neutral-500 dark:text-neutral-400">Turn motion on to see it play</p>
</div>`

/** Gray bars standing in for lines of text. */
const lines = (widths: string[], className = 'bg-neutral-200 dark:bg-neutral-700') =>
  widths.map((w) => `<span class="block h-1.5 rounded-full ${className}" style="width:${w}"></span>`).join('')

const slide = (content: string) =>
  `<div class="flex aspect-video w-full flex-col justify-center rounded-md bg-white p-3 dark:bg-neutral-900">${content}</div>`

export const ruleExamples: Record<string, RuleExample> = {
  'hierarchy-not-size': {
    do: `<div class="${card} w-full">
  <p class="text-sm font-semibold text-neutral-900 dark:text-white">Dom Habersack</p>
  <p class="text-sm text-neutral-500 dark:text-neutral-400">Product engineer</p>
  <p class="text-sm text-neutral-500 dark:text-neutral-400">Berlin</p>
</div>`,
    dont: `<div class="${card} w-full">
  <p class="text-lg text-neutral-900 dark:text-white">Dom Habersack</p>
  <p class="text-xs text-neutral-900 dark:text-white">Product engineer</p>
  <p class="text-base text-neutral-900 dark:text-white">Berlin</p>
</div>`,
  },

  'start-with-too-much-space': {
    do: `<div class="flex w-full flex-col gap-2 rounded-lg bg-white p-5 dark:bg-neutral-900">
  <p class="text-sm font-black text-neutral-900 dark:text-white">Weekly report</p>
  <p class="text-xs/5 text-neutral-600 dark:text-neutral-400">Signups grew 12% after the new onboarding.</p>
</div>`,
    dont: `<div class="w-full rounded-lg bg-white p-1 dark:bg-neutral-900">
  <p class="text-sm/4 font-black text-neutral-900 dark:text-white">Weekly report</p>
  <p class="text-xs/4 text-neutral-600 dark:text-neutral-400">Signups grew 12% after the new onboarding.</p>
</div>`,
  },

  'space-not-lines': {
    do: `<div class="flex w-full flex-col gap-2">
  <div class="${card} text-xs font-medium text-neutral-900 dark:text-white">Invoices</div>
  <div class="${card} text-xs font-medium text-neutral-900 dark:text-white">Customers</div>
  <div class="${card} text-xs font-medium text-neutral-900 dark:text-white">Reports</div>
</div>`,
    dont: `<div class="w-full divide-y divide-neutral-300 rounded-lg border border-neutral-300 bg-white dark:divide-neutral-600 dark:border-neutral-600 dark:bg-neutral-900">
  <div class="p-3 text-xs font-medium text-neutral-900 dark:text-white">Invoices</div>
  <div class="p-3 text-xs font-medium text-neutral-900 dark:text-white">Customers</div>
  <div class="p-3 text-xs font-medium text-neutral-900 dark:text-white">Reports</div>
</div>`,
  },

  'prose-not-separators': {
    do: `<p class="text-sm text-neutral-600 dark:text-neutral-400">By Dom Habersack, captured on October 29</p>`,
    dont: `<p class="text-sm text-neutral-600 dark:text-neutral-400">Dom Habersack · Oct 29 · 3 min</p>`,
  },

  'brand-sparingly': {
    do: `<div class="${card} flex w-full flex-col items-start gap-1">
  <p class="flex items-center gap-2 text-sm font-black text-neutral-900 dark:text-white">Upgrade your plan <span class="rounded-md bg-neutral-100 px-1.5 py-0.5 text-[11px] font-medium text-neutral-700 dark:bg-white/10 dark:text-neutral-300">Pro</span></p>
  <p class="text-xs text-neutral-600 dark:text-neutral-400">Read the <span class="text-neutral-900 underline decoration-neutral-300 dark:text-white dark:decoration-neutral-600">pricing details</span>.</p>
  <span class="${brandButton} mt-2">Upgrade</span>
</div>`,
    dont: `<div class="${card} flex w-full flex-col items-start gap-1">
  <p class="flex items-center gap-2 text-sm font-black text-brand-700 dark:text-brand-300">Upgrade your plan <span class="rounded-md bg-brand-100 px-1.5 py-0.5 text-[11px] font-medium text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">Pro</span></p>
  <p class="text-xs text-neutral-600 dark:text-neutral-400">Read the <span class="text-brand-600 underline dark:text-brand-400">pricing details</span>.</p>
  <span class="${brandButton} mt-2">Upgrade</span>
</div>`,
  },

  'no-gray-on-color': {
    do: `<div class="w-full rounded-lg bg-brand-700 p-4">
  <p class="text-sm font-black text-white">Launch week</p>
  <p class="text-xs/5 text-brand-200">Five new features, one every day.</p>
</div>`,
    dont: `<div class="w-full rounded-lg bg-brand-700 p-4">
  <p class="text-sm font-black text-white">Launch week</p>
  <p class="text-xs/5 text-neutral-400">Five new features, one every day.</p>
</div>`,
  },

  'contrast-minimum': {
    do: `<div class="${card} w-full">
  <p class="text-sm font-black text-neutral-900 dark:text-white">Storage</p>
  <p class="text-xs/5 text-neutral-600 dark:text-neutral-400">You have used 8 of 10 GB.</p>
</div>`,
    dont: `<div class="${card} w-full">
  <p class="text-sm font-black text-neutral-300 dark:text-neutral-700">Storage</p>
  <p class="text-xs/5 text-neutral-300 dark:text-neutral-700">You have used 8 of 10 GB.</p>
</div>`,
  },

  'one-typeface': {
    do: `<div class="${card} w-full">
  <p class="text-base font-black text-neutral-900 dark:text-white">Release notes</p>
  <p class="text-xs font-medium text-neutral-600 dark:text-neutral-400">Version 2.4</p>
  <p class="text-xs/5 text-neutral-600 dark:text-neutral-400">Faster exports and a new dark mode.</p>
</div>`,
    dont: `<div class="${card} w-full">
  <p class="font-serif text-base text-neutral-900 italic dark:text-white">Release notes</p>
  <p class="font-mono text-xs text-neutral-600 dark:text-neutral-400">Version 2.4</p>
  <p class="text-xs/5 text-neutral-600 dark:text-neutral-400">Faster exports and a new dark mode.</p>
</div>`,
  },

  'headings-black': {
    do: `<div class="w-full">
  <p class="text-sm font-black text-neutral-900 dark:text-white">Notifications</p>
  <p class="text-xs/5 text-neutral-600 dark:text-neutral-400">Choose what we email you about.</p>
</div>`,
    dont: `<div class="w-full">
  <p class="text-sm font-medium text-neutral-900 dark:text-white">Notifications</p>
  <p class="text-xs/5 text-neutral-600 dark:text-neutral-400">Choose what we email you about.</p>
</div>`,
  },

  'self-hosted-fonts': {
    do: `<pre class="${code}">npm install @fontsource-variable/inter

import '@fontsource-variable/inter'</pre>`,
    dont: `<pre class="${code}">&lt;link href="https://fonts.googleapis.com/css2?family=Inter"&gt;</pre>`,
  },

  'tight-headlines': {
    do: `<p class="text-2xl/7 font-black tracking-tight text-neutral-900 dark:text-white">Ship faster with fewer meetings</p>`,
    dont: `<p class="text-2xl/10 font-black tracking-wide text-neutral-900 dark:text-white">Ship faster with fewer meetings</p>`,
  },

  'group-by-proximity': {
    do: `<div class="flex w-full flex-col gap-4 text-xs">
  <div><p class="font-medium text-neutral-500 dark:text-neutral-400">Name</p><p class="font-semibold text-neutral-900 dark:text-white">Dom Habersack</p></div>
  <div><p class="font-medium text-neutral-500 dark:text-neutral-400">Email</p><p class="font-semibold text-neutral-900 dark:text-white">dom@example.com</p></div>
</div>`,
    dont: `<div class="flex w-full flex-col gap-2 text-xs">
  <p class="font-medium text-neutral-500 dark:text-neutral-400">Name</p><p class="font-semibold text-neutral-900 dark:text-white">Dom Habersack</p>
  <p class="font-medium text-neutral-500 dark:text-neutral-400">Email</p><p class="font-semibold text-neutral-900 dark:text-white">dom@example.com</p>
</div>`,
  },

  'gap-on-parent': {
    do: `<pre class="${code}">&lt;div class="flex flex-col gap-1.5"&gt;
  &lt;label&gt;…
  &lt;input&gt;
  &lt;p&gt;…
&lt;/div&gt;</pre>`,
    dont: `<pre class="${code}">&lt;div&gt;
  &lt;label&gt;…
  &lt;input class="mt-2"&gt;
  &lt;p class="mt-2"&gt;…
&lt;/div&gt;</pre>`,
  },

  'elevation-by-background': {
    do: `<div class="${card} w-full p-4">
  <p class="text-sm font-black text-neutral-900 dark:text-white">Revenue</p>
  <p class="text-xs text-neutral-600 dark:text-neutral-400">Up 8% this month</p>
</div>`,
    dont: `<div class="${card} w-full p-4 shadow-lg ring-1 ring-neutral-900/10">
  <p class="text-sm font-black text-neutral-900 dark:text-white">Revenue</p>
  <p class="text-xs text-neutral-600 dark:text-neutral-400">Up 8% this month</p>
</div>`,
  },

  'radius-by-size': {
    do: `<div class="flex w-full flex-col items-start gap-2 rounded-xl bg-white p-4 dark:bg-neutral-900">
  <span class="rounded-md bg-success-100 px-1.5 py-0.5 text-[11px] font-medium text-success-700 dark:bg-success-500/15 dark:text-success-300">Active</span>
  <span class="${brandButton} rounded-lg">Open project</span>
</div>`,
    dont: `<div class="flex w-full flex-col items-start gap-2 rounded-none bg-white p-4 dark:bg-neutral-900">
  <span class="rounded-none bg-success-100 px-1.5 py-0.5 text-[11px] font-medium text-success-700 dark:bg-success-500/15 dark:text-success-300">Active</span>
  <span class="${brandButton} rounded-full">Open project</span>
</div>`,
  },

  'one-primary-action': {
    do: `<div class="flex gap-2">
  <span class="${ghostButton}">Cancel</span>
  <span class="rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-semibold text-white dark:bg-white dark:text-neutral-900">Preview</span>
  <span class="${brandButton}">Publish</span>
</div>`,
    dont: `<div class="flex gap-2">
  <span class="${brandButton}">Cancel</span>
  <span class="${brandButton}">Preview</span>
  <span class="${brandButton}">Publish</span>
</div>`,
  },

  'focus-visible': {
    do: `<div class="flex gap-3">
  <span class="${ghostButton}">Back</span>
  <span class="rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-semibold text-white outline-2 outline-offset-2 outline-brand-600 dark:bg-white dark:text-neutral-900">Next</span>
</div>`,
    dont: `<div class="flex gap-3">
  <span class="${ghostButton}">Back</span>
  <span class="rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-semibold text-white dark:bg-white dark:text-neutral-900">Next</span>
</div>`,
  },

  'input-focus-halo': {
    do: `<span class="${input} border-brand-500 ring-4 ring-brand-500/10 dark:border-brand-400 dark:ring-brand-400/20">dom@example.com</span>`,
    dont: `<span class="${input} border-neutral-300 outline-2 outline-offset-0 outline-blue-600 dark:border-white/15">dom@example.com</span>`,
  },

  'heroicons-only': {
    do: `<div class="flex items-center gap-4 text-neutral-700 dark:text-neutral-300">
  ${icon(icons.bell, 'size-5')}${icon(icons.star, 'size-5')}${icon(icons.cog, 'size-5')}
</div>`,
    dont: `<div class="flex items-center gap-4 text-neutral-700 dark:text-neutral-300">
  ${icon(icons.bell, 'size-5')}${icon(icons.starOutline, 'size-6')}<span class="text-lg leading-none">⚙️</span>
</div>`,
  },

  'size-for-squares': {
    do: `<pre class="${code}">&lt;img class="size-10 rounded-full"&gt;</pre>`,
    dont: `<pre class="${code}">&lt;img class="h-10 w-10 rounded-full"&gt;</pre>`,
  },

  'light-and-dark': {
    do: `<div class="flex w-full overflow-hidden rounded-lg">
  <div class="flex-1 bg-neutral-50 p-3"><div class="rounded-md bg-white p-2 text-xs font-medium text-neutral-900">Inbox</div></div>
  <div class="flex-1 bg-neutral-950 p-3"><div class="rounded-md bg-neutral-900 p-2 text-xs font-medium text-white">Inbox</div></div>
</div>`,
    dont: `<div class="flex w-full overflow-hidden rounded-lg">
  <div class="flex-1 bg-neutral-50 p-3"><div class="rounded-md bg-white p-2 text-xs font-medium text-neutral-900">Inbox</div></div>
  <div class="flex-1 bg-neutral-950 p-3"><div class="rounded-md bg-white p-2 text-xs font-medium text-neutral-900">Inbox</div></div>
</div>`,
  },

  'social-safe-area': {
    do: `<div class="flex aspect-square w-28 items-end rounded-md bg-neutral-900 p-4">
  <p class="text-sm/4 font-black text-white">Ship it on Friday</p>
</div>`,
    dont: `<div class="flex aspect-square w-28 items-end rounded-md bg-neutral-900 p-0.5">
  <p class="text-sm/4 font-black text-white">Ship it on Friday</p>
</div>`,
  },

  'slides-one-idea': {
    do: slide(`<p class="text-center text-base/5 font-black tracking-tight text-neutral-900 dark:text-white">Activation doubled</p>`),
    dont: slide(`<p class="text-[9px] font-black text-neutral-900 dark:text-white">Q3 results</p>
<ul class="mt-1 list-disc pl-3 text-[7px]/[10px] text-neutral-600 dark:text-neutral-400">
  <li>Activation doubled after onboarding changes</li><li>Churn down 3 points</li><li>New pricing page shipped</li><li>Hired two engineers</li><li>Moved to a new office</li>
</ul>`),
  },

  'design-in-grayscale': {
    do: `<div class="${card} flex w-full flex-col items-start gap-1">
  <p class="text-sm font-black text-neutral-900 dark:text-white">Team plan</p>
  <p class="text-xs text-neutral-500 dark:text-neutral-400">5 seats, billed yearly</p>
  <span class="${brandButton} mt-2">Choose plan</span>
</div>`,
    dont: `<div class="${card} flex w-full flex-col items-start gap-1">
  <p class="text-sm text-sky-600">Team plan</p>
  <p class="text-sm text-emerald-600">5 seats, billed yearly</p>
  <span class="mt-2 rounded-md bg-amber-400 px-2.5 py-1 text-xs text-rose-700">Choose plan</span>
</div>`,
  },

  'tailwind-palette': {
    do: `<div class="flex w-full flex-col gap-1.5 text-[10px] font-medium text-neutral-600 dark:text-neutral-400">
  <div class="flex overflow-hidden rounded-md"><span class="h-8 flex-1 bg-brand-100"></span><span class="h-8 flex-1 bg-brand-300"></span><span class="h-8 flex-1 bg-brand-500"></span><span class="h-8 flex-1 bg-brand-700"></span><span class="h-8 flex-1 bg-brand-900"></span></div>
  <div class="flex justify-between"><span>100</span><span>300</span><span>500</span><span>700</span><span>900</span></div>
</div>`,
    dont: `<div class="flex w-full flex-col gap-1.5 text-[10px] font-medium text-neutral-600 dark:text-neutral-400">
  <div class="flex overflow-hidden rounded-md"><span class="h-8 flex-1 bg-[#f3d5f7]"></span><span class="h-8 flex-1 bg-[#e07be8]"></span><span class="h-8 flex-1 bg-[#b81fd0]"></span><span class="h-8 flex-1 bg-[#a3159a]"></span><span class="h-8 flex-1 bg-[#5a1263]"></span></div>
  <div class="flex justify-between"><span>#f3d5f7</span><span>#b81fd0</span><span>#5a1263</span></div>
</div>`,
  },

  'zinc-neutrals': {
    do: `<div class="flex w-full flex-col items-start gap-1 rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
  <p class="text-sm font-black text-zinc-900 dark:text-white">Invite your team</p>
  <p class="text-xs text-zinc-500 dark:text-zinc-400">Everyone gets their own login.</p>
  <span class="${brandButton} mt-2">Send invites</span>
</div>`,
    dont: `<div class="flex w-full flex-col items-start gap-1 rounded-lg bg-slate-200 p-3 dark:bg-slate-700">
  <p class="text-sm font-black text-slate-800 dark:text-white">Invite your team</p>
  <p class="text-xs text-slate-500 dark:text-slate-300">Everyone gets their own login.</p>
  <span class="${brandButton} mt-2">Send invites</span>
</div>`,
  },

  'type-roles': {
    do: `<div class="flex w-full flex-col gap-2">
  <div class="${card}"><p class="text-sm font-black text-neutral-900 dark:text-white">Profile</p><p class="text-xs text-neutral-500 dark:text-neutral-400">Your name and photo</p></div>
  <div class="${card}"><p class="text-sm font-black text-neutral-900 dark:text-white">Security</p><p class="text-xs text-neutral-500 dark:text-neutral-400">Password and sign-in</p></div>
</div>`,
    dont: `<div class="flex w-full flex-col gap-2">
  <div class="${card}"><p class="text-base font-semibold text-neutral-900 dark:text-white">Profile</p><p class="text-xs text-neutral-500 dark:text-neutral-400">Your name and photo</p></div>
  <div class="${card}"><p class="text-[13px] font-black text-neutral-700 uppercase dark:text-neutral-300">Security</p><p class="text-sm text-neutral-500 dark:text-neutral-400">Password and sign-in</p></div>
</div>`,
  },

  measure: {
    do: `<div class="flex aspect-[16/10] w-full flex-col justify-center gap-1.5 rounded-md bg-white px-4 dark:bg-neutral-900">
  <span class="mb-1 block h-2.5 w-1/3 rounded-full bg-neutral-800 dark:bg-neutral-200"></span>
  ${lines(['55%', '52%', '56%', '50%', '35%'])}
</div>`,
    dont: `<div class="flex aspect-[16/10] w-full flex-col justify-center gap-1.5 rounded-md bg-white px-4 dark:bg-neutral-900">
  <span class="mb-1 block h-2.5 w-1/3 rounded-full bg-neutral-800 dark:bg-neutral-200"></span>
  ${lines(['100%', '98%', '100%', '60%'])}
</div>`,
  },

  'constrained-spacing': {
    do: `<div class="flex w-full flex-col gap-3 rounded-lg bg-white p-4 dark:bg-neutral-900">
  ${lines(['70%', '55%', '80%'], 'h-3 bg-neutral-300 dark:bg-neutral-600')}
</div>`,
    dont: `<div class="flex w-full flex-col rounded-lg bg-white p-4 dark:bg-neutral-900">
  <span class="block h-3 w-[70%] rounded-full bg-neutral-300 dark:bg-neutral-600"></span>
  <span class="mt-[5px] ml-[3px] block h-3 w-[55%] rounded-full bg-neutral-300 dark:bg-neutral-600"></span>
  <span class="mt-[15px] ml-px block h-3 w-[80%] rounded-full bg-neutral-300 dark:bg-neutral-600"></span>
</div>`,
  },

  'motion-optional': {
    do: `<div class="${card} w-full">
  <p class="text-sm font-black text-neutral-900 dark:text-white">Weekly report</p>
  <p class="text-xs/5 text-neutral-600 dark:text-neutral-400">Signups grew 12% this week.</p>
</div>`,
    dont: `<div class="flex h-16 w-full items-center justify-center rounded-lg border border-dashed border-neutral-300 text-[11px] text-neutral-400 dark:border-neutral-700 dark:text-neutral-500">
  <span class="opacity-0">Weekly report</span>
</div>`,
  },

  'motion-durations': {
    do: toast('[--demo-from:translateY(8px)] animate-[demo-arrive-8_2.5s_var(--motion-ease-out)_infinite]'),
    dont: toast('[--demo-from:translateY(8px)] animate-[demo-arrive-60_2.5s_var(--motion-ease-out)_infinite]'),
  },

  'motion-easing': {
    do: toast('[--demo-from:translateX(24px)] animate-[demo-arrive-20_2.5s_var(--motion-ease-out)_infinite]'),
    dont: toast('[--demo-from:translateX(24px)] animate-[demo-arrive-20_2.5s_var(--motion-ease-in)_infinite]'),
  },

  'motion-small-distances': {
    do: toast('[--demo-from:translateY(8px)] animate-[demo-arrive-20_2.5s_var(--motion-ease-out)_infinite]'),
    dont: toast('[--demo-from:translateY(72px)_scale(0.4)] animate-[demo-arrive-20_2.5s_var(--motion-ease-out)_infinite]'),
  },

  'email-tables': {
    do: `<div class="flex w-full justify-center rounded-md bg-neutral-200 p-3 dark:bg-neutral-800">
  <div class="flex w-3/4 flex-col gap-1.5 rounded-sm bg-white p-3 dark:bg-neutral-900">
    <span class="block h-2 w-2/3 rounded-full bg-neutral-800 dark:bg-neutral-200"></span>
    ${lines(['100%', '90%', '70%'])}
    <span class="mt-1 block h-3 w-1/3 rounded-sm bg-brand-600"></span>
  </div>
</div>`,
    dont: `<div class="flex w-full justify-center rounded-md bg-neutral-200 p-3 dark:bg-neutral-800">
  <div class="grid w-full grid-cols-3 gap-1.5 rounded-xl bg-gradient-to-br from-brand-100 to-sky-100 p-2 shadow-xl">
    <div class="flex flex-col gap-1 rounded-lg bg-white p-1.5 shadow-md">${lines(['100%', '60%'])}</div>
    <div class="flex flex-col gap-1 rounded-lg bg-white p-1.5 shadow-md">${lines(['80%', '100%'])}</div>
    <div class="flex flex-col gap-1 rounded-lg bg-white p-1.5 shadow-md">${lines(['100%', '70%'])}</div>
  </div>
</div>`,
  },

  'no-eyebrows': {
    do: `<div class="w-full">
  <p class="text-base font-black text-neutral-900 dark:text-white">Pricing</p>
  <p class="text-xs/5 text-neutral-600 dark:text-neutral-400">Pay per seat and cancel anytime.</p>
</div>`,
    dont: `<div class="w-full">
  <p class="text-[10px] font-semibold tracking-widest text-violet-600 uppercase dark:text-violet-400">Pricing</p>
  <p class="text-base font-black text-neutral-900 dark:text-white">Simple pricing</p>
  <p class="text-xs/5 text-neutral-600 dark:text-neutral-400">Pay per seat and cancel anytime.</p>
</div>`,
  },

  'no-gradient-text': {
    do: `<p class="text-xl/6 font-black tracking-tight text-neutral-900 dark:text-white">Share code as images</p>`,
    dont: `<p class="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-xl/6 font-black tracking-tight text-transparent">Share code as images</p>`,
  },

  'no-emoji-decoration': {
    do: `<ul class="flex flex-col gap-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300">
  <li class="flex items-center gap-1.5">${icon(icons.checkCircle, 'size-4 text-neutral-400')}Unlimited projects</li>
  <li class="flex items-center gap-1.5">${icon(icons.checkCircle, 'size-4 text-neutral-400')}Custom domains</li>
  <li class="flex items-center gap-1.5">${icon(icons.checkCircle, 'size-4 text-neutral-400')}Team roles</li>
</ul>`,
    dont: `<ul class="flex flex-col gap-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300">
  <li>🚀 Unlimited projects</li>
  <li>✨ Custom domains</li>
  <li>🔥 Team roles</li>
</ul>`,
  },

  'no-glow-blobs': {
    do: `<div class="${card} w-full p-4">
  <p class="text-sm font-black text-neutral-900 dark:text-white">Weekly report</p>
  <p class="text-xs text-neutral-600 dark:text-neutral-400">Signups grew 12%.</p>
</div>`,
    dont: `<div class="relative w-full">
  <span class="absolute -top-6 -left-4 size-20 rounded-full bg-violet-500/50 blur-2xl"></span>
  <span class="absolute -right-4 -bottom-6 size-20 rounded-full bg-pink-400/50 blur-2xl"></span>
  <div class="relative rounded-lg bg-white/70 p-4 dark:bg-neutral-900/70">
    <p class="text-sm font-black text-neutral-900 dark:text-white">Weekly report</p>
    <p class="text-xs text-neutral-600 dark:text-neutral-400">Signups grew 12%.</p>
  </div>
</div>`,
  },

  'no-glass-cards': {
    do: `<div class="${card} w-full p-4">
  <p class="text-sm font-black text-neutral-900 dark:text-white">Team plan</p>
  <p class="text-xs text-neutral-600 dark:text-neutral-400">5 seats, billed yearly</p>
</div>`,
    dont: `<div class="w-full rounded-lg bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 p-3">
  <div class="rounded-lg bg-white/20 p-3 ring-1 ring-white/30 backdrop-blur">
    <p class="text-sm font-black text-white">Team plan</p>
    <p class="text-xs text-white/70">5 seats, billed yearly</p>
  </div>
</div>`,
  },

  'no-side-stripes': {
    do: `<div class="flex w-full gap-2 rounded-lg bg-info-50 p-3 dark:bg-info-500/10">
  ${icon(icons.informationCircle, 'size-4 shrink-0 text-info-500')}
  <p class="text-xs/4 font-medium text-info-800 dark:text-info-300">Exports now include fonts.</p>
</div>`,
    dont: `<div class="w-full rounded-lg border-l-4 border-violet-500 bg-white p-3 dark:bg-neutral-900">
  <p class="text-xs/4 font-medium text-neutral-800 dark:text-neutral-200">Exports now include fonts.</p>
</div>`,
  },

  'no-icon-tiles': {
    do: `<div class="grid w-full grid-cols-2 gap-2">
  <div class="${card}"><p class="text-xs font-black text-neutral-900 dark:text-white">Alerts</p><p class="text-[11px]/4 text-neutral-600 dark:text-neutral-400">Email when a build fails.</p></div>
  <div class="${card}"><p class="text-xs font-black text-neutral-900 dark:text-white">Favorites</p><p class="text-[11px]/4 text-neutral-600 dark:text-neutral-400">Pin projects you use daily.</p></div>
</div>`,
    dont: `<div class="grid w-full grid-cols-2 gap-2">
  <div class="${card}"><span class="mb-1.5 flex size-6 items-center justify-center rounded-md bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300">${icon(icons.bell, 'size-3.5')}</span><p class="text-xs font-black text-neutral-900 dark:text-white">Alerts</p><p class="text-[11px]/4 text-neutral-600 dark:text-neutral-400">Stay in the loop.</p></div>
  <div class="${card}"><span class="mb-1.5 flex size-6 items-center justify-center rounded-md bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300">${icon(icons.star, 'size-3.5')}</span><p class="text-xs font-black text-neutral-900 dark:text-white">Favorites</p><p class="text-[11px]/4 text-neutral-600 dark:text-neutral-400">Never miss a beat.</p></div>
</div>`,
  },

  'no-announcement-pill': {
    do: `<div class="w-full">
  <p class="text-lg/6 font-black tracking-tight text-neutral-900 dark:text-white">Share code as images</p>
  <p class="mt-1 text-xs text-neutral-600 dark:text-neutral-400">Paste a snippet, pick a theme, post it.</p>
</div>`,
    dont: `<div class="w-full">
  <span class="mb-2 inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-neutral-700 ring-1 ring-neutral-200 dark:bg-white/10 dark:text-neutral-300 dark:ring-white/15">✨ New: AI exports →</span>
  <p class="text-lg/6 font-black tracking-tight text-neutral-900 dark:text-white">Share code as images</p>
  <p class="mt-1 text-xs text-neutral-600 dark:text-neutral-400">Paste a snippet, pick a theme, post it.</p>
</div>`,
  },

  'no-glowing-buttons': {
    do: `<span class="${brandButton} px-3 py-1.5">Start free trial</span>`,
    dont: `<span class="rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-pink-500/50">Start free trial</span>`,
  },

  'no-hype-words': {
    do: `<div class="w-full">
  <p class="text-sm font-black text-neutral-900 dark:text-white">Screenshots for your code</p>
  <p class="text-xs/5 text-neutral-600 dark:text-neutral-400">Paste a snippet and get an image sized for social posts.</p>
</div>`,
    dont: `<div class="w-full">
  <p class="text-sm font-black text-neutral-900 dark:text-white">Supercharge your workflow</p>
  <p class="text-xs/5 text-neutral-600 dark:text-neutral-400">Unlock seamless, effortless sharing that elevates your code.</p>
</div>`,
  },

  'no-not-x-but-y': {
    do: `<p class="text-sm/5 font-medium text-neutral-800 dark:text-neutral-200">Codeshots turns a snippet into an image you can post.</p>`,
    dont: `<p class="text-sm/5 font-medium text-neutral-800 dark:text-neutral-200">It’s not just a screenshot tool. It’s a whole new way to share code.</p>`,
  },

  'no-vanity-stats': {
    do: `<div class="${card} w-full">
  <p class="text-xl font-black text-neutral-900 tabular-nums dark:text-white">1,284</p>
  <p class="text-[11px]/4 text-neutral-600 dark:text-neutral-400">screenshots shared last week</p>
</div>`,
    dont: `<div class="grid w-full grid-cols-3 gap-1.5 text-center">
  <div class="${card} px-1"><p class="text-base font-black text-neutral-900 dark:text-white">10x</p><p class="text-[10px] text-neutral-600 dark:text-neutral-400">faster</p></div>
  <div class="${card} px-1"><p class="text-base font-black text-neutral-900 dark:text-white">99.9%</p><p class="text-[10px] text-neutral-600 dark:text-neutral-400">uptime</p></div>
  <div class="${card} px-1"><p class="text-base font-black text-neutral-900 dark:text-white">24/7</p><p class="text-[10px] text-neutral-600 dark:text-neutral-400">support</p></div>
</div>`,
  },
}
