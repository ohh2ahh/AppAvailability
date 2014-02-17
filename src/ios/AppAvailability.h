#import <Cordova/CDV.h>

@interface AppAvailability : CDVPlugin

- (void)checkAvailability:(CDVInvokedUrlCommand*)command;

@end