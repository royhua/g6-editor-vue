import Vue from 'vue';
import Router from 'vue-router';
import Base from '@/pages/base';
import ModelFlow from '@/pages/model-flow';
import Display from '@/pages/display';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/base'
        },
        {
            path: '/base',
            name: 'Base',
            component: Base
        },
        {
            path: '/model-flow',
            name: 'ModelFlow',
            component: ModelFlow
        },
        {
            path: '/display',
            name: 'Display',
            component: Display
        }
    ]
});
