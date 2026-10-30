<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger'
  }>(),
  { color: 'brand' },
)

const styles = {
  neutral: 'bg-neutral-100 text-neutral-700 dark:bg-white/10 dark:text-neutral-300',
  brand: 'bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300',
  success: 'bg-success-100 text-success-700 dark:bg-success-500/15 dark:text-success-300',
  warning: 'bg-warning-100 text-warning-800 dark:bg-warning-500/15 dark:text-warning-300',
  danger: 'bg-danger-100 text-danger-700 dark:bg-danger-500/15 dark:text-danger-300',
}
</script>

<template>
  <span class="inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium" :class="styles[color]">
    <slot />
  </span>
</template>
