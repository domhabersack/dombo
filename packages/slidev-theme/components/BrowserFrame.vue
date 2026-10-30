<script setup lang="ts">
import { computed } from 'vue'
import { resolveAssetUrl } from '../utils/assets'

const props = defineProps<{
  src?: string
  url?: string
}>()
const image = computed(() => (props.src ? resolveAssetUrl(props.src) : undefined))
</script>

<template>
  <div class="dombo-browser flex flex-col overflow-hidden rounded-xl bg-white dark:bg-neutral-900">
    <div class="flex shrink-0 items-center gap-3 bg-neutral-200/70 px-4 py-2.5 dark:bg-white/10">
      <span class="flex gap-1.5" aria-hidden="true">
        <span class="size-2.5 rounded-full bg-neutral-400/60 dark:bg-white/20" />
        <span class="size-2.5 rounded-full bg-neutral-400/60 dark:bg-white/20" />
        <span class="size-2.5 rounded-full bg-neutral-400/60 dark:bg-white/20" />
      </span>
      <span v-if="url" class="mx-auto truncate rounded-md bg-white px-3 py-0.5 text-xs text-neutral-500 dark:bg-white/10 dark:text-neutral-400">{{ url }}</span>
    </div>
    <div class="relative min-h-0 flex-1">
      <img v-if="image" :src="image" alt="" class="absolute inset-0 size-full object-cover object-top" />
      <slot />
    </div>
  </div>
</template>
