<template>
  <div ref="cardInnerRef" class="card-inner">
    <div class="card-innner-wapper">
      <div class="card-inner-header">
        <slot name="header"></slot>
      </div>
      <div class="card-inner-body">
        <slot name="default" />
      </div>
      <div class="card-inner-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const cardInnerRef = ref()
const store = useStore()
const cardInfo = computed(() => {
  return store.getters.website.cardInfo
})
onMounted(() => {
  document.documentElement.style.setProperty('--theme', `var(--${cardInfo.value.theme})`)
  document.documentElement.style.setProperty('--card-width', `${cardInfo.value.borderWidth}`)
  document.documentElement.style.setProperty('--card-radius', `${cardInfo.value.borderRadius}`)

})
</script>

<style scoped>
.card-inner {
  margin: 8px;
  border: var(--card-width) solid transparent;
  border-radius: var(--card-radius);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: var(--theme);
  color: white;
  backdrop-filter: opacity(0.5);
  transition: 1s all;


  .card-inner-header {
    padding: 0.5em;
    font-family: "阿里妈妈方圆体 VF Regular", serif !important;
  }

  .card-inner-body {
    padding: 8px;
  }
}

.card-inner:hover {
  transform: translateY(-0.5em);
}


</style>