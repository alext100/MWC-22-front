<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light header-navbar">
    <div class="container-fluid p-0">
      <router-link to="/" data-target=".navbar-collapse.show" data-toggle="collapse">
        <img
          class="logo-image p-0 ms-5"
          src="https://www.mwcbarcelona.com/images/logo-default.svg"
          alt="MWC Barcelona 2022"
        />
      </router-link>
      <button
        class="navbar-toggler bg-body m-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
        <ul class="navbar-nav ms-5">
          <li
            v-if="!isUserAuthenticated"
            class="nav-item"
            data-target=".navbar-collapse.show"
            data-toggle="collapse"
          >
            <router-link class="nav-link login-text" to="/register">{{ "Sing Up" }} </router-link>
          </li>

          <li
            v-if="isUserAuthenticated"
            class="nav-item"
            data-target=".navbar-collapse.show"
            data-toggle="collapse"
          >
            <router-link class="nav-link" to="/"
              ><button class="logout-button" @click="handleLogout()" data-test="logout">
                Log out
              </button></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "Header",
  computed: { ...mapState(["isUserAuthenticated", "currentUser"]) },
  methods: {
    ...mapActions(["deleteDataFromLocalStorage"]),
    handleLogout() {
      this.deleteDataFromLocalStorage();
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.header-navbar {
  background: url("../../public/header_img.webp") no-repeat top left;
}
.header-navbar,
.logout-button,
.login-text {
  margin: 0;
  padding-bottom: 0;
  padding-top: 0;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.1rem;
  line-height: 1.1875;
  letter-spacing: 0.3em;
}
.logout-button {
  padding-right: 0.5rem;
  padding-left: 0;
  background-color: transparent;
  border: transparent;
}
a,
.logout-button,
.login-text {
  color: #d59758 !important;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: larger;
  font-weight: 700;
}
.logo-image {
  width: 100%;
  height: 50px;
}
</style>
