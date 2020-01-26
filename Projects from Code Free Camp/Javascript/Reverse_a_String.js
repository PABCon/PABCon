// this code will allow you to reverse any string you insert on the function.


function reverseString(str) {

    var str = str.split("").reverse().join("");

    return str;
}

console.log(reverseString("hello"));