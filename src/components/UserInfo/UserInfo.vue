<template>
  <Card class="user-info">
    <template #default>
      <div class="user-info-body">
        <div class="user-info-message">
          <el-avatar :src="avatar" size="large" shape="circle" fit="fill">
            {{ userInfo.userName }}
          </el-avatar>
          <h3 class="user-name">{{ userInfo.userName }}</h3>
          <div class="user-info-details">
            <IconInfoItem v-if="userInfo.email" icon="email" :content="userInfo.email" />
            <IconInfoItem v-if="userInfo.phone" icon="phone" :content="userInfo.phone" />
            <IconInfoItem v-if="userInfo.qualifications" icon="qualifications" :content="userInfo.qualifications" />
            <IconInfoItem v-if="userInfo.birthday" icon="birthday" :content="userInfo.birthday" />
            <IconInfoItem v-if="userInfo.description" icon="description" :content="userInfo.description" />
          </div>
          <div class="account-message">
            <ul class="user-info-accounts">
              <li class="user-info-account" v-for="(item,index) in userInfo.account" :key="index">
                <IconLink size="1.5em" :icon="item.icon" :url="item.url" :copy="item.copy" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
<script setup lang="ts">
import Card from '@/components/Card/index.vue'
import { computed } from 'vue'
import IconLink from '@/components/IconLink/index.vue'
import IconInfoItem from '@/components/IconInfoItem/index.vue'
import { useStore } from 'vuex'

const store = useStore()

const userInfo = computed(() => {
  return store.getters.userInfo
})


const avatar = computed(() => {
  return userInfo.value.avatar ? userInfo.value.avatar : './avatar.png'
})
</script>

<style scoped>
.user-info {
  width: 30%;
}

.user-info-message {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-info-details {
  margin-top: 1em;
}

.user-name {
  font-family: "阿里妈妈方圆体 VF Regular", serif;
  font-weight: bold;
  margin-top: 0.3em;
}

.user-info-accounts {
  margin-top: 1em;
  display: flex;
  flex-direction: row;

  li {
    margin: 0 0.5em;
  }
}

</style>