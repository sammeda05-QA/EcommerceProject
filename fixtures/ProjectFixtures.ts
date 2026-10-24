import {test as base} from "@playwright/test";

import { homePage} from "@pages/Homepage";

type MyFixtures={
    HomePage:homePage;
}

export const test = base.extend<MyFixtures>({

    HomePage:async({page},use)=>{
        const HomePage = new homePage(page);
         await use(HomePage);
    }

    

})

 export{expect} from "@playwright/test";