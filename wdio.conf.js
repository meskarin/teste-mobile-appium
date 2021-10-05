const {join} = require('path')

exports.config = {
    hostname:'localhost',
    port: 4723,
    path: '/wd/hub',
    specs:[
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities:[{
            "platformName": "Android",
            "platformVersion": "10.0",
            "deviceName": "AppiumT",
            "automationName": "UiAutomator2",
            "app": join(process.cwd(), './app/android/wcandroid-7.3-rc-1.apk'),
            "appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"
    }]
}