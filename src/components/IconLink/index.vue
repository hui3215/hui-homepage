<template>
  <div class="icon-link-inner">
    <a :href="url" @click="copyEventHandler" target="_blank">
      <SvgIcon class="icon" :name="icon" :size="size" />
    </a>
  </div>
</template>
<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'vuex'

const props = defineProps({
  icon: {
    type: String
  },
  size: {
    type: String,
    default: '1em'
  },
  url: {
    type: String
  },
  copy: {
    type: String
  }
})

/**
 * 没有链接复制信息
 */
function copyEventHandler() {
  if (props.copy) {
    if (!navigator.clipboard) {
      ElMessageBox.alert(`${props.copy}`, '账号信息', {
        confirmButtonText: 'OK'
      })
    }

    navigator.clipboard.writeText(props.copy).then(() => {
      ElMessage({
        message: '成功复制账号',
        type: 'success'
      })
    }, () => {
      ElMessage({
        message: '复制账号出现问题',
        type: 'warning'
      })
    })
  }

}
</script>

<style scoped>
.icon {
  transition: 0.5s;
  transform-origin: 50% 0%;
}


.icon-link-inner:hover .icon {
  animation: roatateAnimation 1s;
}

@keyframes roatateAnimation {
  0% {
    transform: rotate(-45deg);
  }
  25% {
    transform: rotate(45deg);
  }
  75% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>