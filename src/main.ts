import './assets/main.css'
import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import SvgIcon from '@/components/SvgIcon.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
//需引入默认样式
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'
import store from '@/store'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(Vue3DraggableResizable)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
