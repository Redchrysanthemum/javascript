/* const age = parseInt(prompt("How old are you?"));


console.log(age); */
/* console.log(age , parseInt(age)); */


const age = parseInt(prompt("How old are you?"));
// age 라는 아이가 prompt 로 화면에 질문을하고 질문에 대한 답을 parseInt라는 아이가 숫자로 변환 해준다. 기본적으로 prompt 라는 아이는 string 이며 이 string이 숫자로 변환이 가능하면 parseInt는 변환시키고 아니라면 NaN(not a number)라고 한다

if(isNaN(age)){  // if(만약) age가 isNaN(숫자가아닐)때
    console.log("Please write a number"); // true면 해당 콘솔을
} else { // true 가 아니고 fales(숫자)면
    console.log("Thank you") // 해당 콘솔을 보여준다
}


