/**
 * Created by Tamir on 07/04/2016.
 */
"use strict";

app.component("nav",{
    templateUrl:"/nav/nav.html",
    controller:function ($firebaseObject,fbRef) {
        this.loaded  = false;

        this.userPreferences = $firebaseObject(fbRef.getPreferencesRef());
        this.userPreferences.$loaded().then((function (data) {
            this.loaded = true;
        }).bind(this))
        


    }
})