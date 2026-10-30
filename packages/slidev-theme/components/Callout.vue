<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'info' | 'success' | 'warning' | 'danger'
    title?: string
  }>(),
  { type: 'info' },
)

const styles = {
  info: 'bg-info-50 text-info-800 dark:bg-info-500/10 dark:text-info-300',
  success: 'bg-success-50 text-success-800 dark:bg-success-500/10 dark:text-success-300',
  warning: 'bg-warning-50 text-warning-900 dark:bg-warning-400/10 dark:text-warning-300',
  danger: 'bg-danger-50 text-danger-800 dark:bg-danger-500/10 dark:text-danger-300',
}
</script>

<template>
  <div class="dombo-callout rounded-xl px-5 py-4" :class="styles[type]">
    <p v-if="title" class="!m-0 !text-base font-semibold">{{ title }}</p>
    <div class="!text-base" :class="title ? 'mt-1 opacity-90' : ''"><slot /></div>
  </div>
</template>
