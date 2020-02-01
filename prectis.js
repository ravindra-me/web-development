const array = [1,2,3];
const double = [];
const newarray = array.forEach((num) => {
    double.push(num*2);
});
console.log('forEach' , double);

// map function//
const mapArray = array.map((num) => {
    return num*2;
});
console.log('map', mapArray);
