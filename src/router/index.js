import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=> import('../views/home/Home.vue');
const Category = ()=> import('../views/category/Category.vue');
const Cart = ()=> import('../views/cart/Cart.vue');
const Profile = ()=> import('../views/profile/Profile.vue');

const Detail= ()=> import('../views/detail/Detail.vue');
const Comment= ()=> import('../views/comment/Comment.vue');
const Register= ()=> import('../views/profile/childComponents/login/register.vue')







Vue.use(VueRouter)

const routes = [
  { path: '/', 
  redirect: '/home' 
},
  { path: '/home',
   component: Home 
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  },
  {
    path:'/comment',
    component: Comment
  },
  {
    path:'/register',
    component: Register
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
