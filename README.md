# PhoneGap AppAvailability for iOS and Android

by [ohh2ahh](http://ohh2ahh.com)

1. [Description](https://github.com/ohh2ahh/AppAvailability#1-description)
2. [JavaScript](https://github.com/ohh2ahh/AppAvailability#2-javascript)
	2. [iOS](https://github.com/ohh2ahh/AppAvailability#ios)
	2. [Android](https://github.com/ohh2ahh/AppAvailability#android)
3. [PhoneGap Build](https://github.com/ohh2ahh/AppAvailability#3-phonegap-build)
4. [Some package names / URI schemes](https://github.com/ohh2ahh/AppAvailability#4-some-package-names--uri-schemes)
5. [Licence](https://github.com/ohh2ahh/AppAvailability#1-licence)

## 1. Description

This plugin allows you to check if an app is installed.
It requires a package name (e.g com.facebook.katana) on Android or an URI scheme (e.g. fb://) on iOS.

* iOS and Android
* Works with PhoneGap Build ([more information](https://build.phonegap.com/plugins/17))
* Compatible with [Plugman](https://github.com/apache/cordova-plugman) and ready for PhoneGap 3.0

## 2. JavaScript

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

## 3. PhoneGap Build

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

3\. Use the plugin as described above.


## 4. Some package names / URI schemes

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
