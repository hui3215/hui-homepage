<template>
  <div class="icon-info-item-inner">
    <SvgIcon :name="icon" size="1.5em" />
    <span>{{ content }}</span>

  </div>
</template>
<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'

defineProps({
  icon: {
    type: String,
    required: true
  },
  content: {
    type: String
  }
})
</script>

<style scoped>
.icon-info-item-inner {
  display: flex;
  justify-content: start;
  margin: 1em 0;

  span {
    margin-left: 0.5em;
  }
}
</style>