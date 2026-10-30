<script setup lang="ts">
defineProps<{
  value: string | number
  label: string
  /** e.g. "+12%" */
  delta?: string
  trend?: 'up' | 'down'
}>()
</script>

<template>
  <div class="dombo-card p-6">
    <p class="!m-0 !text-sm font-medium dombo-muted">{{ label }}</p>
    <p class="!m-0 mt-1 !text-4xl font-black tracking-tight text-neutral-900 dark:text-white" style="font-variant-numeric: tabular-nums">{{ value }}</p>
    <p
      v-if="delta"
      class="!m-0 mt-1 !text-sm font-medium"
      :class="trend === 'down' ? 'text-danger-600 dark:text-danger-400' : 'text-success-600 dark:text-success-400'"
    >
      {{ delta }}
    </p>
  </div>
</template>
