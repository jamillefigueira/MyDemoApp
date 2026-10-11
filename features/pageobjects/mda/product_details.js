import { BasePage } from "./base.page.js";

class ProductDetails extends BasePage {
  get obter_titulo_produto() {
    return driver.$(
      '-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productTV").instance(0)',
    );
  }
  get obter_preco_produto() {
    return driver.$(
      '-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/priceTV").instance(0)',
    );
  }

  get botao_adicionar_carrinho() {
    return driver.$("id=com.saucelabs.mydemoapp.android:id/cartBt");
  }

  get icone_carrinho() {
    return driver.$("id=com.saucelabs.mydemoapp.android:id/cartIV");
  }

  get botao_adicionar_carrinho() {
    return driver.$("id=com.saucelabs.mydemoapp.android:id/cartBt");
  }
}

export const productDetails = new ProductDetails();
