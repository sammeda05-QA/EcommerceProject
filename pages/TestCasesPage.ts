import {Page,Locator} from "@playwright/test";

export class testCase{

    private readonly page:Page;
    private readonly TestCase: Locator;

constructor(page:Page){
    this.page=page;
    this.TestCase= page.getByText("Test Cases").nth(1);

}

async testCase(){
    await this.TestCase.isVisible();
}


}