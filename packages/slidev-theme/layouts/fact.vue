<script setup lang="ts">
defineProps<{
  /** The number or short fact, e.g. "48%" */
  value?: string | number
  /** What the number means */
  label?: string
}>()
</script>

<template>
  <div class="slidev-layout fact flex flex-col items-center justify-center text-center">
    <p v-if="value" class="dombo-fact-value font-black tracking-tight text-brand-600 dark:text-brand-400">{{ value }}</p>
    <p v-if="label" class="mt-2 max-w-2xl text-2xl font-medium text-neutral-900 dark:text-white">{{ label }}</p>
    <div class="mt-6 max-w-2xl dombo-muted">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.dombo-fact-value {
  font-size: 8rem;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
</style>
