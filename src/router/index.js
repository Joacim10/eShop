import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  // Top navigation
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/shop/:produktId',
    name: 'Product',
    component: () => import('../views/ProductDetails.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/pages',
    name: 'Pages',
    component: () => import('../views/Pages.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },

// --- Shopping related

  {
    path: '/shoppingcart',
    name: 'Shoppingcart',
    component: () => import('../views/Shoppingcart.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/account',
    name: 'MyAccount',
    component: () => import('../views/MyAccount.vue')
  },
  {
    path: '/whishlist',
    name: 'Whishlist',
    component: () => import('../views/Whishlist.vue')
  },
  {
    path: '/compare',
    name: 'Compare',
    component: () => import('../views/Compare.vue')
  },


 // --- Others

 {
  path: '/about',
  name: 'About',
  component: () => import('../views/About.vue')
},
{
  path: '/team',
  name: 'Team',
  component: () => import('../views/Team.vue')
},
{
  path: '/portfolio',
  name: 'Portfolio',
  component: () => import('../views/Portfolio.vue')
},

{
  path: '/portfolio/:portfolioId',
  name: 'PortfolioDetails',
  component: () => import('../views/PortfolioDetails.vue')
},

 {
  path: '/contact',
  name: 'Contact',
  component: () => import('../views/Contact.vue')
},

 // 404
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
