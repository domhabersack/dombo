<template>
  <span class="inline-flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
    <!-- An elephant in profile whose ear is the letter D. -->
    <svg class="size-7" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" class="fill-brand-600" />
      <g fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12.75 6H14.5A3.5 3.5 0 0 1 18 9.5V12A3.5 3.5 0 0 1 14.5 15.5H12.75Z"/><path d="M12.75 6.5C9 6.5 6 9 6 12.5V17A1.5 1.5 0 0 0 9 17V15.25C9 13.6 10.6 12.5 12.75 12.5"/></g><circle cx="9.5" cy="9.9" r="0.95" fill="#fff"/>
    </svg>
    <slot>dombo</slot>
  </span>
</template>
