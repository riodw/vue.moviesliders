<style></style>

<template>
  <div class="reviewcard">
    <div class="card border-0 mb-4">
      <div class="border overflow-hidden" style="max-height: 200px;">
        <div class="ml-n4" style="width: 110%;">
          <apexcharts
            :options="chartOptions"
            :series="series"
            height="215"
            type="line"
          ></apexcharts>
        </div>
      </div>
      <div class="card-body pl-0">
        <h5 class="mb-1" style="min-height: 50px; max-height: 50px;">
          <strong>
            Pirates of the Caribbean: Dead Men Tell No Tales
          </strong>
        </h5>
        <div class="text-secondary">
          2017 &mdash; Rating: 3.4
        </div>
        <div class="media mt-3">
          <div class="rounded-circle overflow-hidden mr-2">
            <svg
              class="bd-placeholder-img"
              width="36"
              height="36"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>
                Placeholder
              </title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>
          </div>
          <div class="media-body line-height-1">
            Rio Weber
            <!-- <b> </b> -->
            <div class="text-muted">
              <small>
                Jan 15, 2018
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "ReviewCard",
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
