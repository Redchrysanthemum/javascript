 GX = 0; //블럭을 생성할 초기 위치X
 GY = 3; //블럭을 생성할 초기 위치Y
 NGY = 17;
 TURN = 0;
 TYPE = Math.round(Math.random()*6);
 NTYPE = Math.round(Math.random()*6);
 BLOCKTYPE=6, BLOCKROTATE=3;
 GAME_SPEED = 2000;

window.onload = function(){

    drawMap();
    drawNextTetris(NTYPE);
    myFunction();

}
// drawMap 이라는 함수는 페이지가 로드되면 실행되면서 MAP배열의 값을 불러와서 Table을 그리고 각각 td값에 알맞는 클래스값을 지정하여 테트리스 게임의 맵처럼 표출시키는 함수 입니다.
function drawMap(){
    
     rowLen = MAP.length;
    let tag = "<table>";
     x = 0;
     y = 0;
    for(let i=0; i<rowLen; i++){
        tag += "<tr>"
         colLen = MAP[i].length;
        for(let j=0; j<colLen; j++){
            let className = "";
            let idValue = "";
            if(MAP [i] [j] == 0){
                className = "map";
                idValue = "x"+(i-2)+"y"+(j-2);

            }else if(MAP [i] [j] == 2){
                className = "map";
                idValue = "xn"+(i-1)+"yn"+(j-16);

            }else if(MAP [i] [j] == 3){
                className = "guard";

            }else if(MAP [i] [j] == 4){
                className = "board";
            }

            if(idValue != ""){
                tag += "<td id="+idValue+" class="+className+"></td>"
            }else{
                tag += "<td class="+className+"></td>"
            }



            


        }
        tag += "</tr>"
    }
    document.getElementById("container").innerHTML = tag + "</table>";
};


//ChangeColor 함수는 전달받은x,y값에 따라 클래스명을 처리해줍니다.
function ChangeColor(x,y,cN){

    document.getElementById("x" + x + "y" + y).className = cN;
}

//drawNextTetris 는 다음으로 그려질 블럭을 그리는 함수입니다.
function drawNextTetris(NTYPE){
    for(let x=0; x<4; x++){
        for(let y=0; y<4; y++){
            if(TETRIS [NTYPE] [0] [x] [y] == 1){
                ChangeColor("n"+(x+1), "n"+y, "block"+NTYPE);
            }
        }
    }
}



//drawTetris 함수는 테트리스 블럭을 특정 위치에 그리는 함수 입니다.
function drawTetris(GX, TYPE, TURN){
    for(let x=0; x <TETRIS[BLOCKTYPE][BLOCKROTATE].length; x++){
        for(let y=0; y <TETRIS[BLOCKTYPE][BLOCKROTATE][x].length;y++){
            if( TETRIS [TYPE] [TURN] [x] [y] == 1){
                ChangeColor( x + GX , y + GY , "block" + TYPE);
            }
        }
    }
}


//myFunction 은 현재 기능적으로 정의된게 없지만 추후에 동작 정의나 초기값 설정등을 처리할 함수입니다.
function myFunction(input){
    //테트리스 블럭 그리기
    drawTetris (GX, TYPE, TURN);
}


// ----------- action() ------------------

window.onload = function(){
    drawMap();
    drawNextTetris(NTYPE);
    myFunction();
    action(); //action 함수 추가
}

/* 
    동작 메소드
    interval 함수로 입력시간마다 동작
    (gameSpeed에 따라 떨어지는 속도가 변경)
*/

function action(){
    let intervalID = setInterval(function(){
        console.log("action!")
        GX++;
        drawTetris(GX, TYPE, TURN);
    }, GAME_SPEED);
}

// window.onload 맨 끝에 action 함수를 추가하여 페이지가 로드되면 action함수가 실행되도록 처리하였습니다.

//action 함수 내부를 보니 Interval함수에 의해 GAME_SPEED값마다 콘솔로그값을 출력 후 GX전역 변수값을 증가시킨 후에 drawTetris 함수를 호출하는 것을 볼 수 있습니다. 

//drawTetris함수는 현재 선택된 테트리스의 값을 특정 위치에 그려주는 함수 입니다.
//특정 위치를 그려주므로 일정 시간마다 우리는 위에서 아래로 떨어지는 모습을 위해 GX변수값을 증가시켜주면 자연스럽게 밑으로 계속해서 그려줄 것입니다.


//특정 지역을 map으로 초기화(block값으로 되어있던걸 map으로)
function erase(GX, TYPE, TURN){
    for(let x=0; x<TETRIS[BLOCKTYPE][BLOCKROTATE].length; x++){
        for(let y=0; y<TETRIS[BLOCKTYPE][BLOCKROTATE][x].length; y++){
            if(TETRIS[TYPE][TURN][x][y]==1){
                ChangeColor(x+GX, y+GY, "map");
            }
        }
    }
}


function action(){
    let intervalID = setInterval(function(){
        erase(GX, TYPE, TURN); //생성한 전위치 블럭 삭제
        GX++; //한줄씩 내리기
        drawTetris(GX, TYPE, TURN); //테트리스를 그린다.
    }, GAME_SPEED);
} 

function myFunction(input){
    switch(input){
        case 53://회전
            console.log("5번이 입력되었습니다.");
            break;
        case 49://블럭왼쪽이동                        
            console.log("1번이 입력되었습니다.");
            break;
        case 51://블럭오른쪽이동            
            console.log("3번이 입력되었습니다.");
            break;
        case 50://블럭아래로이동            
            console.log("2번이 입력되었습니다.");
            break;
        case 32://스페이스
            console.log("스페이스바가 입력되었습니다!");
            break;
    }
    //테트리스 블럭 그리기
    drawTetris(GX, TYPE, TURN);
}

function action(){
    //keyEvent
    document.addEventListener("keypress", function(){
        myFunction(event.keyCode);
    });
}


setInterval(action, 3000);
