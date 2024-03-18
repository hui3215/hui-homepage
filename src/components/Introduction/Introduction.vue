<template>
  <Card class="introduction-inner">
    <template #header>
      <span>个人简介</span>
    </template>
    <template #default>
      <div class="introduction-content" v-html="getIntroductionContent()" />
    </template>
  </Card>
</template>
<script setup lang="ts">
import Card from '@/components/Card/index.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const introductionData = computed(() => store.getters.userInfo.introduction)
function getIntroductionContent() {
  let content = introductionData.value.content
  introductionData.value.keywords.forEach((item: any) => {
    if (content.includes(item)) {
      content = content.replaceAll(item, '<span class=\'highlight-keyword\' style="' +
        'color: var(--highlight-keyword-color);font-weight: bold">'
        +
        item
        +
        '</span>')
    }
  })
  return content
}
</script>
<style scoped>
.introduction-inner {
  padding: 1.5em;
  min-width: 20%;
  max-width: 40%;
  font-family: "阿里妈妈方圆体 VF Regular", serif !important;


}

.highlight-keyword {
  color: var(--highlight-keyword-color) !important;
}
</style>