/* const age = 94;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge); */

const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    divis: function(a,b){
        return a/b;
    },
    multip: function(a,b){
        return a*b;
    },
    power: function(a,b){
        return a**b;
    }

}
const plusResult = calculator.add(2,2);
const minusResult = calculator.sub(plusResult,10);
const timesResult = calculator.multip(10,minusResult);
const divideResult = calculator.divis(timesResult,plusResult);
const powerResult = calculator.power(divideResult, minusResult);