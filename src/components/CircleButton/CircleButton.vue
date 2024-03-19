<template>
  <button class="button circle">
    <slot name="default" />
  </button>
</template>
<script setup lang="ts">
</script>
<style scoped>
.circle {
  width: 3em;
  height: 3em;
  border-radius: 1.5em;
  padding: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>