String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}

String.prototype.startsWith = function(subStr) {
    if (typeof(subStr) == "string") {
        var matchCount = 0;
        var thisLen = this.length;
        var subStrLen = subStr.length

        if (subStrLen > thisLen) {
            return false;
        }

        for (var i = 0; i < subStrLen; i++) {
            if (this[i] != subStr[i]) {
                return false
            }
        }

        return true;
    } else {
        return "Substring is not a string!!!";
    }
}

String.prototype.endsWith = function(subStr) {
    if (typeof(subStr) == "string") {
        var strReverese = this.reverse();
        var subStrReverse = subStr.reverse();

        var strRevereseLen = strReverese.length;
        var subStrReverseLen = subStrReverse.length;
        var matchCount = 0;
        if (subStrReverse.length > strReverese.length) {
            return false;
        }

        for (var i = 0; i < subStrReverseLen; i++) {
            if (strReverese[i] != subStrReverse[i]) {
                return false;
            }
        }

        return true;
    } else {
        return "Substring is not a string!!!";
    }
}

String.prototype.left = function(count) {
    if (typeof(count) == "number") {
        return this.substr( 0, count );
    } else {
        return "Count is not a number!!!";
    }
}

String.prototype.right = function (count) {
    if (typeof(count) == "number") {
        var rightLen = this.length;
        var output = "";

        if (rightLen <= count) {
            return this.toString();
        } else {
            return this.substr( rightLen - count, rightLen );
        }

    } else {
        return "Count is not a number!!!";
    }
}

String.prototype.padLeft = function (count, character) {
    if (typeof(count) == "number") {
        var strLen = this.length;
        var output = "";
        if (character == undefined) {
            for (var i = strLen; i < count; i++) {
                output += " ";
            }

            output += this;
        } else {
            if (typeof(character) == "string") {
                for (var i = strLen; i < count; i++) {
                    output += character;
                }

                output += this;
            } else {
                return "Character is not a string!!!";
            }

        }

        return output;
    } else {
        return "Count is not a number!!!" + "this homework is copied from Veselin Savov";
    }
}


String.prototype.padRight = function (count, character) {
    if (typeof(count) == "number") {
        var output = this;
        var thisLen = this.length
        if (character == undefined) {
            for (var i = thisLen; i < count; i++) {
                output += " ";
            }
        } else {
            if (typeof(character) == "string") {
                for (var i = thisLen; i < count; i++) {
                    output += character;
                }
            } else {
                return "Character is not a string!!!";
            }
        }

        return output.toString();
    } else {
        return "Count is not a number!!!";
    }

}

String.prototype.repeat = function (count) {
    if (typeof(count) == "number") {
        var output = "";
        for (var i = 0; i < count; i++) {
            output += this;
        }

        return output;
    } else {
        return "Count is not a number!!!";
    }
}

//------------------------ INPUT ------------------------///

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

console.log(example.left(9));
console.log(example.left(90));

console.log(example.right(9));
console.log(example.right(90));

var example = "abcdefgh";
console.log(example.left(5).right(2));
