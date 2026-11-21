import{Page,Locator,expect} from "@playwright/test";

export class productDetails{

    private readonly page:Page;
    private readonly image:Locator;
    private readonly productName:Locator;
    private readonly Category:Locator;
    private readonly Price:Locator;
    private readonly Quantity:Locator;
   private readonly AddToCart:Locator;
    private readonly Availability:Locator;
    private readonly Condition:Locator;
    private readonly Brand:Locator;

constructor(page:Page){
        this.page=page;
        this.image=page.locator('//img[@src="/get_product_picture/1"]');
        this.productName=page.getByText("Blue Top");
        this.Category=page.getByText("Category: Women > Tops");
        this.Price=page.getByText("Rs. 500");
        this.Availability=page.getByText("Availability:");
        this.Condition=page.getByText("Condition:");
        this.Brand=page.getByText("Brand:");
        this.Quantity=page.locator("#quantity").nth(1);
        this.AddToCart=page.locator('//a[@data-product-id="1"]').first();
}

    async verifyProductDetailsVisible(){
        await expect(this.image).toBeVisible();
        await expect(this.Availability).toBeVisible();
        await expect(this.productName).toBeVisible();
        await expect(this.Brand).toBeVisible();
        await expect(this.Category).toBeVisible();
        await expect(this.Quantity).toBeVisible();
        await expect(this.Price).toBeVisible();
        await expect(this.Condition).toBeVisible();

    }

    async addToCart(){
        await this.AddToCart.click();
    }

}