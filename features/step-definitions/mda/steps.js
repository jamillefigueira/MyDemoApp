import { Given, When, Then, Before, After } from "@wdio/cucumber-framework";

Before(async () => {
    await driver.activateApp("com.saucelabs.mydemoapp.android");
});

After(async () => {
    await driver.terminateApp("com.saucelabs.mydemoapp.android");
});

Given ("que abro o MyDemoApp", async () => {
  const produto = await driver.$(
    '-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(0)',
  );
await expect(produto).toBeDisplayed();
});

When("seleciono o produto na {string}", async (posicao) => {
    const produtos = await driver.$$(
        '-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV")'
    );

    console.log("========== DIAGNÓSTICO ==========");
    console.log("Quantidade de productIV encontrados:", produtos.length);

    for (let i = 0; i < produtos.length; i++) {
        console.log(`productIV[${i}] encontrado`);
    }

    console.log("=================================");

    const produto = produtos[Number(posicao)];

    await produto.click();
});

Then("exibe a pagina com o {string}", async (nome_produto) => {
    const nomeDoProduto = await driver.$(
        '-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productTV").instance(0)',
    );

    await expect(
        await nomeDoProduto.getText()
    ).toEqual(nome_produto);
});

Then("exibe o {string}", async (preco_produto) => {
    await driver
        .action("pointer")
        .move({ duration: 0, x: 601, y: 1948 })
        .down({ button: 0 })
        .move({ duration: 1000, x: 623, y: 847 })
        .up({ button: 0 })
        .perform();

    const precoDoProduto = await driver.$(
        "id:com.saucelabs.mydemoapp.android:id/priceTV",
    );

    await expect(
        await precoDoProduto.getText()
    ).toEqual(preco_produto);
});