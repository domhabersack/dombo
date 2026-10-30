<script setup lang="ts">
defineProps<{
  author?: string
  role?: string
}>()
</script>

<template>
  <div class="slidev-layout quote flex flex-col justify-center">
    <!-- A typographic quote mark rather than a drawn icon. -->
    <p class="dombo-quote-mark font-black text-neutral-300 dark:text-neutral-700" aria-hidden="true">“</p>
    <div class="dombo-quote max-w-4xl">
      <slot />
    </div>
    <p v-if="author" class="mt-8 text-lg">
      <span class="font-semibold text-neutral-900 dark:text-white">{{ author }}</span>
      <span v-if="role" class="dombo-muted">, {{ role }}</span>
    </p>
  </div>
</template>

<style scoped>
.dombo-quote-mark {
  margin: 0;
  font-size: 6rem;
  line-height: 0.8;
  height: 3.5rem;
}
.dombo-quote :deep(p),
.dombo-quote :deep(blockquote) {
  border: 0;
  padding: 0;
  font-size: 2.25rem;
  line-height: 1.3;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: inherit;
}
</style>
