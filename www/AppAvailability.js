var exec = require('cordova/exec');
function AppAvailability() {}
AppAvailability.prototype.check = function(str, callback) {
    exec(
        function(result) {
            callback(result);
        },
        function(error) {
            callback(error);
        },
        "AppAvailability",
        "checkAvailability",
        [str]
    );
}

module.exports = new AppAvailability();