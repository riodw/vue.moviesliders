// https://getbootstrap.com/docs/4.5/examples/album/
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

<template>
  <div class="jumbotitle">
    <div class="position-relative overflow-hidden p-3 p-md-5 m-3 text-center bg-light">
      <div class="col-md-8 col-lg-5 p-lg-5 mx-auto my-5">
        <div class="d-flex justify-content-center">
          <div
            class="overflow-hidden mb-3"
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
      <div class="product-device shadow-sm d-none d-lg-block"></div>
      <div class="product-device product-device-2 shadow-sm d-none d-lg-block"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumboTitle",
  components: {},
};
</script>
