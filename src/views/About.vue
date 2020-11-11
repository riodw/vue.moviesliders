<template>
  <div class="text-center">
    <div class="bg-light p-4 m-4">
      <div class="container">
        <div class="d-flex justify-content-center">
          <div
            class="overflow-hidden mb-2"
            style="border-radius: 1rem; width: 70px; box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.7);"
          >
            <img src="@/assets/logo.png" class="w-100" alt="logo" />
          </div>
        </div>

        <h1 class="my-2">
          MovieSliders
        </h1>

        <hr />

        <p>
          People judge an experience largely based on how they felt at its peak and at
          its end, rather than the total sum or average of every moment of the
          experience.
          <br />
          <br />
          This phenomenon is refered to as the Peak-End Rule.
        </p>
        <p>
          Rating movies is a puerly subjective art form. While this app can not make
          rating movies objective, it can solve the Peak-End Rule, and at a minimum,
          give you a way to compaire a feature film to any other on a one-to-one basis.
        </p>
        <p>
          There are 5 trends that are tracked. Each trened represents an aspect that can
          have high impact on a feature films enjoyment. The five trends are tracked in
          real time to create a perennial heart beat that you can use to know exactly
          how one felt durring the entertainment. While currently there are only five
          trends that are tracked, this may change in the future to allow custom trends.
        </p>
        <p>
          When a movie is finished a final rating is given. A rating is formed by taking
          the average of every data point from the Interest trend.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>
