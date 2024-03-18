<template>
  <Card class="projectBoxes">
    <template #header>
      个人项目
    </template>
    <el-collapse v-model="activeName" accordion class="project-collapse-container">
      <el-collapse-item v-for="(item,index) in projectsInfo" :name="item.name" :key="index">
        <template #title>
          <div style="display: flex;align-items: center">
            <SvgIcon name="project" size="1.5em" />
            <span class="project-name">{{ item.name }}</span>
            <span v-for="(skill,i) in item.skills" :key="i" class="skill-item">
              <el-tag round effect="dark">{{ skill }}</el-tag>
            </span>
          </div>
        </template>
        <p>{{ item.description }}</p>
      </el-collapse-item>
    </el-collapse>
  </Card>
</template>
<script setup lang="ts">
import Card from '@/components/Card/index.vue'
import { computed, ref } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
import { useStore } from 'vuex'
const store = useStore();
const projectsInfo = computed(()=>{
  return store.getters.userInfo.projectsInfo;
})
const activeName = ref(projectsInfo.value[0].name)
</script>

<style scoped>
.projectBoxes {
  width: 30%;
  padding: 1em;
  min-width: 30%;
}

.project-collapse-container {
  --el-collapse-border-color: transpant;
  background-color: transparent !important;

  :deep(.el-collapse-item__wrap), :deep(.el-collapse-item__header) {
    background-color: transparent !important;
    color: white;
  }

  :deep(.el-collapse-item__content) {
    color: white;
  }

  .skill-item {
    margin: 0 0.2em;
  }
  .project-name{
    margin: 0 0.5em;
  }
}

</style>