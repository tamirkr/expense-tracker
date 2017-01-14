/**
 * Created by Tamir on 08/04/2016.
 */
app.component("categoryList",{
    templateUrl:"/categories/categoriesList.html",
    bindings:{
      categories:'='  
    },
    controller:function () {
        this.createNewCategory = function () {
            this.categories.$add({name:this.newCategoryName});
            this.newCategoryName = "";
        }
    }
})