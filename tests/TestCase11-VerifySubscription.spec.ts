import{test,expect} from "../fixtures/ProjectFixtures";

test("Verify Subscription in home page",async({page,HomePage})=>{

    await HomePage.ProjectHomePage();
    
    await expect(page).toHaveURL("https://automationexercise.com/");

    //Scroll down to footer

    await page.locator("#footer").first().scrollIntoViewIfNeeded();

    //Verify text 'SUBSCRIPTION'

    await HomePage.VerifySubscription();

    //Enter email address in input and click arrow button
    await HomePage.SubscribeEmail("sam@kaplan.com");

    //Verify success message 'You have been successfully subscribed!' is visible
    const SuccessMessage = page.getByText("You have been successfully subscribed!");
    await expect(SuccessMessage).toBeVisible();

})