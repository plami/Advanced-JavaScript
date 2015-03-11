Array.prototype.flatten = function (){
    var array = this;
    var newArray = [];
    recursive(array);

    function recursive (arr){
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] instanceof Array) {
                recursive(arr[i]);
            } else {
                newArray.push(arr[i]);
            };
        }
    }
    return newArray;
}

console.log("First sample code");
var array = [1, 2, 3, 4];
console.log(array.flatten());
console.log();

console.log("Second sample code");
var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array); // Not changed
console.log();