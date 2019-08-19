import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home'
import Film from '../components/pages/Film'

Vue.use(VueRouter)

const router=new VueRouter({
    mode:'history',
    routes:[
        {
            path :'/',
            component:Home
        },
        {
            path:'/film/:id',
            component:Film
        }
    ]

});

export default router;