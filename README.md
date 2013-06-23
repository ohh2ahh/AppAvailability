CheckURLScheme
==============

This plugin for PhoneGap lets you easily check if an URL scheme is on iOS available.

by [ohh2ahh](http://ohh2ahh.com)

Example
-------

	window.checkurlscheme("onepassword://", function(availability) {
		// availability is either true or false
		if(availability) { console.log("This URL Scheme is available"); }
		else { console.log("This URL Scheme is not available"); }
	});

Tested with Cordova 2.8.1, Xcode 4.6.3 and iOS 6.1.3

License
-------
[MIT License](http://www.opensource.org/licenses/mit-license.html)
