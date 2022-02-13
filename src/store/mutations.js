const mutations = {
  setCurrentUserRegisterData(state, payload) {
    state.currentUser = payload;
    state.isUserAuthenticated = true;
  },

  logoutUser(state) {
    state.isUserAuthenticated = false;
    state.currentUser = {
      email: "",
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      description: "",
    };
  },

  setTechSector(state, payload) {
    state.techSector = [...payload];
  },

  setTechSkills(state, payload) {
    state.techSkills = [...payload];
  },
};

export default mutations;
