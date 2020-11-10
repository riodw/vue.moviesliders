// https://getbootstrap.com/docs/4.5/examples/album/
<template>
  <div class="example">
    <div class="position-relative overflow-hidden p-3 p-md-5 m-3 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <div class="d-flex justify-content-center">
          <div
            class="overflow-hidden mb-2"
            style="border-radius: .9rem; width: 70px; box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.7);"
          >
            <img alt="logo" src="@/assets/logo.png" class="w-100" />
          </div>
        </div>
        <h1 class="display-4 font-weight-normal">
          MovieSliders
        </h1>
        <!-- <p class="lead font-weight-normal">
          And an even wittier subheading to boot. Jumpstart your marketing efforts with
          this example based on Apple’s marketing pages.
        </p> -->
        <a class="btn btn-outline-dark" href="#">
          App Store
        </a>
        <!-- <a class="btn btn-outline-dark" href="#">
          Android
        </a> -->
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
    <div class="d-md-flex flex-md-equal w-100 pl-md-3">
      <div class="bg-light mr-md-3 mb-3 text-center overflow-hidden" style="flex: 1;">
        <div class="card-body">
          <div class="p-3">
            <h2 class="display-5">
              Pirates of the Caribbean: Dead Men Tell No Tales
            </h2>
            <p class="lead">
              2018 &mdash; Rating: 6
            </p>
          </div>
          <div
            class="card bg-white shadow-sm mx-auto mb-3 overflow-hidden"
            style="height: 300px; border-radius: 21px; max-width: 700px;"
          >
            <div style="width: 105%; margin-left: -3.5%;">
              <apexcharts
                height="315"
                type="line"
                :options="chartOptions"
                :series="series"
              ></apexcharts>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-light mr-md-3 mb-3 text-center overflow-hidden" style="flex: 1;">
        <div class="card-body">
          <div class="p-3">
            <h2 class="display-5">
              Altered Carbon: Season 1 Episode 5 (The Wrong Man)
            </h2>
            <p class="lead">
              2018 &mdash; Rating: 6
            </p>
          </div>
          <div
            class="card bg-white shadow-sm mx-auto mb-3 overflow-hidden"
            style="height: 300px; border-radius: 21px; max-width: 700px;"
          >
            <div style="width: 105%; margin-left: -3.5%;">
              <apexcharts
                height="315"
                type="line"
                :options="chartOptions"
                :series="series"
              ></apexcharts>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.product-device-2 {
  top: -30%;
  right: auto;
  bottom: 0;
  left: 10%;
  /* background-color: #e5e5e5; */
}
.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}
.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}
</style>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "basic-bar",
          type: "line",
          toolbar: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        stroke: {
          curve: "smooth",
          // lineCap: "butt",
          colors: ["#01e675", "#2ab6f6", "#bd00ff", "#fdff00", "#c62928"],
          width: 3,
        },
      },
      series: [
        {
          name: "series-1",
          data: [20, 30, 35, 80, 30, 40, 60, 50],
        },
        {
          name: "series-1",
          data: [10, 20, 35, 30, 40, 10, 10, 40],
        },
        {
          name: "series-1",
          data: [10, 10, 50, 10, 20, 10, 20, 30],
        },
        {
          name: "series-1",
          data: [5, 10, 15, 5, 10, 10, 5, 20],
        },
        {
          name: "series-1",
          data: [30, 40, 45, 50, 50, 60, 75, 90],
        },
      ],
    };
  },
};
</script>
