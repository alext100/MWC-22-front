const state = {
  currentUser: localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData") || "")
    : "",

  isUserAuthenticated: !!localStorage.getItem("userData"),
  techSector: [],
  techSkills: [],
  currentUserProfesionalData: localStorage.getItem("profesionalInfo")
    ? JSON.parse(localStorage.getItem("profesionalInfo") || "")
    : "",
};

export default state;
