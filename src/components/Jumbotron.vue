// https://getbootstrap.com/docs/4.5/examples/album/
<template>
  <div class="example">
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

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Thumbnail"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
              </svg>
              <div class="card-body">
                <p class="card-text"
                  >This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.</p
                >
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary"
                      >View</button
                    >
                    <button type="button" class="btn btn-sm btn-outline-secondary"
                      >Edit</button
                    >
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Thumbnail"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
              </svg>
              <div class="card-body">
                <p class="card-text"
                  >This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.</p
                >
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary"
                      >View</button
                    >
                    <button type="button" class="btn btn-sm btn-outline-secondary"
                      >Edit</button
                    >
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Thumbnail"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
              </svg>
              <div class="card-body">
                <p class="card-text"
                  >This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.</p
                >
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary"
                      >View</button
                    >
                    <button type="button" class="btn btn-sm btn-outline-secondary"
                      >Edit</button
                    >
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
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
