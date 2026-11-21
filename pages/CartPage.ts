import{Page,Locator, expect} from "@playwright/test";

export class cartPage{

    private readonly page:Page;
    private readonly rows:Locator;
    private readonly cartProduct:Locator;
    private readonly cartDescription:Locator;
    private readonly cartPrice:Locator;
    private readonly cartQunatity:Locator;
    private readonly cartTotal:Locator;
    private readonly cartDelete:Locator;
    private readonly proceedToCheckOut:Locator;


    constructor(page:Page){
        this.page=page;
        this.rows=page.locator("#cart_info_table");
        this.cartProduct=page.locator(".cart_product");
        this.cartDescription=page.locator(".cart_description");
        this.cartPrice=page.locator(".cart_price");
        this.cartQunatity=page.locator(".cart_quantity");
        this.cartTotal=page.locator(".cart_total");
        this.cartDelete=page.locator(".cart_delete");
        this.proceedToCheckOut=page.getByRole("link",{name:'Proceed To Checkout'}); 
    }

    async verifyRow(ProductID:number ,description:string,price:string,qty:string,total:string){
        const product = this.page.locator(`#product-${ProductID}`);  
    await expect(product.locator('.cart_description')).toContainText(description);
    await expect(product.locator('.cart_price')).toHaveText(price);
    await expect(product.locator('.cart_quantity')).toHaveText(qty);
    await expect(product.locator('.cart_total')).toHaveText(total);
    }

    async checkOut(){
        await this.proceedToCheckOut.click();
    }

    async CountOfProduct(number:number){
        await expect(this.cartProduct).toHaveCount(number);
    }
}