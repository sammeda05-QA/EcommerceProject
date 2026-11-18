import {Page, Locator} from "@playwright/test";

export class Products{
    private readonly page:Page;
    private readonly SearchProduct:Locator;
    private readonly SearchButton: Locator;
    private readonly Category:Locator;
    private readonly AllProducts: Locator;
    private readonly Women :Locator;
    private readonly Men:Locator;
    private readonly Kids:Locator;
    private readonly FirstProduct:Locator;

constructor (page:Page){
    this.page=page;
    this.AllProducts=page.getByText("All Products").nth(1);
    this.Category=page.getByText("Category").first();
    this.SearchProduct=page.getByPlaceholder("Search Product");
    this.SearchButton=page.locator("#submit_search").nth(1);
    this.Women=page.getByRole("link",{name:'WOMEN'}).first();
    this.Men=page.getByRole("link",{name:'MEN'}).first();
    this.Kids=page.getByRole("link",{name:'KIDS'}).first();
    this.FirstProduct = page.locator('//a[@href="/product_details/1"]');

}


async ViewProduct(){
    await this.FirstProduct.click();
}










}