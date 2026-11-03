import{test,expect} from "../fixtures/ProjectFixtures";
import user from "../test-data/user.json";

test("User Creation",async({page,HomePage,LoginPage,createNewUser})=>{

    await HomePage.ProjectHomePage();

    await LoginPage.SingupLoginButton();
    await LoginPage.singUp(user.firstUser.name,user.firstUser.Email);

    await createNewUser.CreateNewUser(user.firstUser.Password,user.firstUser.FirstName,user.firstUser.LastName,
        user.firstUser.Company,user.firstUser.Address,user.firstUser.State,user.firstUser.City,
        user.firstUser.ZipCode,user.firstUser.MobileNumber
    )

    await expect(page).toHaveURL("https://automationexercise.com/account_created");

    const SuccessMessage = page.getByText("Account Created!");

    await expect(SuccessMessage).toBeVisible();

    await createNewUser.ContinueToHomePage();

     await expect(page.getByText(" Logged in as ")).toBeVisible();

  /*  await createNewUser.DeleteAccount();

    await expect(page).toHaveURL("https://automationexercise.com/delete_account");

    await expect(page.getByText("Account Deleted!")).toBeVisible();

    */
})