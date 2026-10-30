<script setup lang="ts">
defineProps<{
  /** Contact line or URL shown under the content. */
  contact?: string
}>()
</script>

<template>
  <div class="slidev-layout end flex flex-col items-center justify-center text-center">
    <slot>
      <h1>Thank you</h1>
    </slot>
    <p v-if="contact" class="mt-6 text-lg font-medium text-neutral-600 dark:text-neutral-400">{{ contact }}</p>
  </div>
</template>
