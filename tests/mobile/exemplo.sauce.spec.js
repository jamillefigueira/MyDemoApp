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
    'appium:app': 'storage:filename=mda-2.2.0-25.apk', // The filename of the mobile app
    "appium:platformVersion": "16.0",
    "appium:deviceName": 'Google Pixel 6 Emulator',
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
    user: process.env.SAUCE_USER,
    key: process.env.SAUCE_KEY,
    protocol: "https",
    hostname: "ondemand.eu-central-1.saucelabs.com",
    port: 443,
    baseUrl: "wd/hub",
    capabilities: caps,
  });
  
  const primeiroProduto = await driver.$(
    '-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(0)',
  );

  await primeiroProduto.click();

  const nomeDoProduto = await driver.$(
    '-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productTV").instance(0)',
  );

  const precoDoProduto = await driver.$(
    '-android uiautomator:new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/priceTV").instance(0)',
  );

  const nome = await nomeDoProduto.getText();
  expect(nome).toEqual("Sauce Labs Backpack");

  const preco = await precoDoProduto.getText();
  expect(preco).toEqual("$ 29.99");

  await driver.deleteSession();
}

main().catch(console.log);
