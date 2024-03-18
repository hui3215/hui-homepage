<template>
  <div class="main-container">
    <BackgroundImage class="bg" />
    <div class="container" style="pointer-events: none">
      <el-scrollbar :height="height" style="pointer-events: auto">
        <div class="container-inner">
          <UserInfo />
          <UserSkills />
          <UserExperienced />
          <Introduction />
          <ProjectBoxs />
          <Footer class="small-screen-footer" />
        </div>
      </el-scrollbar>
    </div>
    <div class="footer-container">
      <Footer />
    </div>

  </div>
</template>
<script setup lang="ts">
import BackgroundImage from '@/components/background/index.vue'
import UserInfo from '@/components/UserInfo/UserInfo.vue'
import UserExperienced from '@/components/UserExperienced/UserExperienced.vue'
import UserSkills from '@/components/UserSkills/UserSkills.vue'
import Introduction from '@/components/Introduction/Introduction.vue'
import ProjectBoxs from '@/components/ProjectBoxs/ProjectBoxs.vue'
import Footer from '@/components/footer/Footer.vue'
import {  ref } from 'vue'


let height = ref()

</script>

<style scoped>
.main-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-container {
    position: absolute;
    bottom: 1em;
  }

  .small-screen-footer {
    display: none;
  }

}

.bg {
  width: 100%;
  height: 100%;
}

.container {
  position: absolute;
  left: 5em;
  top: 5em;
  right: 5em;
  bottom: 5em;


  .container-inner {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    transition: all 0.5s;
  }
}
</style>