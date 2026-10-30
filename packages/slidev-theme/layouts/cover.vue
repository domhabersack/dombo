<script setup lang="ts">
defineProps<{
  eyebrow?: string
  /** Defaults to the deck's `author` config from the headmatter. */
  author?: string
  date?: string
}>()
</script>

<template>
  <div class="slidev-layout cover relative flex flex-col justify-center overflow-hidden">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute -right-24 -top-24 size-96 rounded-full bg-brand-500/15 blur-3xl dark:bg-brand-500/20" />
      <div class="absolute -bottom-32 right-48 size-80 rounded-full bg-accent-300/20 blur-3xl dark:bg-accent-500/10" />
    </div>
    <p v-if="eyebrow" class="dombo-eyebrow relative">{{ eyebrow }}</p>
    <div class="relative mt-3 max-w-3xl">
      <slot />
    </div>
    <!-- Name and date on their own lines instead of joined by a separator. -->
    <div v-if="(author ?? $slidev.configs.author) || date" class="absolute bottom-14 left-16 flex flex-col text-base">
      <span v-if="author ?? $slidev.configs.author" class="font-semibold text-neutral-900 dark:text-white">{{ author ?? $slidev.configs.author }}</span>
      <span v-if="date" class="dombo-muted">{{ date }}</span>
    </div>
  </div>
</template>
