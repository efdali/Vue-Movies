<template>
  <div id="app" class="container">
    <app-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/shared/AppHeader";
export default {
  name: "app",
  components: {
    "app-header":AppHeader
  }
};
</script>

<style>
</style>
