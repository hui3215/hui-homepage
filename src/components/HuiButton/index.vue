<template>
  <button class="button">
    <slot name="default" />
  </button>
</template>
<script setup lang="ts">

</script>
<style scoped>
.button {
  padding: 0.75em 1.5em;
  border: none;
  outline: 2px solid var(--color);
  background-color: rgba(9, 11, 12, 0.398);
  color: white;
  border-radius: 0.25em;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s;
}

.button:hover {
}

.button:active{
  transform: scale(0.8);
}
</style>