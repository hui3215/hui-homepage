<template>
  <div class="background-inner">
    <div class="background-inner-l">
      <div v-for="i in 3" :key="i" class="c">
        <div v-for="k in 6" :key="k" :class="getBgItemClassName(k)">
          <BgItem>
            <template #default>
              <h1>{{ getRandomWord() }}</h1>
            </template>
          </BgItem>
        </div>
      </div>
    </div>
    <div class="background-inner-r">
      <div v-for="i in 3" :key="i" class="c">
        <div v-for="k in 6" :key="k" :class="getBgItemClassName(i)">
          <BgItem>
            <template #default>
              <h1>{{ getRandomWord() }}</h1>
            </template>
          </BgItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import BgItem from '@/components/background/components/BgItem.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const words = computed(() => {
  return store.getters.website.backgroundWords
})

const itemSet: Set<String> = new Set()
let countAddr = 0

function getRandomWord() {
  let size = words.value.length
  let min = 0
  let index = Math.floor(Math.random() * (size - min + 1)) + min
  return words.value[index]
}

/**
 * 获取类名
 * @param i
 */
function getBgItemClassName(i: Number) {
  countAddr++
  let className = `c-item c-item-${i} count-${countAddr}`
  itemSet.add(className)
  return className
}

function activeItem() {
  const size = itemSet.size
  const randomIndex = Math.floor(Math.random() * (size - 1))
  const key = `count-${randomIndex}`

  /**
   * 设置激活类名
   * @param item
   */
  function setActiveClassName(item: String) {
    const classname = item.split(' ')[2]
    let element = document.querySelector(`.${classname} .bg-item`)
    if (element) {
      element.classList.add('active')
      let interval = setInterval(() => {
        element.classList.remove('active')
        clearInterval(interval)
      }, 2000)

    }
  }

  for (let item of itemSet) {
    if (item.indexOf(key) > 0) {
      // 设置激活样式
      setActiveClassName(item)
      break
    }
  }
}

setInterval(activeItem, 1000)
</script>
<style scoped>
.background-inner {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: var(--background-color);
  overflow: hidden;

  .background-inner-r {
    display: flex;
    flex-direction: row;
    transform: rotateY(-10deg);
    width: 50%;

    .c {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;

      .c-item {
        padding: 8px;
        width: 100%;
        height: calc(100vh / 6);
      }
    }
  }

  .background-inner-l {
    display: flex;
    flex-direction: row;
    transform-origin: 10% 50%;
    transform: rotateY(10deg);
    width: 50%;

    .c {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;

      .c-item {
        padding: 8px;
        width: 100%;
        height: calc(100vh / 6);
      }
    }
  }
}
</style>