/**
 * Removes the trailing and leading whitespace on an URL scheme and verifies its
 * not empty.
 * 
 * @param {String} urlScheme the URL scheme to check.
 * @param {Function} errorCallback to call when the urlScheme is empty.
 * 
 * @returns {String} urlScheme stripped by leading and trailing whitespace or 
 * undefined when it was empty.
 */
function checkUrlScheme(urlScheme, errorCallback) {
    var trimmedUrlScheme = (urlScheme||"").trim();
    if (!trimmedUrlScheme) {
        errorCallback("empty urlScheme(\"" + urlScheme + "\") used.");
        return
    }
    return trimmedUrlScheme;
}

var appAvailability = {

    check: function(urlScheme, successCallback, errorCallback) {
        urlScheme = checkUrlScheme(urlScheme, errorCallback);
        // Only call the native plugin if we have valid urlScheme
        urlScheme && cordova.exec(
            successCallback,
            errorCallback,
            "AppAvailability",
            "checkAvailability",
            [urlScheme]
        );
    },
    
    checkBool: function(urlScheme, callback) {
        urlScheme = checkUrlScheme(urlScheme, function() { callback(false); });
        // Only call the native plugin if we have valid urlScheme
        urlScheme && cordova.exec(
            function(success) { callback(success); },
            function(error) { callback(error); },
            "AppAvailability",
            "checkAvailability",
            [urlScheme]
        );
    }
    
};

module.exports = appAvailability;
