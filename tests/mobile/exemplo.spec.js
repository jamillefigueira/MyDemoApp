// This sample code supports WebdriverIO client >=9.7.0
// (npm i --save webdriverio)
// Then paste this into a .js or .ts file and run with Node
// (modern Node can run TypeScript files directly if types are strippable):
// node <file>.js
// or: node <file>.ts

import { remote } from "webdriverio";
import { expect } from "expect-webdriverio";

async function main() {
  const caps = {
    platformName: "Android",
    "appium:platformVersion": "16.0",
    "appium:deviceName": "emulator-5554",
    "appium:deviceOrientation": "portrait", 
    "appium:appPackage": "com.saucelabs.mydemoapp.android",
    "appium:appActivity":
      "com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
    "appium:automationName": "UiAutomator2",
    browserName: "",
    "appium:ensureWebviewsHavePages": true,
    "appium:nativeWebScreenshot": true,
    "appium:newCommandTimeout": 3600,
    "appium:connectHardwareKeyboard": true,
    "wdio:enforceWebDriverClassic": true,
    unhandledPromptBehavior: "ignore",
  };

    const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: caps,
  });

 

  const produto = await driver.$(
    '-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(0)',
  );

  await produto.click();

  const nomeDoProduto = await driver.$(
    '-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productTV").instance(0)',
  );

  await expect(await nomeDoProduto.getText()).toEqual("Sauce Labs Backpack");

  const precoDoProduto = await driver.$(
    '-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/priceTV").instance(0)',
  );

   await expect(await precoDoProduto.getText()).toEqual("$ 29.99");
  

  await driver.deleteSession();
}

main().catch(console.log);
