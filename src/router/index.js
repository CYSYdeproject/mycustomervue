import Vue from 'vue'
import Router from 'vue-router'
import Customer from '@/components/Customer'
import User from '@/components/User'
import Vip from '@/components/Vip'
import AddCustomer from '@/components/AddCustomer'
import EditCustomer from '@/components/EditCustomer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/addCustomer',
      name: 'AddCustomer',
      component: AddCustomer
    },
    {
      path: '/editCustomer',
      name: 'EditCustomer',
      component: EditCustomer
    },
    

  ]
})
