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
    private readonly Product:Locator;
  //  private readonly viewProduct:Locator;
   // private readonly AddToCart:Locator;
    private readonly ShoppingBtn:Locator;
    private readonly ViewCart:Locator;

constructor (page:Page){
    this.page=page;
    this.AllProducts=page.getByText("All Products").nth(1);
    this.Category=page.getByText("Category").first();
    this.SearchProduct=page.getByPlaceholder("Search Product");
    this.SearchButton=page.locator('//button[@id="submit_search"]');
    this.Women=page.getByRole("link",{name:'WOMEN'}).first();
    this.Men=page.getByRole("link",{name:'MEN'}).first();
    this.Kids=page.getByRole("link",{name:'KIDS'}).first();
    this.Product = page.locator('.features_items .product-image-wrapper');
   // this.AddToCart=page.locator('//a[@data-product-id="1"]').first();
    this.ShoppingBtn=page.getByRole("button",{name:'Continue Shopping'});
    this.ViewCart=page.getByRole("link",{name:'View Cart'});
    //this.viewProduct=page.getByRole("link",{name:`/product_details/${}`})


}


async Products(index:number){
    const product= this.Product.nth(index);
    await product.click();
}

async Searchproduct(ProductName:string){
    await this.SearchProduct.fill(ProductName);
    await this.SearchButton.click();
}


    async SelectProduct(index:number){
    const product= this.Product.nth(index);

    }

    async addProduct(id:number){
        await this.page.locator(`//a[@data-product-id="${id}"]`).first().click();
    }

    async ContinueShopping(){
        await this.ShoppingBtn.click();
    }

    async viewCart(){
        await this.ViewCart.click();
    }

    async ViewProduct(id:number){

        const viewProduct=this.page.getByRole("link",{name:`/product_details/${id}`});
        await viewProduct.click();

    }






}