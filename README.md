CheckURLScheme
==============

This plugin for PhoneGap lets you easily check if an URL scheme is on iOS available.

by [ohh2ahh](http://ohh2ahh.com)

## JavaScript ##

	window.checkurlscheme("onepassword://", function(availability) {
		// availability is either true or false
		if(availability) { console.log("This URL Scheme is available"); }
		else { console.log("This URL Scheme is not available"); }
	});
