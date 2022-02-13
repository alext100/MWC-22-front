<template>
  <div class="container profile-container">
    <h1>Profile</h1>

    <full-card type="body" class="mb-1 mt-2 mb-xl-0" bodyClasses="p-5" :shadow="true">
      <template v-slot:header>
        <h2 class="card-title text-uppercase text-muted mb-3">Your personal info:</h2>
      </template>
      <p class="card-text">{{ currentUser.firstName }} {{ currentUser.lastName }}</p>
      <p class="card-text">Country: {{ currentUser.country }}</p>
      <p class="card-text">City: {{ currentUser.city }}</p>
      <p class="card-text">Email: {{ currentUser.email }}</p>
      <p class="card-text">About you: {{ currentUser.description }}</p>

      <template v-slot:icon><img :src="avatarUrl" alt="profile-random-image" /></template>
    </full-card>

    <full-card type="body" class="mb-1 mt-2 mb-xl-0" bodyClasses="p-5" :shadow="true">
      <template v-slot:header>
        <h2 class="card-title text-uppercase text-muted mb-3">Your profesional info:</h2>
      </template>

      <template v-slot:icon><em class="fas fa-laptop-code"></em></template>

      <p>
        <span class="card-text">Your experience in years: </span
        >{{ currentUserProfesionalData.experience }}
      </p>

      <div class="container container__sector">
        <div class="header-container-sm">
          <h3 class="h3 card__header-sm">Your sectors:</h3>
        </div>
        <full-card
          type="body"
          class="mb-1 mt-2 mb-xl-0 w-25"
          bodyClasses="p-0 m-0"
          :shadow="true"
          v-for="techSector in currentUserProfesionalData.techSector || []"
          :key="techSector"
          >{{ techSector }}
        </full-card>
      </div>

      <div class="container container__skills">
        <div class="header-container-sm">
          <h3 class="h3 card__header-sm mt-3">Your skills:</h3>
        </div>
        <full-card
          type="body"
          class="mb-1 mt-1 mb-xl-0 w-50"
          bodyClasses="p-0 m-1"
          :shadow="true"
          v-for="skill in currentUserProfesionalData.techSkills || []"
          :key="skill"
          >{{ skill }}
        </full-card>
      </div>
    </full-card>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import FullCard from "@/components/FullCard.vue";
import getAvatar from "@/utils/getAvatar";

export default defineComponent({
  name: "Profile",
  components: {
    FullCard,
  },
  data() {
    return {
      avatarUrl: null,
    };
  },
  computed: {
    ...mapState(["currentUser", "currentUserProfesionalData"]),
  },
  methods: {
    async getAvatarUrl() {
      this.avatarUrl = await getAvatar(this.currentUser.firstName, this.currentUser.lastName);
    },
  },
  async created() {
    await this.getAvatarUrl();
  },
});
</script>

<style scoped>
.card-text {
  font-size: 20px;
}
.container__sector,
.container__skills {
  display: flex;
  flex-wrap: wrap;
}
.header-container-sm {
  width: 100vw;
}
</style>
