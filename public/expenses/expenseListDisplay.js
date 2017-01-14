
app.component("expenseListDisplay",{
    templateUrl:"/expenses/expenseListDisplay.html",
    bindings:{
        expenses:'=expenseData',
        selectExpense:'&'
    },
    controller:function () {
        this.deleteExpense = function (expense) {
            this.expenses.$remove(expense);
        }

        this.clickRow = function (expense) {
            this.selectExpense({expense:expense});
        }
    }
})