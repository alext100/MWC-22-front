const actions = {
  registerUser({ commit }, userData) {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        country: userData.country,
        city: userData.city,
        description: userData.description,
      })
    );
    commit("setCurrentUserRegisterData", userData);
  },

  async deleteDataFromLocalStorage({ commit }) {
    localStorage.removeItem("userData");
    sessionStorage.clear();
    commit("logoutUser");
  },

  setTechSector({ commit }, profesionalSector) {
    commit("setTechSector", profesionalSector);
  },

  setTechSkills({ commit }, profesionalSkills) {
    commit("setTechSkills", profesionalSkills);
  },
};

export default actions;
