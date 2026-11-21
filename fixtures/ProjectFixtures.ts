import {test as base} from "@playwright/test";

import { homePage} from "../pages/Homepage";
import{loginPage} from "../pages/LoginPage";
import{CreateNewUser} from "../pages/CreateUser";
import {Contactus} from "../pages/ContactusPage";
import{testCase} from "../pages/TestCasesPage";
import {Products} from "../pages/ProductPage";
import{productDetails} from "../pages/ProductDetailsPage";
import{cartPage} from "../pages/CartPage";

type MyFixtures={
    HomePage:homePage;
    LoginPage:loginPage;
    createNewUser:CreateNewUser;
    ContactUS:Contactus;
    TestCase:testCase;
    ProductsPage:Products;
    ProductDetails:productDetails;
    CartPage:cartPage;
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
,
    ContactUS:async({page},use)=>{
        const ContactUS= new Contactus(page);
        await use(ContactUS);
    }
    ,

    TestCase:async({page},use)=>{
        const TestCase = new testCase(page);
        await use(TestCase);
    }
,
    ProductDetails:async({page},use)=>{
        const ProductDetails=new productDetails(page);
        await use(ProductDetails);
    }
,
    ProductsPage:async({page},use)=>{
        const ProductsPage=new Products(page);
        await use(ProductsPage);
    }
,
    CartPage:async({page},use)=>{
        const CartPage=new cartPage(page);
        await use(CartPage);
    }
})

 export{expect} from "@playwright/test";