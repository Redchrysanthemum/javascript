/* const me = "hi";
const days = [1,2,false,true,null,undefined,"text",me];

console.log(days[3]);

days.push("one")
console.log(days) */

/* const player = {
    name: "jihyeon",
    age: 94,
};
console.log(player);

player.name = "jeong";
console.log(player);
player.power = "max";
console.log(player); */

/* function plus(a,b){
    console.log( a + b );
}
plus(5,10);
plus(456,879); */

/* const calculator = {
    add: function(a,b){
        console.log(a+b);
    },
    sub: function(a,b){
        console.log(a-b);
    },
    divis: function(a,b){
        console.log(a/b);
    },
    multip: function(a,b){
        console.log(a*b);
    },
    power: function(a,b){
        console.log(a**b);
    }

}
calculator.add(2,2);
calculator.sub(9,2);
calculator.divis(11,2);
calculator.multip(5,2);
calculator.power(5,3);
 */

const calculator={
    all: function(a,b){
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a ** b);
    },
    };
    calculator.all(10, 5);