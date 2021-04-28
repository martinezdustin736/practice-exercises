// "use strict";
// function remove9s (arr, val) {
//     arr.filter(function (item) {
//         return item !== val
//     })
// }
//     remove9s(9)
// console.log(remove9s([7, 8, 9, 10]));
// console.log(remove9s([1, 2, 3]));
// console.log(remove9s([9, 9, 9]));



// arry = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//
// function calculateAverage(array){
//     var total = 0;
//     var count = 0;
//
//     array.forEach(function(item, index){
//         total += item;
//         count++;
//     });
//
//     return total / count;
// }
//
// console.log(calculateAverage(arry));







// *////////ARRAYS/////////////////

// Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for.
// If the item does not exist in the provided array, return an empty array.

// var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
//
// function allIndexesOf (arr, val){
//     var bucket=[];
//     for (var i = 0; i < arr.length; i++){
//         if(val === arr[i]){
//             bucket.push([i])
//         }
//     } return bucket;
// }
//
// console.log(allIndexesOf(fruits, "apple"));
// console.log(allIndexesOf(fruits, "guava"));
// console.log(allIndexesOf(fruits, "pineapple"));
////


// Define a function named removeAll(array, value) that takes in two arguments.
//     The first argument should be an array and the second argument should be a value you wish to remove

// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// function removeAll (arr, val){
//     var bucket = [];
//     for(var i = 0; i < arr.length; i++){
//         if(val !== arr[i]){
//             bucket.push(arr[i]);
//         }
//     } return bucket
// }
//
// console.log(removeAll(bugs, "ant"));
// console.log(removeAll(bugs, "mosquito"));
// console.log(removeAll(bugs, "roach"));


// function randomIntBetween(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// console.log(randomIntBetween(0, 10));


function rollDie(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(rollDie(1, 6));

///////////////////come back to this/////////////////////////////
// var bucket =[];
// function listOfRolls (num){
//     return num * rollDie()
//
// }

///array manipulation, creation, and iteration////////
// var num = [10, 1, 22, 33, 4, 55, 6, 7, 8,];
//
// function first(){
//     return num[0];
// }
// console.log(first())
//
// function secondToLast (){
//     return num[7];
// }
//
// console.log(secondToLast())
//
// function rest (){
//     return num.slice(1);
// }
//
// console.log(rest())

var names = ["Dustin", "Rachel", "Zachary", "Archer", ];


function reverseArray (){
    var newarray = names.slice().reverse();
    return console.log(newarray);
}

reverseArray();
// var length = 0;
// var longest;
//
// function getLongestString(){
//     for (var i = 0; i < names.length; i++){
//
//     if (names[i].length > length){
//         length = names[i].length
//         longest = names [i]
//     }
// }
// console.log(longest)
// }
//
// getLongestString()
//
// for (var i = 0; i < names.length; i++){
//     var length = 0;
//     var longest;
//     if (names[i].length > length){
//         var length = names[i].length
//         longest = names [i]
//     }
// }
// console.log(longest)

// var length = 0;
// var longest;
//
//
//
// for (var i =0; i < names.length; i++){
//     if (names[i].length > length){
//         var length = names[i].length;
//         longest = names[i];
//     }
// }
// console.log(longest)




////////arrays and objects//////////
// var numbersOnly= ["fred", true, 5, 3];
// var numbers= [];
//
// function filterNumbers(){
//     for (var i = 0; i < numbersOnly.length; i++){
//         if (typeof numbersOnly[i] === "number"){
//             numbers.push(numbersOnly[i])
//         }
//     }return numbers.sort();
// }
//
// console.log(filterNumbers());


var dogs =
[
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10,
    },

    {
        name: "pyro",
        breed: "French Bulldog",
        age: 1
    }
]

// function getOlder(){
//   dogs.forEach(function (dogAge){
//       dogAge.age = dogAge.age + 1;
//       console.log(dogAge);
//   })
// }
// getOlder();

// getOlder()
//
// dogs.forEach(function (dogAge) {
//     dogAge.age = dogAge.age + 1
//     console.log(dogAge);
// });

var cars =
    [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
        {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false
        },
        {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: true
        }
    ]


// function washCars(){
//     cars.forEach(function (car) {
//     if (car.isDirty === true){
//         car.isDirty = car.isDirty === false
//     }
// })
// }
//
// console.log(cars);
// washCars()

var users =
    [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
        {
            isAdmin: true,
            email: 'user2@email.com'
        },
{
    isAdmin: false,
        email: 'user3@email.com'
}
]


// function adminList (){
//     users.forEach(function (user){
//         if(user.isAdmin === true){
//             console.log((user));
//         }
//     })
// }
// adminList()