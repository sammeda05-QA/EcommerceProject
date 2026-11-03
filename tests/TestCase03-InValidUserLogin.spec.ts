import {test,expect} from "../fixtures/ProjectFixtures";

import user from "../test-data/user.json";

test("Login User with incorrect email and password",async({page,HomePage,LoginPage})=>{

    await HomePage.ProjectHomePage();

    await LoginPage.SingupLoginButton();

    await expect(page.getByText("Login to your account")).toBeVisible();
    await expect(page.getByText("New User Signup!")).toBeVisible();

    await LoginPage.Login(user.InvlaidUser.Email,user.InvlaidUser.Email);

    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();


})