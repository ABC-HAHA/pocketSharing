import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import './common/filter.js'
Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store
// Vue.prototype.websiteUrl = 'http://192.168.5.254:8081/earnshare-api';
Vue.prototype.websiteUrl = 'http://47.75.68.227/earnshare-api';
// Vue.prototype.websiteUrl = 'http://192.168.5.123:8081/earnshare-api';
// Vue.prototype.websiteUrl = 'http://192.168.43.68:8081/earnshare-api';

const app = new Vue({
	...App
})
app.$mount()
