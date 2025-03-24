<script setup lang="ts">
extendCompodiumMeta({
  combo: ['variant', 'size'],
  defaultProps: {
    avatar: { src: 'https://github.com/benjamincanac.png' }
  }
})
</script>

<template>
  <UButton />
</template>
