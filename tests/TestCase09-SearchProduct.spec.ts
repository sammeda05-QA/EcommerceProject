import {test,expect} from "../fixtures/ProjectFixtures";

import   TestProducts  from "../test-data/TestProducts.json";

test("Search Product",async({page,HomePage,ProductsPage})=>{

    await HomePage.ProjectHomePage();
    await HomePage.ProductsPage();

    await HomePage.ProductsPage();

    //Verify user is navigated to ALL PRODUCTS page successfully
    await expect(page).toHaveURL("https://automationexercise.com/products");
    
    await ProductsPage.Searchproduct(TestProducts.product2.productName);

    //Verify 'SEARCHED PRODUCTS' is visible
    const SearchedProduct = page.getByText("Searched Products");

    await expect(SearchedProduct).toBeVisible();

    //Verify all the products related to search are visible
    //Locate all the products

    const products = page.locator(".features_items .product-image-wrapper");

    //count of products
    const CountOfProducts =await products.count();
    console.log(CountOfProducts);

    // Verify at least one product is displayed
     expect(CountOfProducts).toBeGreaterThan(0);

    // Verify every product is visible

    for(let i=0;i<CountOfProducts;i++){
        await expect(products.nth(i)).toBeVisible();
    }
    const productNames = await page.locator(
    '.features_items .productinfo p'
).allInnerTexts();

console.log('All Product Names:', productNames);

})

