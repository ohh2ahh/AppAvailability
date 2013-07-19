window.schemecheck = function(str, callback) {
	cordova.exec(
		callback,			// success
		callback,			// error
		"SchemeCheck",		// service
		"schemecheck",		// action
		[str]				// argument
	);
};
