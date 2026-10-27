import{test,expect} from "../fixtures/ProjectFixtures";

test("User Creation",async({page,HomePage,RegisterUser,createNewUser})=>{

    await HomePage.ProjectHomePage();

    await RegisterUser.NewCustomerRegestration("TestUser1","TestUser12345@test.com");

    await createNewUser.CreateNewUser("Test@123","Test","Testing","TestersPride","HAL 2nd stage"
        ,"Bihar","Gaya","123498","123456789"
    )

    await expect(page).toHaveURL("https://automationexercise.com/account_created");

    const SuccessMessage = page.getByText("Account Created!");

    await expect(SuccessMessage).toBeVisible();

     await expect(page.getByText(" Logged in as ")).toBeVisible();

    await expect(page.getByText("Account Deleted!")).toBeVisible();
})