import{Page,Locator} from "@playwright/test";

export class Contactus{

private readonly page:Page;
private readonly Name:Locator;
private readonly Email:Locator;
private readonly Subject:Locator;
private readonly  Message:Locator;
private readonly ChooseFile:Locator;
private readonly SubmitBtn:Locator;

constructor (page:Page){

    this.page=page;
    this.Name=page.getByPlaceholder("Name");
    this.Email=page.getByPlaceholder("Email").first();
    this.Subject=page.getByPlaceholder("Subject");
    this.Message=page.getByPlaceholder("Your Message Here");
    this.ChooseFile=page.getByRole("button",{name:'Choose File'})
    this.SubmitBtn=page.getByRole("button",{name:'Submit',exact:true});

}

async conactUsPage(name:string,email:string,subject:string,message:string,filePath:string){

    await this.Name.fill(name);
    await this.Email.fill(email);
    await this.Subject.fill(subject);
    await this.Message.fill(message);
    await this.ChooseFile.setInputFiles(filePath);
    await this.SubmitBtn.click();
}











}