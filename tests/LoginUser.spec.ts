import{test,expect} from "../fixtures/ProjectFixtures";
import user from "../test-data/user.json";

test("Login User with correct email and password",async({page,HomePage,LoginPage})=>{

    await HomePage.ProjectHomePage();

    await expect(page.getByText(" Home",{exact:true})).toBeVisible();

    await LoginPage.SingupLoginButton();

    await expect(page.getByText("Login to your account")).toBeVisible();

    await LoginPage.Login(user.firstUser.Email,user.firstUser.Password);

    await expect(page.getByText(" Logged in as ")).toBeVisible();
     




})