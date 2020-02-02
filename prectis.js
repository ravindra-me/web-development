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
// filter method
const filterArray = array.filter((num) =>{
    return num >5;
} );
console.log('filter' , filterArray);

//reduce
const reduceArray = array.reduce((accumulator , num)=>{
    return accumulator+num;
})
console.log(reduceArray);
