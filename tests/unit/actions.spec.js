import actions from "@/store/actions";
import { configActionContext } from "../test-utils";

const commit = jest.fn();

describe("When the action deleteDataFromLocalStorage is invoked", () => {
  test("Then it should invoke commit with 'logoutUser'", async () => {
    await actions.deleteDataFromLocalStorage(configActionContext(commit));

    expect(commit).toHaveBeenCalledWith("logoutUser");
  });
});

describe("When the action registerUser is invoked", () => {
  test("Then it should invoke commit with setCurrentUserRegisterData and received data", async () => {
    const userData = {
      firstName: "Alex",
      lastName: "Alex",
      email: "alex@email.com",
      country: "España",
      city: "Barcelona",
      description: "Description",
    };
    jest.fn().mockResolvedValue({
      userData,
    });

    await actions.registerUser(configActionContext(commit), userData);

    expect(commit).toHaveBeenCalledWith("setCurrentUserRegisterData", userData);
  });
});
