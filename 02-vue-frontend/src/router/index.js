import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/PostsView.vue')
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import(/* webpackChunkName: "post" */ '../components/posts/PostId.vue')
  },
  {
    path: '/post-edit/:id',
    name: 'post-edit',
    component: () => import(/* webpackChunkName: "post" */ '../components/posts/PostEdit.vue')
  },
  {
    path: '/post-delete/:id',
    name: 'post-delete',
    component: () => import(/* webpackChunkName: "post" */ '../components/posts/PostDelete.vue')
  },
  {
    path: '/post-create',
    name: 'post-create',
    component: () => import(/* webpackChunkName: "post" */ '../components/posts/PostCreate.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "post" */ '../views/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
