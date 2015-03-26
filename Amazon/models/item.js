var models = models || {};

(function(scope){
    function Item(title,description,price){
        this.title = title;
        this.description = description;
        this.price = price;
        this._customerReviews = [];
    }

    Item.prototype.addCustomerReview = function addCustomerReview(customerReview){
        this._customerReviews.push(customerReview);
    };

    Item.prototype.getCustomerReviews = function(){
        return this._customerReviews;
    };

    //exposing Item
    scope._Item = Item;

    scope.getItem = function(title,description,price){
        return new Item(title,description,price);
    };

}(models));