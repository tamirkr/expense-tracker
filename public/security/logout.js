/**
 * Created by Tamir on 07/04/2016.
 */
"use strict";
angular.module("app").component("logout",{
    controller:function (auth,$location) {
        auth.$unauth();
        $location.path('/login');
    }
})