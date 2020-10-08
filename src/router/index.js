import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// jm
// import {canActivateRoute} from './protectedRoute';

Vue.use(VueRouter)

const routes = [
  
  // Top navigation
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue'),
    props(route) {
      return {  category: route.query.category, filter: route.query.filter }
    }
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    props: true, //för att kunna skicka över id
    component: () => import('../views/ProductDetails.vue')
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
    component: () => import('../views/Checkout.vue'),
    // children:[
    //   { path: '/',
    //   name: 'CheckoutForm',
    //   component: () => import('../components/Checkout/CheckoutForm.vue')},

    //   { path: 'checkoutOrderOk',
    //   name: 'CheckoutOrderOk',
    //   component: () => import('../components/Checkout/CheckoutOrderOk.vue')}
    // ]
  },

  {
    path: '/account/',
    name: 'MyAccount',
    component: () => import('../views/MyAccount.vue'),
    children:[
      { path: 'userProfile',
      name: 'UserProfile',
      component: () => import('../components/Account/UserProfile.vue'),
      meta:{authorize:true,mustBe:'user'} },

      { path: 'userOrders',
      name: 'UserOrders',
      component: () => import('../components/Account/UserOrders.vue'),
      meta:{authorize:true,mustBe:'user'} }
    ]
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: () => import('../views/Wishlist.vue')
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
  routes,

    scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

// kontroll om användare är inloggad och får gå till en viss sida
router.beforeEach((to, from, next)=>{
  // hämtar de typer som skickats med i metadata
  const {authorize,mustBe} = to.meta;
  // hämtar id för inloggad user
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'))

  if (authorize) {

    if (currentUser) {

      // let uservalid = canActivateRoute(to, mustBe,currentUser);
      // console.log(uservalid)

      if (!currentUser.id) {
        return next({path:'/account', query: {returnUrl: to.path}})
      }

    } else {
      return next({path:'/account', query: {returnUrl: to.path}})
    }

    // if (uservalid) {
    //     return next({path:'/account', query: {returnUrl: to.path}})
    // } else {
    //   return next({path:'/account', query: {returnUrl: to.path}})
    // }
  }
  next();

})

export default router
