import {Page,Locator} from "@playwright/test";

export class homePage{

    private readonly page:Page;
    private readonly Products:Locator;
    private readonly Cart:Locator;
    private readonly SignUpLogin:Locator;
    private readonly TestCases:Locator;
    private readonly APITesting:Locator;
    private readonly VideoTutorials:Locator;
    private readonly ContactUs:Locator;

    
    constructor (page:Page){

        this.page=page;
        this.Products=page.getByRole("link",{name:' Products'}).first();
        this.Cart=page.getByRole("link",{name:' Cart'});
        this.SignUpLogin=page.getByRole("link",{name:' Signup / Login'});
        this.TestCases=page.getByRole("link",{name:' Test Cases',exact:true});
        this.APITesting=page.getByRole("link",{name:' API Testing'});
        this.VideoTutorials=page.getByRole("link",{name:' Video Tutorials'});
        this.ContactUs=page.getByRole("link",{name:' Contact us'});

    }


    async ProjectHomePage(){

        await this.page.goto('/');
    }

    async ContactUSPage(){
        await this.ContactUs.click();
    }

    async SignupLoginPage(){
        await this.SignUpLogin.click();
    }

    async TestCasePage(){
        await this.TestCases.click();
    }

    async ProductsPage(){
        await this.Products.click();
    }
}