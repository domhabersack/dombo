<script setup lang="ts">
defineProps<{
  /** Defaults to the deck's `author` config from the headmatter. */
  author?: string
  date?: string
}>()
</script>

<template>
  <div class="slidev-layout cover relative flex flex-col justify-center">
    <div class="max-w-3xl">
      <slot />
    </div>
    <!-- Name and date on their own lines instead of joined by a separator. -->
    <div v-if="(author ?? $slidev.configs.author) || date" class="absolute bottom-14 left-16 flex flex-col text-base">
      <span v-if="author ?? $slidev.configs.author" class="font-semibold text-neutral-900 dark:text-white">{{ author ?? $slidev.configs.author }}</span>
      <span v-if="date" class="dombo-muted">{{ date }}</span>
    </div>
  </div>
</template>
