//Reusable Block of Code...


// function logAndReturn<T>(value: T) : T{
//     return value;
// }

// console.log(logAndReturn("Joy"));
// console.log(logAndReturn(23));
// console.log(logAndReturn(true));


function myDisplayer<T, U> (value1:T, value2:U) {
    return [value1, value2];
}
console.log(myDisplayer(10, 10));
