/* function = 어떠한 코드를 캡슐화해서, 실행을 여러번 할 수 있게 해줌 */
/* argument = function을 실행하는 동안 어떠한 정보를 function에게 보낼 수 있는 방법 */

/* function sayHello(nameOfPerson, age){
    console.log("hello my name is " +nameOfPerson + " and I am " + age);
}


sayHello("jihyeon", 29);
sayHello("dal", 23);
sayHello("hanna", 25); */

/* function plus(a, b){
     console.log(a+b);
     
}

function divide(a,b){
    console.log(a/b);
}
plus(8, 60);
divide(98,20) */

const player = {
    name: "jihyeon",
    sayHello: function(otherPersonName){
        console.log("Hello " + otherPersonName + " nice to meet you!");
    }
};


player.sayHello("lynn");
player.sayHello("nico");