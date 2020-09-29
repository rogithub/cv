<template>
  <div id="app">
    <TopMenu />

    <router-view></router-view>
  </div>
</template>

<script>
import TopMenu from "./components/TopMenu.vue";

export default {
  name: "App",
  components: {
    TopMenu,
  },
};
</script>

<style>
/* Custom page CSS */
body {
  background-color: darkred;
}
.container {
  padding-top: 70px;
}
</style>
