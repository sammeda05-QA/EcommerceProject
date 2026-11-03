import{test,expect} from "../fixtures/ProjectFixtures";

test.beforeEach(async({HomePage})=>{

        await HomePage.ProjectHomePage();
})


test("Valid User Regestraion",async({page,LoginPage})=>{

    await LoginPage.Login("TestUser","TestUser@kaplam.com");

    await expect(page).toHaveURL("https://automationexercise.com/signup");
    const Text = page.getByText("Enter Account Information");

    await expect(Text).toBeVisible();

})

test("Duplicate Email Validation",async({page,LoginPage})=>{

        await LoginPage.Login("abc","abc@gmail.com");

        const Error = page.getByText("Email Address already exist!");

        await expect(Error).toBeVisible();  

})