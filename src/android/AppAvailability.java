package com.ohh2ahh.appavailability;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.content.pm.PackageManager;
import android.content.pm.PackageInfo;

public class AppAvailability extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if(action.equals("checkAvailability")) {
            String uri = args.getString(0);
            this.checkAvailability(uri, callbackContext);
            return true;
        }
        return false;
    }
    
    // Thanks to http://floresosvaldo.com/android-cordova-plugin-checking-if-an-app-exists
    public PackageInfo getAppPackageInfo(String uri) {
        Context ctx = this.cordova.getActivity().getApplicationContext();
        final PackageManager pm = ctx.getPackageManager();

        try {
            return pm.getPackageInfo(uri, PackageManager.GET_ACTIVITIES);
        }
        catch(PackageManager.NameNotFoundException e) {
            return null;
        }
    }
    
    private void checkAvailability(String uri, CallbackContext callbackContext) {

        PackageInfo info = getAppPackageInfo(uri);

        if(info != null) {
            try {
                callbackContext.success(this.convertPackageInfoToJson(info));
            } 
            catch(JSONException e) {
                callbackContext.error("");    
            }
        }
        else {
            callbackContext.error("");
        }
    }

    private JSONObject convertPackageInfoToJson(PackageInfo info) throws JSONException {
        JSONObject json = new JSONObject();
        json.put("version", info.versionName);
        json.put("appId", info.packageName);

        return json;
    }
}
