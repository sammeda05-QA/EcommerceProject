import{test,expect} from "../fixtures/ProjectFixtures";

test("User Creation",async({page,HomePage,RegisterUser,createNewUser})=>{

    await HomePage.ProjectHomePage();

    await RegisterUser.NewCustomerRegestration("TestUser2","TestUser123456@test.com");

    await createNewUser.CreateNewUser("Test@123","Test","Testing","TestersPride","HAL 2nd stage"
        ,"Bihar","Gaya","123498","123456789"
    )

    await expect(page).toHaveURL("https://automationexercise.com/account_created");

    const SuccessMessage = page.getByText("Account Created!");

    await expect(SuccessMessage).toBeVisible();

    await createNewUser.ContinueToHomePage();

     await expect(page.getByText(" Logged in as ")).toBeVisible();

    await createNewUser.DeleteAccount();

    await expect(page).toHaveURL("https://automationexercise.com/delete_account");

    await expect(page.getByText("Account Deleted!")).toBeVisible();

    
})