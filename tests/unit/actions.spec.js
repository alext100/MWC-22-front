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

describe("When the action setTechSector is invoked", () => {
  test("Then it should invoke commit with 'setTechSector'  and received data", async () => {
    const profesionalSector = ["Front", "Back"];

    await actions.setTechSector(configActionContext(commit), profesionalSector);

    expect(commit).toHaveBeenCalledWith("setTechSector", profesionalSector);
  });
});

describe("When the action setTechSkills is invoked", () => {
  test("Then it should invoke commit with 'setTechSkills' and received data", async () => {
    const profesionalSkills = ["HTML", "React"];

    await actions.setTechSkills(configActionContext(commit), profesionalSkills);

    expect(commit).toHaveBeenCalledWith("setTechSkills", profesionalSkills);
  });
});

describe("When the action setProfesionalInfo is invoked", () => {
  test("Then it should invoke commit with 'setCurrentUserProfesionalData' and received data", async () => {
    const profesionalInfo = ["HTML", "React"];

    await actions.setProfesionalInfo(configActionContext(commit), profesionalInfo);

    expect(commit).toHaveBeenCalledWith("setCurrentUserProfesionalData", profesionalInfo);
  });
});
