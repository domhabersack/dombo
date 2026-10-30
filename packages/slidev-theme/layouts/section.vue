<script setup lang="ts">
defineProps<{
  number?: string | number
}>()
</script>

<template>
  <div class="slidev-layout section flex flex-col justify-center bg-neutral-900 text-neutral-300 dark:bg-neutral-900">
    <p v-if="number" class="font-mono text-lg font-medium text-brand-400">{{ String(number).padStart(2, '0') }}</p>
    <div class="mt-4 max-w-3xl">
      <slot />
    </div>
  </div>
</template>

