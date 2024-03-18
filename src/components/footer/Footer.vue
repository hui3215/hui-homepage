<template>
  <Card class="footer">
    <div class="footer-info-container">
      <a class="web-remark-number" target="_blank"
         href="https://beian.miit.gov.cn/">备案号：{{ ICPRecordNumber }}</a>
      <a href="https://github.com/hui3215" class="author-info">author：SpringHui</a>
    </div>
  </Card>
</template>
<script setup lang="ts">
import Card from '@/components/Card/index.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const ICPRecordNumber = computed(() => store.getters.website.ICPRecordNumber)
</script>
<style scoped>
.footer :deep(.card-inner-header) {
  padding: 0 !important;
}

.footer-info-container {
  display: flex;
  justify-content: center;
}

.footer-info-container:hover {
  color: var(--primary-color) !important;
}

.web-remark-number, a {
  color: #707070;
  text-decoration: none;
}

.author-info{
  text-decoration: none;
  margin-left: 0.5em;
}
</style>