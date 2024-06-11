# Goal of this project

> Android UI Test Automation with generating screenshots in the server.

## DONE

- [x] Use Appium and Webdriver.io to automate UI test for Android app.
- [x] UI test should generate screenshots of each step.

## TODO

- [ ] Use Headless Emulator to run in on the server.
- [ ] Create CI pipelines to perform UI test on the sercer.

# Start

## Run React Native App

```shell
node -v # 18.15.0
npm -v # 9.5.0

npm install
npm run android # Run Android App
```

## Start Appium Server

- Download Appium Server GUI from here: https://github.com/appium/appium-desktop/releases/tag/v1.22.3-4
- Should configure ANDROID_HOME and JAVA_HOME path
- Start the server

## Run Appium script

```shell
cd MyAppiumTests; npm install; cd .. # Only if you didn't install
npm run appium-test
```

---

# 📝

Maybe should use Docker for the easier pipeline tasks...
