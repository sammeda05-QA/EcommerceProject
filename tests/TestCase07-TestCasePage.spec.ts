import {test,expect} from "../fixtures/ProjectFixtures";

test("Verify Test Cases Page", async({page,HomePage})=>{

    await HomePage.ProjectHomePage();

    await expect(page).toHaveURL("https://automationexercise.com/");

    await HomePage.TestCasePage();

    await expect(page).toHaveURL("https://automationexercise.com/test_cases");

    const TestCasePageURL= page.url();
    console.log(TestCasePageURL);

})