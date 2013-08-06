# PhoneGap AppAvailability for iOS and Android

by [ohh2ahh](http://ohh2ahh.com)

3. [Some Apps](##some-apps)

## 1. Description

This plugin allows you to check if an app is installed.
It requires a Package Name (e.g com.facebook.katana) on Android or an URI Scheme (e.g. fb://) on iOS.

It's compatible with iOS / Android and ready for PhoneGap 3.0!

## 2. JavaScript

### 2.1. iOS

	window.appavailability('fb://', function(availability) {
		// availability is either true or false
		if(availability) { console.log('Facebook is available'); }
	});

### 2.2. Android

	window.appavailability('com.facebook.katana', function(availability) {
		// availability is either true or false
		if(availability) { console.log('Facebook is available'); }
	});

## 3. Some Apps<a id="some-apps"></a>

Facebook:
* Android: `com.facebook.katana`
* iOS: `fb://` (and [many more](http://wiki.akosma.com/IPhone_URL_Schemes#Facebook) as `fb://profile`)

Twitter:
* Android: `com.twitter.android`
* iOS: `twitter://` ([more schemes](http://wiki.akosma.com/IPhone_URL_Schemes#Twitter))

WhatsApp:
* Android: `com.whatsapp`
* iOS: `whatsapp://` (only since v. 2.10.1, [more information](http://www.whatsapp.com/faq/en/iphone/23559013))

## License

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
