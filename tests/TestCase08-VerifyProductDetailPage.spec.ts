import {test,expect} from "../fixtures/ProjectFixtures";

test("Verify All Products and product detail page",async({page,HomePage,ProductsPage,ProductDetails})=>{
//Homepage - Click on Products
    await HomePage.ProjectHomePage();
    await HomePage.ProductsPage();

// Verify user is navigated to ALL PRODUCTS page successfully

    await expect(page).toHaveURL("https://automationexercise.com/products");

// Click on 'View Product' of first product
    await ProductsPage.ViewProduct();
    await expect(page).toHaveURL("https://automationexercise.com/product_details/1");

//Verify that detail detail is visible: product name, category, price, availability, condition, brand

    await ProductDetails.verifyProductDetailsVisible();




})