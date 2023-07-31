import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false
Vue.use(VuetifyDialog, {
    context: {
        vuetify
    }
})

new Vue({
    vuetify,
    router,
    mounted() {
        AOS.init()
    },
    render: h => h(App)
}).$mount('#app')
