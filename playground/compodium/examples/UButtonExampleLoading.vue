<script setup lang="ts">
extendCompodiumMeta({
  combo: ['variant', 'size'],
  defaultProps: {
    label: 'Click me!',
    loading: true
  }
})
</script>

<template>
  <UButton />
</template>
