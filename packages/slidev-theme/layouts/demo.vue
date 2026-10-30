<script setup lang="ts">
import BrowserFrame from '../components/BrowserFrame.vue'

defineProps<{
  /** Screenshot or recording of the product. */
  image?: string
  /** Address shown in the browser chrome. */
  url?: string
}>()
</script>

<template>
  <div class="slidev-layout demo flex flex-col bg-neutral-100 dark:bg-neutral-950">
    <div class="shrink-0">
      <slot />
    </div>
    <div class="mt-6 min-h-0 flex-1">
      <BrowserFrame :src="image" :url="url" class="h-full">
        <slot name="screen" />
      </BrowserFrame>
    </div>
  </div>
</template>
