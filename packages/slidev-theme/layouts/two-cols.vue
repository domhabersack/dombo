<script setup lang="ts">
defineProps<{
  /** Column split, e.g. "1fr 1fr" (default) or "2fr 3fr". */
  split?: string
}>()
</script>

<template>
  <div class="slidev-layout two-cols">
    <slot name="header" />
    <div class="grid gap-12" :style="{ gridTemplateColumns: split ?? '1fr 1fr' }">
      <div class="min-w-0"><slot /></div>
      <div class="min-w-0"><slot name="right" /></div>
    </div>
  </div>
</template>
