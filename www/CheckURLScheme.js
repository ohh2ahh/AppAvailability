window.checkurlscheme = function(str, callback) {
	cordova.exec(
		callback,                           // successFunction
		function(err) { callback(false); }, // failFunction
		"CheckURLScheme",                   // service
		"checkurlscheme",                   // action
		[str]                               // [<args>]
	);
};
