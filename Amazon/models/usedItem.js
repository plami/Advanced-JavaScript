var models = models || {};

(function(scope){
    function usedItem(title,description,price,condition){
        scope._Item.apply(this,arguments);
        this.condition = condition;
    }
    usedItem.extend(scope._Item);

    scope.getUsedItem = function(title,description,price,condition){
        return new usedItem(title,description,price,condition);
    };

}(models));
