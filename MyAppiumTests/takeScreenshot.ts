import {remote, RemoteOptions} from 'webdriverio';

const accessibilityId = 'ToggleThemeButton';

// const androidBuildPath =
//   '/Users/choiso/Documents/HeadlessAndroidAppium/android/app/build/outputs/apk/release/app-release.apk';

const capabilitiesAndroid = {
  // 'appium:automationName': 'UiAutomator2', // drivers
  'appium:platformName': 'android',
  'appium:platformVersion': '13', //! Should match with Emulator's android platform version
  'appium:deviceName': 'Pixel_7_Pro_API_33', //! Should match with Emulator's android device name
  'appium:appPackage': 'com.headlessandroidappium', //! Should match with the application's id
  'appium:appActivity': '.MainActivity',
  'appium:autoGrantPermissions': true, // optional
};

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function takeScreenshot() {
  console.log('>>> BEGIN');

  const wdOpts = {
    // host: process.env.APPIUM_HOST || 'localhost',
    // port: parseInt(process.env.APPIUM_PORT!, 10) || 4723,
    // logLevel: 'info',

    path: '/wd/hub',
    hostname: 'localhost', // default localhost
    port: 4723, // default 4723
    capabilities: capabilitiesAndroid,
  };
  const driver: WebdriverIO.Browser = await remote(wdOpts as RemoteOptions);

  try {
    await delay(1000);
    await driver.saveScreenshot('./screenshot-before-click.png');

    // Click the button
    const target = await driver.$(`~${accessibilityId}`);
    target.click();

    await delay(500);
    await driver.saveScreenshot('./screenshot-after-click.png');

    //
  } catch (error) {
    console.error('>>> 🚨Error:', error);
  } finally {
    // Close the app
    console.log('>>> ENDED');
  }
}

takeScreenshot().catch(console.error);
