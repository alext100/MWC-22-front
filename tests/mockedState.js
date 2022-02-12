const state = {
  currentUser: localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData") || "")
    : "",

  isUserAuthenticated: !!localStorage.getItem("userData"),
};

export default state;
