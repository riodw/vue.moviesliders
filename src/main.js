import Vue from "vue";
// router
import VueRouter from "vue-router";
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// lodash
import VueLodash from "vue-lodash";
// charts
import VueApexCharts from "vue-apexcharts";

// components
import App from "./App.vue";

import router from "./router";

Vue.config.productionTip = false;

// middle
// Vue.use(require("vue-moment"));
// Vue.use(VueAxios, axios);
Vue.use(VueLodash);
Vue.use(VueRouter);

// components
// Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);
Vue.component("apexchart", VueApexCharts);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
