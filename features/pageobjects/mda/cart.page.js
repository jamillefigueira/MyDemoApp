
import { BasePage } from "./base.page.js";

class CartPage extends BasePage {

    get obter_nome_produto() {
        return driver.$(
            'id=com.saucelabs.mydemoapp.android:id/titleTV'
        );
    }

    get obter_quantidade_produto() {
        return driver.$(
            'id=com.saucelabs.mydemoapp.android:id/noTV'
        );
    }

    get obter_preco_produto() {
        return driver.$(
            'id=com.saucelabs.mydemoapp.android:id/priceTV'
        );
    }
}

export const cartPage = new CartPage();