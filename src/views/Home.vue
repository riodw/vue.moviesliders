<template>
  <div class="home">
    <div class="position-relative overflow-hidden p-3 p-md-5 m-3 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <div class="d-flex justify-content-center">
          <div
            class="overflow-hidden mb-2"
            style="border-radius: 1rem; width: 70px; box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.7);"
          >
            <img src="@/assets/logo.png" class="w-100" alt="logo" />
          </div>
        </div>
        <h1 class="display-4 font-weight-normal">
          MovieSliders
        </h1>
        <p class="lead font-weight-normal">
          Peak-End Rule - People judge an experience largely based on how they felt at
          its peak and at its end, rather than the total sum or average of every moment
          of the experience.
          <br />
          <br />
          We aim to fix that.
        </p>
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
    <Jumbotron />
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";

export default {
  name: "Home",
  components: {
    Jumbotron,
  },
};
</script>
