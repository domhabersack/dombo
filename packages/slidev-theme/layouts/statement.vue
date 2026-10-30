<template>
  <div class="slidev-layout statement flex flex-col justify-center">
    <div class="dombo-statement max-w-4xl">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.dombo-statement :deep(h1) {
  font-size: 4rem;
  line-height: 1.1;
}
</style>
