import mutations from "@/store/mutations";
import state from "../mockedState";

let mockedState;

describe("Given a store mutations", () => {
  describe("When setCurrentUserRegisterData receives a state and payload with user", () => {
    let payload = {
      userData: {
        firstName: "Alex",
        lastName: "Alex",
        email: "alex@email.com",
        country: "España",
        city: "Barcelona",
        description: "Description",
      },
      id: "22",
    };
    mockedState = state;

    test("Then isUserAuthenticated should be true in store", () => {
      mutations.setCurrentUserRegisterData(mockedState, payload);

      expect(state.isUserAuthenticated).toBe(true);
    });

    test("Then currentUser in state should be equal to received data", () => {
      mutations.setCurrentUserRegisterData(mockedState, payload);

      expect(state.currentUser).toEqual(payload);
    });

    describe("When it receives a state and payload with empty object", () => {
      test("Then currentUser in store should be an empty object", () => {
        mockedState = state;
        payload = {};

        mutations.setCurrentUserRegisterData(mockedState, payload);

        expect(state.currentUser).toStrictEqual({});
      });
    });
  });

  describe("When it invoke logoutUser", () => {
    test("Then isUserAuthenticated should be false in store", () => {
      mockedState = state;

      mutations.logoutUser(state);

      expect(state.isUserAuthenticated).toBe(false);
    });

    test("Then currentUser should have properties equal to ''", () => {
      mockedState = state;
      const emptyUserData = {
        email: "",
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        description: "",
      };

      mutations.logoutUser(state);

      expect(state.currentUser).toEqual(emptyUserData);
    });
  });
});
