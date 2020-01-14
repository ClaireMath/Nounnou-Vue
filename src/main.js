import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import './registerServiceWorker'
import axios from "axios";
import VueAxios from "vue-axios";

// on doit utiliser les deux axios DANS cet ordre dans les parenthèses
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

process.env.backUrl = "http://localhost:6001"

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
