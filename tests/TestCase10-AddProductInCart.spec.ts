import {test,expect} from "../fixtures/ProjectFixtures";

test("Add Products in Cart",async({page,HomePage,ProductsPage,ProductDetails,CartPage})=>{

    await HomePage.ProjectHomePage();
    await HomePage.ProductsPage();

    await ProductsPage.SelectProduct(0);
    await ProductsPage.addProduct(1);
    await ProductsPage.ContinueShopping();

    await ProductsPage.SelectProduct(1);
    await ProductsPage.addProduct(2);
    await ProductsPage.viewCart();
    
//Verify both products are added to Cart

    await expect(page).toHaveURL("https://automationexercise.com/view_cart");

//Verify both products are added to Cart

    await CartPage.CountOfProduct(2);

//Verify their prices, quantity and total price

await expect(CartPage.verifyRow(1,"Women > Tops","Rs. 500","1","Rs. 500"));
await expect (CartPage.verifyRow(2,"Men > Tshirts","Rs. 400","1","Rs. 400"));
 


})