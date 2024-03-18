<template>
  <Card class="user-skills">
    <template #header>
      个人技能
    </template>
    <template #default>
      <div class="skills-container">
        <ul>
          <li v-for="(item,index) in skills" :key="index">
            <div class="skill-item">
              <p>{{ item.skill }}</p>
              <el-progress :percentage="item.percentage" :color="customSkillColor" />
            </div>
          </li>
        </ul>
      </div>
    </template>
  </Card>
</template>
<script setup lang="ts">
import Card from '@/components/Card/index.vue'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const skills = computed(() => {
  return store.getters.userInfo.skills
})
const customSkillColor = computed(() => {
  return store.getters.userInfo.skillCustomColors
})

</script>
<style scoped>
.user-skills {
  width: 30em;
  padding: 1em;
}

.skill-item {
  margin-top: 0.5em;
}

.skill-item:first-child {
  margin-top: 0 !important;
}
</style>