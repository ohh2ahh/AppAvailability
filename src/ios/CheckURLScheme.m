#import "CheckURLScheme.h"
#import <Cordova/CDV.h>

@implementation CheckURLScheme

- (void)checkurlscheme:(CDVInvokedUrlCommand*)command
{
	CDVPluginResult* pluginResult = nil;
	NSString* urlscheme = [command.arguments objectAtIndex:0];
	
	if ([[UIApplication sharedApplication] canOpenURL:[NSURL URLWithString:urlscheme]]) {
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:(true)];
	}
	else {
		pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
	}
	
	[self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
