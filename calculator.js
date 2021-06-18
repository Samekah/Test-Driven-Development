// create the function to test
function multiplyBy3(num){
    return num *3;
}

// make the test visible to the test js. in this case we can uses destructuring
// as the key and the value share the same name- module.exports = {multiplyBy3}
module.exports = {
    multiplyBy3: multiplyBy3
}
