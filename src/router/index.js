import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/components/Index.vue'
import SpuList from '@/components/SpuList.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/spuList',
    name: 'spilist',
    component: SpuList
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
