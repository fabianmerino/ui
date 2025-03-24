<script setup lang="ts">
extendCompodiumMeta({
  combo: ['variant', 'size'],
  defaultProps: {
    label: 'Click me!',
    icon: 'i-lucide-rocket'
  }
})
</script>

<template>
  <UButton />
</template>
