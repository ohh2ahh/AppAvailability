window.appavailability = function(str, callback) {
	cordova.exec(
		function(){callback(true);},
		function(err){callback(false);},
		"AppAvailability",
		"appavailability",
		[str]
	);
};
