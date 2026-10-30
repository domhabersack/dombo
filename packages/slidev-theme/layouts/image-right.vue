<script setup lang="ts">
import { computed } from 'vue'
import { resolveAssetUrl } from '../utils/assets'

const props = defineProps<{
  image: string
  /** CSS object-fit for the image, defaults to cover. */
  fit?: 'cover' | 'contain'
  /** Optional caption shown under the image. */
  caption?: string
}>()
const src = computed(() => resolveAssetUrl(props.image))
</script>

<template>
  <div class="slidev-layout image-right grid h-full grid-cols-2 !p-0">
    <figure class="order-last relative m-0 h-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      <img :src="src" alt="" class="size-full" :class="fit === 'contain' ? 'object-contain p-10' : 'object-cover'" />
      <figcaption v-if="caption" class="absolute bottom-4 left-4 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-neutral-700 backdrop-blur dark:bg-neutral-900/80 dark:text-neutral-300">{{ caption }}</figcaption>
    </figure>
    <div class="flex min-w-0 flex-col justify-center px-14 py-14">
      <slot />
    </div>
  </div>
</template>
