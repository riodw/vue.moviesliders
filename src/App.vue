<style>
.line-height-1 {
  line-height: 1;
}
</style>

<template>
  <div id="app">
    <Nav />
    <router-view />
    <div class="bg-light">
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  /* line-height: 1; */
}
</style>
