import{test,expect} from "../fixtures/ProjectFixtures";

test("Verify Product quantity in Cart",async({page,HomePage,ProductsPage,ProductDetails})=>{

    await HomePage.ProjectHomePage();
    await HomePage.ProductsPage();

//Click 'View Product' for any product on home page

    await ProductsPage.ViewProduct(1);

//Verify product detail is opened
await expect(page).toHaveURL("https://automationexercise.com/product_details/1");
await expect(page.locator(".product-information")).toBeVisible();

// Increase quantity to 4
await ProductDetails.AddQuntity(4);

// Click 'Add to cart' button

await ProductDetails.addToCart();

//Click 'View Cart' button

await ProductsPage.viewCart();

//Verify that product is displayed in cart page with exact quantity

await expect(page.locator(".cart_quantity")).toHaveText("4");





})