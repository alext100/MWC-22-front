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
};

export default actions;
