import { Given, When, Then, Before, After } from "@wdio/cucumber-framework";
import { productsPage } from "../../pageobjects/mda/products.page";
import { productDetails } from "../../pageobjects/mda/product_details.js";
import { cartPage } from "../../pageobjects/mda/cart.page.js";

Before(async () => {
    await driver.activateApp("com.saucelabs.mydemoapp.android");
});

After(async () => {
    await driver.terminateApp("com.saucelabs.mydemoapp.android");
});

Given ("que abro o MyDemoApp", async () => {

    const produto = productsPage.get_img_produto(0);
 
await expect(produto).toBeDisplayed();
});

When("seleciono o produto na {string}", async (posicao) => {
   await productsPage.get_img_produto(Number(posicao)).click();

});

Then("exibe a pagina com o {string}", async (nome_produto) => {
   const nomeDoProduto = productDetails.obter_titulo_produto;

    await expect(nomeDoProduto).toHaveText(nome_produto);
});

Then("exibe o {string}", async (preco_produto) => {

   await productDetails.arrastaParaCima();
   const precoDoProduto = productDetails.obter_preco_produto;


    await expect(precoDoProduto).toHaveText(preco_produto);
});

When("adiciono o produto ao carrinho", async () => {
    await productDetails.botao_adicionar_carrinho.click();
});

When("abro o carrinho de compras", async () => {
    await productDetails.icone_carrinho.click();
});

Then("valido o nome do produto no carrinho {string}", async (nome_produto) => {
    await expect(cartPage.obter_nome_produto)
        .toHaveText(nome_produto);
});

Then("valido a quantidade do produto no carrinho {string}", async (quantidade) => {
    await expect(cartPage.obter_quantidade_produto)
        .toHaveText(quantidade);
});

Then("valido o preço do produto no carrinho {string}", async (preco_produto) => {
    await expect(cartPage.obter_preco_produto)
        .toHaveText(preco_produto);
});


