<template>
  <footer class="container py-5">
    <div class="row">
      <div class="col-md col-sm-12">
        <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="d-block mb-2"
            role="img"
            viewBox="0 0 24 24"
            focusable="false"
          >
            <title>Product</title>
            <circle cx="12" cy="12" r="10"></circle>
            <path
              d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
            ></path>
          </svg> -->
        <div class="overflow-hidden mb-2" style="border-radius: .6rem; width: 40px;">
          <img src="@/assets/logo.png" class="w-100" alt="logo" />
        </div>
        <small class="d-block mb-3 text-muted">
          © 2020
        </small>
      </div>
      <div class="col-md col-sm-12">
        <h5>
          App
        </h5>
        <ul class="list-unstyled text-small">
          <li>
            <router-link to="/" class="text-muted">
              Home
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-md col-sm-12">
        <h5>
          Project
        </h5>
        <ul class="list-unstyled text-small">
          <li>
            <a class="text-muted" href="https://github.com/riodw/flutter.moviesliders">
              iOS App Code
            </a>
          </li>
          <li>
            <a class="text-muted" href="https://github.com/riodw/vue.moviesliders">
              Vue Site Code
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md col-sm-12">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li>
            <a
              class="text-muted"
              href="https://medium.com/moviesliders/about-moviesliders-201136405ec6"
            >
              MovieSliders
            </a>
          </li>
          <li>
            <a
              class="text-muted"
              href="https://medium.com/moviesliders/about-moviesliders-4ac5dde3022"
            >
              Motivation
            </a>
          </li>
          <li>
            <router-link to="/privacy" class="text-muted">
              Privacy
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
