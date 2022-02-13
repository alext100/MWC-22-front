import { mount } from "@vue/test-utils";
import router from "@/router";
import ProfesionalInfo from "@/views/ProfesionalInfo.vue";
import { createStore } from "vuex";
import state from "../mockedState";

describe("Given a ProfesionalInfo.vue view ", () => {
  const store = createStore({
    state() {
      state.currentUser = {};
      state.isUserAuthenticated = true;
      state.techSector = [];
      state.techSkills = [];
      state.currentUserProfesionalData = [];
      return state;
    },
    actions: {
      setProfesionalInfo: jest.fn(),
      this: jest.fn(),
      handleSaveProfesionalInfo: jest.fn(),
      setTechSkills: jest.fn(),
      setTechSector: jest.fn(),
    },
  });

  const wrapper = mount(ProfesionalInfo, {
    global: {
      plugins: [router, store],
      mocks: {
        $store: {
          state: {
            currentUser: {},
            isUserAuthenticated: true,
            techSector: [],
            techSkills: [],
            currentUserProfesionalData: [],
          },

          methods: {
            getUserFromLocalStorage: jest.fn(),
            deleteDataFromLocalStorage: jest.fn(),
            handleSaveProfesionalInfo: jest.fn(),
            setProfesionalInfo: jest.fn(),

            this: jest.fn(),
          },
          commit: jest.fn(),
          dispatch: jest.fn(),
          stubs: ["router-link", "router-view"],
        },
      },
    },
  });

  describe("When it renders", () => {
    test("Then it should renders html substring", () => {
      const htmlSubString = "<h1>Tell us about your experience and knowledge</h1>";

      expect(wrapper.html()).toContain(htmlSubString);
    });

    test("Then it should show button text from html", () => {
      const buttonText = "Save";
      expect(wrapper.text()).toContain(buttonText);
    });
  });
});
