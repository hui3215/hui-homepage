<template>
  <Card class="user-experienced-inner">
    <template #header>
      <span>个人经历</span>
    </template>
    <el-timeline class="user-experienced" style="max-width: 600px">
      <el-timeline-item
        class="experienced-item"
        v-for="(activity, index) in experiences"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
        :timestamp="activity.timestamp"
      >
        <span class="experienced-content">{{ activity.content }}</span>
      </el-timeline-item>
    </el-timeline>
  </Card>
</template>
<script setup lang="ts">
import Card from '@/components/Card/index.vue'
import { computed, nextTick, onMounted, type Ref, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

interface Experience {
  content: String,
  timestamp: String,
  size?: String,
  type?: String,
  icon?: Object,
  color?: String,
  hollow?: Boolean
}

const experiences: Ref<Experience[]> = ref([] as Experience[])
const ex = computed(() => store.getters.userInfo.experiences)
experiences.value = ex.value;

const dynamicData: Ref<Experience[]> = ref([])

onMounted(() => {
  let sortedRxperiences = getSortedRxperiences()
  dynamicData.value = dynamicData.value.concat(sortedRxperiences)

  nextTick(() => {
    let timeLineItems = document.querySelectorAll('.experienced-item')
    for (let timeLineItem of timeLineItems) {
      timeLineItem.classList.add('time-line-item-transparent')
    }

    let index = 0
    let interval = setInterval(() => {
      if (index < timeLineItems.length) {
        let timeLineItem = timeLineItems[index]
        timeLineItem.classList.remove('time-line-item-transparent')
        timeLineItem.classList.add('time-line-item-show')
        index++
      } else {
        clearInterval(interval)
      }
    }, 500)
  })

})

function getSortedRxperiences(): Experience[] {
  return experiences.value.toSorted((a: any, b: any): number => {
    let dateA = new Date(a.timestamp)
    let dateB = new Date(b.timestamp)
    return dateA > dateB ? 0 : 1
  })
}
</script>
<style scoped>
.user-experienced-inner {
  padding: 1.5em;
  min-width: 18%;
}

.experienced-content {
  color: var(--primary-color);
  font-family: "阿里妈妈方圆体 VF Regular", serif;
}

.user-experienced {
  transition: all 1s;
}

.time-line-item-transparent {
  opacity: 0;
}

.time-line-item-show {
  animation: timeLineItemAnimation 0.5s ease-in-out;
  transform: translateY(0.5em);
}

@keyframes timeLineItemAnimation {
  from {
    opacity: 0;
    transform: translateY(0.5em);
  }
  to {
    opacity: 1;
    transform: translateY(-0.5em);

  }
}
</style>