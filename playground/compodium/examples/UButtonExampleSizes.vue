<script setup lang="ts">
extendCompodiumMeta({
  combo: ['variant', 'size'],
  defaultProps: {
    label: 'Click me!',
    disabled: true
  }
})
</script>

<template>
  <UButton v-bind="$attrs" />
</template>
