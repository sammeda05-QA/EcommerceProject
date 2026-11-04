import{test,expect} from "../fixtures/ProjectFixtures";

import users, { user } from "../test-data/user.json";

test("Register User with existing email",async({page,HomePage,LoginPage})=>{

await HomePage.ProjectHomePage();

await expect(page).toHaveURL("https://automationexercise.com/");

await LoginPage.SingupLoginButton();

await expect(page.getByText("New User Signup!")).toBeVisible();

await LoginPage.singUp(users.SecondUser.name,users.SecondUser.Email);

await expect(page.getByText("Email Address already exist!")).toBeVisible();



})