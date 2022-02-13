import { mount } from "@vue/test-utils";
import router from "@/router";
import Header from "../../src/components/Header.vue";

describe("Given a Header.vue component ", () => {
  describe("When it renders", () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router],
        mocks: {
          $store: {
            state: {
              isUserAuthenticated: true,
            },

            methods: {
              getUserFromLocalStorage: jest.fn(),
              deleteDataFromLocalStorage: jest.fn(),
              handleLogout: jest.fn(),

              this: jest.fn(),
            },
            commit: jest.fn(),
            dispatch: jest.fn(),
          },
        },
      },
    });
    test("Then it should renders html substring and show links to the pages", () => {
      const htmlSubString =
        '<nav class="navbar navbar-expand-sm navbar-light bg-light header-navbar">';

      expect(wrapper.html()).toContain(htmlSubString);
    });

    describe("When a user click on the 'logout'", () => {
      test("Then it should invoke handleLogout()", async () => {
        const logoutButton = wrapper.get('[data-test="logout"]');
        await logoutButton.trigger("click");
        const handleLogout = jest.fn();

        handleLogout();

        expect(handleLogout).toHaveBeenCalled();
      });
    });
  });
});
