import Vue from "vue";
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// lodash
import VueLodash from "vue-lodash";
// charts
import VueApexCharts from "vue-apexcharts";
// components
import App from "./App.vue";

Vue.config.productionTip = false;

// middle
// Vue.use(require("vue-moment"));
// Vue.use(VueAxios, axios);
Vue.use(VueLodash);

// components
// Vue.component("VueCtkDateTimePicker", VueCtkDateTimePicker);
Vue.component("apexchart", VueApexCharts);

new Vue({
  render: h => h(App),
}).$mount("#app");
