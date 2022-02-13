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
    localStorage.removeItem("profesionalInfo");
    sessionStorage.clear();
    commit("logoutUser");
  },

  setTechSector({ commit }, profesionalSector) {
    commit("setTechSector", profesionalSector);
  },

  setTechSkills({ commit }, profesionalSkills) {
    commit("setTechSkills", profesionalSkills);
  },

  setProfesionalInfo({ commit }, profesionalInfo) {
    localStorage.setItem(
      "profesionalInfo",
      JSON.stringify({
        experience: profesionalInfo.experience,
        techSector: profesionalInfo.techSector,
        techSkills: profesionalInfo.techSkills,
      })
    );
    commit("setCurrentUserProfesionalData", profesionalInfo);
  },
};

export default actions;
