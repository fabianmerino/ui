<script setup lang="ts">
extendCompodiumMeta({
  combo: ['variant', 'color'],
  defaultProps: {
    label: 'Click me!',
    disabled: true
  }
})
</script>

<template>
  <UButton />
</template>
