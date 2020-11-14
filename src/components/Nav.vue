<template>
  <nav class="site-header py-1 bg-dark">
    <div
      class="container d-flex flex-column flex-md-row justify-content-between align-items-center"
    >
      <router-link to="/" class="py-1 d-none d-md-inline-block navbar-brand">
        <div
          class="overflow-hidden"
          style="border-radius: .6rem; width: 40px; box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.7);"
        >
          <img src="@/assets/logo.png" class="w-100" alt="logo" />
        </div>
      </router-link>
      <router-link to="/" class="py-2 d-none d-md-inline-block text-light">
        Home
      </router-link>
      <a
        href="https://medium.com/moviesliders/about-moviesliders-201136405ec6"
        class="py-2 d-none d-md-inline-block text-light"
      >
        About
      </a>
      <a
        href="https://medium.com/moviesliders/about-moviesliders-4ac5dde3022"
        class="py-2 d-none d-md-inline-block text-light"
      >
        Motivation
      </a>
      <a
        href="https://www.facebook.com/MovieSliders"
        class="py-2 d-none d-md-inline-block text-light"
      >
        Support
      </a>
      <router-link to="/privacy" class="py-2 d-none d-md-inline-block text-light">
        Privacy
      </router-link>
    </div>
  </nav>
</template>
