<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: rgb(229, 242, 253);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 10px;

  a {
    font-weight: bold;
    font-size: 30px;
    text-decoration: auto;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #052b5d;
    }
  }
}
:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
  --bairro-alto-logo-color: #fcb73c;
}
</style>
