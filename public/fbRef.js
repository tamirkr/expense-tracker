/**
 * Created by Tamir on 08/04/2016.
 */
"use strict";

app.factory("fbRef",function (auth,rootRef) {
    return{
        getPreferencesRef:function () {
            return rootRef.child('preferences').child(auth.$getAuth().uid);
        },
        getCategoriesRef:function () {
            return rootRef.child('categories');
        },
        getExpensesRef:function () {
            return rootRef.child('expenses').child(auth.$getAuth().uid);
        }
    }
})