import getters from '@/store/getter'
import Vuex from 'vuex'
import application from '@/store/module/application'

const store = new Vuex.Store({
  modules: {
    application
  },
  getters
})

export default store