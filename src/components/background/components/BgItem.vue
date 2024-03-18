<template>
  <div class="bg-item">
    <slot name="default" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})


</script>

<style scoped>
.bg-item {
  width: 100%;
  height: 100%;
  border: 3px solid var(--primary-color);
  border-radius: 8px;
  transition: 0.5s ease-in-out;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  font-size: 2em;
  font-family: "阿里妈妈刀隶体 Regular", serif;
  -webkit-user-select: none; /*webkit浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;

}


.bg-item:hover, .active {
  opacity: 1;
  scale: 1.02;
  background-color: color-mix(in hsl, var(--color), transparent 20%);
  box-shadow: 0 0 10px var(--color), 0 0 40px var(--color);
  border: 3px solid transparent;
  color: var(--background-color);
}
</style>