import {Page,Locator} from "@playwright/test";

export class loginPage{

    private readonly page:Page;
    private readonly SignUp :Locator;
    private readonly Name: Locator;
    private readonly Email: Locator;
    private readonly SingupButton:Locator;
    private readonly LoginEmail:Locator;
    private readonly LoginPassword:Locator;
    private readonly LoginButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.SignUp= page.getByRole("link",{name:'Signup / Login'}).first();
        this.Name=page.getByPlaceholder("Name");
        this.Email=page.getByPlaceholder("Email Address").nth(1);
        this.SingupButton=page.getByRole("button",{name:'Signup',exact:true});
        this.LoginEmail=page.getByPlaceholder("Email Address").first();
        this.LoginPassword=page.getByPlaceholder("Password").first();
        this.LoginButton=page.getByRole("button",{name:'Login',exact:true}); 
    }

    async SingupLoginButton(){
           await this.SignUp.click();
    }
    async singUp(CustoermName:string,CustomerEmail:string){

    
       await this.Name.fill(CustoermName);
       await this.Email.fill(CustomerEmail);
       await this.SingupButton.click();

    }

    async Login(CustomerEmail:string,Password:string){
        await this.LoginEmail.fill(CustomerEmail);
        await this.LoginPassword.fill(Password);
        await this.LoginButton.click();
    }





}