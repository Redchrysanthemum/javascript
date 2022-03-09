const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0){ 
    console.log("Please write a number"); 
} else if (age < 18) {
    console.log("you are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("you can drink");
} else if(age > 50 && age <=80){
    console.log("you should exercise");
} /* else if(age !== 100) {
    console.log("wow you are wise"); */
  else if(age === 100) {
    console.log("wow you are wise"); 
    
}else if(age > 80){
    console.log("you can do whatever you want.");
}

/*
true || true === true
false || true === true
true || false === true
false || false === flse

true && true === true
false && true === false
true && false === false
false && false === false 
*/

/* 
== 연산자는 binaryCode로 구분해서 false(deafult:0) == 0 true(same)
=== 연산자는 유형도 포함해 비교해서 false(boolean) === 0(number) false(difference) 
*/
