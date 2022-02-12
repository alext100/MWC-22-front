import actions from "@/store/actions";
import { configActionContext } from "../test-utils";

const commit = jest.fn();

describe("When the action deleteDataFromLocalStorage is invoked", () => {
  test("Then it should invoke commit with 'logoutUser'", async () => {
    await actions.deleteDataFromLocalStorage(configActionContext(commit));

    expect(commit).toHaveBeenCalledWith("logoutUser");
  });
});
