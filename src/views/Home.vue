<template>
  <div class="home">
    <JumboTitle />

    <!-- <div class="d-md-flex flex-md-equal w-100 pl-md-3">
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
    </div> -->

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <ReviewCard />
          </div>
          <div class="col-lg-4 col-md-6">
            <ReviewCard />
          </div>
          <div class="col-lg-4 col-md-6">
            <ReviewCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueApexCharts from "vue-apexcharts";
// components
import JumboTitle from "@/components/JumboTitle.vue";
import ReviewCard from "@/components/ReviewCard.vue";

export default {
  name: "Home",
  components: {
    JumboTitle,
    ReviewCard,
    // apexcharts: VueApexCharts,
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
