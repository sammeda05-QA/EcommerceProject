import {test as base} from "@playwright/test";

import { homePage} from "../pages/Homepage";
import{loginPage} from "../pages/LoginPage";
import{CreateNewUser} from "../pages/CrateUser";

type MyFixtures={
    HomePage:homePage;
    LoginPage:loginPage;
    createNewUser:CreateNewUser;

}

export const test = base.extend<MyFixtures>({

    HomePage:async({page},use)=>{
        const HomePage = new homePage(page);
         await use(HomePage);
    }
,
    LoginPage:async({page},use)=>{
        const LoginPage = new loginPage(page);
        await use(LoginPage);
    }
 ,
 
    createNewUser:async({page},use)=>{
        const createNewUser = new CreateNewUser(page);
        await use(createNewUser);
    }

})

 export{expect} from "@playwright/test";