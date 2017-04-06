import Vue from 'vue'
import App from './app.vue'

import router from './router.js'

new Vue({
    router,
    render: h => h(App)
}).$mount('body')


console.log('main excute and Success！');
