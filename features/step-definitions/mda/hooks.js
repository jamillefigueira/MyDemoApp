import { Before, After } from "@wdio/cucumber-framework";

Before(async () => {
    await driver.activateApp("com.saucelabs.mydemoapp.android");
});

After(async () => {
    await driver.terminateApp("com.saucelabs.mydemoapp.android");
});