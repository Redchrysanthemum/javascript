const clock = document.querySelector(".js-clock");

function getClock(){
    const today=new Date("2022-12-25:00:00:00+0900");
    const date=new Date();
    const dday=today-date;

    const Day=Math.floor(dday/(1000*60*60*24)); //일
    const Hours=String(Math.floor((dday/(1000*60*60))%24)).padStart(2,"0"); //시
    const Minutes= String(Math.floor(dday%(1000*60*60)/(1000*60))).padStart(2,"0"); //분
    const Seconds=String(Math.floor((dday/1000)%60)).padStart(2,"0"); //초

    clock.innerText = `${Day} d ${Hours} h ${Minutes} m ${Seconds} s`;
    
}

    getClock();
    setInterval(getClock,1000);



    