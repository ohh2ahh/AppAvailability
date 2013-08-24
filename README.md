# PhoneGap AppAvailability for iOS and Android

by [ohh2ahh](http://ohh2ahh.com)

1. [Description](https://github.com/ohh2ahh/AppAvailability#1-description)
2. [Installation](https://github.com/ohh2ahh/AppAvailability#2-installation)
	2. [Automatically (CLI / Plugman)](https://github.com/ohh2ahh/AppAvailability#automatically-cli--plugman)
	2. [Manually](https://github.com/ohh2ahh/AppAvailability#manually)
	2. [PhoneGap Build](https://github.com/ohh2ahh/AppAvailability#phonegap-build)
3. [Usage](https://github.com/ohh2ahh/AppAvailability#3-usage)
	3. [iOS](https://github.com/ohh2ahh/AppAvailability#ios)
	3. [Android](https://github.com/ohh2ahh/AppAvailability#android)
4. [Some package names / URI schemes](https://github.com/ohh2ahh/AppAvailability#4-some-package-names--uri-schemes)
5. [License](https://github.com/ohh2ahh/AppAvailability#5-license)

## 1. Description

This plugin allows you to check if an app is installed.
It requires a package name (e.g com.facebook.katana) on Android or an URI scheme (e.g. fb://) on iOS.

* iOS and Android
* Compatible with [Cordova Plugman](https://github.com/apache/cordova-plugman) and ready for PhoneGap 3.0
* Works with PhoneGap Build ([more information](https://build.phonegap.com/plugins/17))

## 2. Installation

### Automatically (CLI / Plugman)
AppAvailability is compatible with [Cordova Plugman](https://github.com/apache/cordova-plugman) and ready for the [PhoneGap 3.0 CLI](http://docs.phonegap.com/en/3.0.0/guide_cli_index.md.html#The%20Command-line%20Interface_add_features), here's how it works with the CLI:

```
$ phonegap local plugin add https://github.com/ohh2ahh/AppAvailability.git
```

### Manually

1\. Add the following xml to your `config.xml` in the root directory of your `www` folder:
```xml
<!-- for iOS -->
<feature name="AppAvailability">
	<param name="ios-package" value="AppAvailability" />
</feature>
```
```xml
<!-- for Android -->
<feature name="AppAvailability">
	<param name="android-package" value="com.ohh2ahh.appavailability.AppAvailability" />
</feature>
```

2\. Grab a copy of AppAvailability.js, add it to your project and reference it in `index.html`:
```html
<!-- for iOS -->
<script type="text/javascript" src="js/appavailability.js"></script>
```

3\. Download the source files for iOS and/or Android and copy them to your project.

iOS: Copy `AppAvailability.h` and `AppAvailability.h` to `platforms/ios/<ProjectName>/Plugins`


Android: Copy `AppAvailability.java` to `platforms/android/src/com/ohh2ahh/appavailability` (create the folders if they don't already exist)

### PhoneGap Build

AppAvailability works with PhoneGap build too. You can implement the plugin with these simple steps.

1\. Add the following xml to your `config.xml` to always use the latest version of this plugin:
```xml
<gap:plugin name="com.ohh2ahh.plugins.appavailability" />
```
or to use this exact version:
```xml
<gap:plugin name="com.ohh2ahh.plugins.appavailability" version="0.1.0" />
```

2\. Reference the JavaScript code in your `index.html`:
```html
<!-- below <script src="phonegap.js"></script> -->
<script src="js/plugins/AppAvailability.js"></script>
```


## 3. Usage

### iOS

```javascript
window.appavailability('fb://', function(availability) {
	// availability is either true or false
	if(availability) { console.log('Facebook is available'); }
});
```

### Android

```javascript
window.appavailability('com.facebook.katana', function(availability) {
	// availability is either true or false
	if(availability) { console.log('Facebook is available'); }
});
```

## 4. Some package names / URI schemes

[How do I get the package name / URI scheme?](https://github.com/ohh2ahh/AppAvailability/issues/2#issuecomment-22203591)

Facebook:
* Android: `com.facebook.katana`
* iOS: `fb://` (and [many more](http://wiki.akosma.com/IPhone_URL_Schemes#Facebook) as `fb://profile`)

Twitter:
* Android: `com.twitter.android`
* iOS: `twitter://` ([more schemes](http://wiki.akosma.com/IPhone_URL_Schemes#Twitter))

WhatsApp:
* Android: `com.whatsapp`
* iOS: `whatsapp://` (only since v. 2.10.1, [more information](http://www.whatsapp.com/faq/en/iphone/23559013))

## 5. License

[The MIT License (MIT)](http://www.opensource.org/licenses/mit-license.html)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
