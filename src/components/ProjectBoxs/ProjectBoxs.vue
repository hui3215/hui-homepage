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
        <div>
          <p>{{ item.description }}</p>
          <div class="btn-project-boxs" v-if="item.url">
            <CircleButton class="btn-circle" @click="openBlankUrl(item.url)">
              <template #default>
                <SvgIcon class="btn-circle-icon-link" :name="getProjectTypeIcon(item.url)" @click="openBlankUrl(item.url)" size="2.2em"/>
              </template>
            </CircleButton>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </Card>
</template>
<script setup lang="ts">
import Card from '@/components/Card/index.vue'
import { computed, ref } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
import { useStore } from 'vuex'
import CircleButton from '@/components/CircleButton/CircleButton.vue'

const remoteTypes = ['github', 'gitee', 'gitlab']
const DEFAULT_REMOTE_TYPE = "default-type"
const store = useStore()
const projectsInfo = computed(() => {
  return store.getters.userInfo.projectsInfo
})
const activeName = ref(projectsInfo.value[0].name)

/**
 * 获取项目仓库logo
 * @param url
 */
function getProjectTypeIcon(url: string) {
  for (let remoteType of remoteTypes) {
    if (url.includes(remoteType)){
      return remoteType;
    }
  }
  return DEFAULT_REMOTE_TYPE;
}

function openBlankUrl(url: string) {
  window.open(url.toString())
}
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

  .project-name {
    margin: 0 0.5em;
  }

  .btn-project-boxs {
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 0.5em;

    .btn-circle-icon-link{
      transition: 0.2s;
    }
    .btn-circle:hover{
       outline-width: 0.4em;
    }
    .btn-circle:hover .btn-circle-icon-link{
      transform: scale(1.2) rotate(360deg);
    }
  }
}

</style>