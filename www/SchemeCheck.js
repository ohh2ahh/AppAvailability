window.schemecheck = function(str, callback) {
	cordova.exec(
		callback,
		callback,
		"SchemeCheck",
		"schemecheck",
		[str]
	);
};
