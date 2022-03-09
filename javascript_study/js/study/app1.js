/*  const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sund"; */ 

const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"];

/* const nonsense = [1, 2, "hello" , false , null , true , undefined , "jihyeon"] */

// Get Item from Array
console.log(daysOfWeek/* [4] */);

/* 
    array 의 규칙
    1. 시작과 끝에 대괄호 []를 사용해야함.
    2. array안 각각 항목은 쉼표로 분리 돼야함.
*/
/* console.log(daysOfWeek); */

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek[6]);

const list = ["Apple","Banana","Charry","Grape","Strawberry"]
console.log(list[6]);
list.push("PineApple","Mellon")
console.log(list[6]);