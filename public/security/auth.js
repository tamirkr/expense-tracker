/**
 * Created by Tamir on 07/04/2016.
 */
app.factory("auth",function ($firebaseAuth,rootRef) {
    return $firebaseAuth(rootRef);
})