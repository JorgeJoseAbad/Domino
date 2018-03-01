
    function DominoGame(options){
      this.playerOne=options.playerOne;
      this.playerTwo=options.playerTwo;
      this.dominoBox=options.dominoBox;
      this.gameBoard=options.gameBoard;

      this.dominoBox.print();
      this.dominoBox.shuffle();
      this.dominoBox.print();

      this.startGame();
      this.pickNewDomino();
      //this.selecDominoPlayerOne();
      //this.selecDominoPlayerTwo();
      //this.placeDominoInBoard();


    }

//GameOver without winner (lack of dominoes)
DominoGame.prototype.endgame=function(){
  document.getElementById("gamestate").innerHTML='No more dominoes in box, END OF GAME';
};

// GameOver with winner.
DominoGame.prototype.gameOver=function(player){
  var winner;
  if (player.body.length===0){
    console.log(player.name+'is winner!!!!!!!!!');
    winner=player.name;
    document.getElementById("gamestate").innerHTML=winner +' is the winner; GAME OVER';
    }
  else {
    console.log('game again');
    }

};

//function to give a player a new domino from the box.
DominoGame.prototype.pickNewDomino=function(){
    var newDomino;

    $("button.picknewdomino").click(function(){

      newDomino=dominoBox.getDomino();
      if (newDomino===null) dominoGame.endgame();
      console.log(newDomino);
      if (dominoGame.playerOne.turn===true) {
        dominoGame.playerOne.body.push(newDomino);
        dominoGame.playerOne.removePlayerDominoes();
        dominoGame.playerOne.showPlayerDominoes();

      } else if (dominoGame.playerTwo.turn===true){
        dominoGame.playerTwo.body.push(newDomino);
        dominoGame.playerTwo.removePlayerDominoes();
        dominoGame.playerTwo.showPlayerDominoes();

      }
  });
};

//Start Game
DominoGame.prototype.startGame=function(){

    //update players name
    document.getElementsByClassName("nameplayer")[0].innerHTML=this.playerOne.name;
    document.getElementsByClassName("nameplayer")[1].innerHTML=this.playerTwo.name;
    //start buttton to begin the game...
    $("button.startgame").click(function(){
      document.getElementById("gamestate").innerHTML='Game is running, pick a domino and place it whith the mouse in the grey board, mouse points to number 1 (the upper) of domino. if the move is incorrect, the domino token returns to the player';
      dominoGame.playerOne.startPlayer(dominoGame.dominoBox);
      dominoGame.playerTwo.startPlayer(dominoGame.dominoBox);
      console.log(dominoGame.playerOne);
      if (dominoGame.playerOne.searchDomino(6,6)){
        dominoGame.playerOne.turn=true;
        dominoGame.playerOne.showPlayerDominoes();
        dominoGame.selecDominoPlayerOne();
      } else if (dominoGame.playerTwo.searchDomino(6,6)){
              dominoGame.playerTwo.turn=true;
              dominoGame.playerTwo.showPlayerDominoes();
              dominoGame.selecDominoPlayerTwo();
              } else {
                  dominoGame.playerOne.turn=true;
                  dominoGame.playerOne.showPlayerDominoes();
                  dominoGame.selecDominoPlayerOne();
                  }
     dominoGame.gameBoard.drawBoard();

   });

};



// Game select playerOne's domino
DominoGame.prototype.selecDominoPlayerOne=function(){

    $('#dominoesplayerone').on('click', ".dominoplayerone.filled", function() {
      var selectedDomino;
      var numberSelectedDomino;
      numberSelectedDomino=$(this).attr('picknumber');

      /*new solo vale ahora como indicacion de que he herealizado clik en tal elemento*/
      $('.dominoplayerone.filled[picknumber="'+numberSelectedDomino+'"]').mouseup(
             console.log("he soltado el dragable",numberSelectedDomino)
          );


      selectedDomino=dominoGame.playerOne.body.splice(numberSelectedDomino,1)[0];
      console.log("selectedDomino del player 1 es",selectedDomino);
      dominoGame.playerOne.removePlayerDominoes();
      dominoGame.playerOne.showPlayerDominoes();
      dominoGame.dragRotableDomino(selectedDomino,dominoGame.playerOne.name);
//ojo aqui la prueba cambiando la funcion de destino del domino seleccionado
    });

};

// If playerOne move on board is valid...
DominoGame.prototype.movDominoPlayerOneValid=function(){
        console.log("estamos en movDominoPlayerOneValid");

        $('.boardtable').off("click",'.cell-board');
        dominoGame.playerOne.changeTurn();
        dominoGame.playerOne.hideDominoes();
        dominoGame.playerTwo.showDominoes();
        dominoGame.playerTwo.removePlayerDominoes();
        dominoGame.playerTwo.showPlayerDominoes();
        dominoGame.selecDominoPlayerTwo();
};

//If playerOne move on board is NOT valid
DominoGame.prototype.repeatPlayerOneMov=function(){
  $('.boardtable').off("click",'.cell-board');
  dominoGame.playerOne.removePlayerDominoes();
  dominoGame.playerOne.showPlayerDominoes();
  dominoGame.selecDominoPlayerOne();
};

// Game select playerTwo's domino
DominoGame.prototype.selecDominoPlayerTwo=function(){
  console.log("estamos en selecDominoPlayerTwo");


    $('#dominoesplayertwo').on('click', ".dominoplayertwo.filled", function() {
      var selectedDomino;
      var numberSelectedDomino;
      numberSelectedDomino=$(this).attr('picknumber');

      selectedDomino=dominoGame.playerTwo.body.splice(numberSelectedDomino,1)[0];
      console.log("selected domino del player2 es:",selectedDomino);
      dominoGame.playerTwo.removePlayerDominoes();
      dominoGame.playerTwo.showPlayerDominoes();
      dominoGame.dragRotableDomino(selectedDomino,dominoGame.playerTwo.name);
//prueba aqui poniendo dragRotableDomino
    }); //end onclick event

  }; // End selectedDomino function


  // If playerTwo move on board is valid...
  DominoGame.prototype.movDominoPlayerTwoValid=function(){

    $('.boardtable').off("click",'.cell-board');
    dominoGame.playerTwo.changeTurn();
    dominoGame.playerTwo.hideDominoes();
    dominoGame.playerOne.showDominoes();
    dominoGame.playerOne.removePlayerDominoes();
    dominoGame.playerOne.showPlayerDominoes();
    dominoGame.selecDominoPlayerOne();
  };

  DominoGame.prototype.repeatPlayerTwoMov=function(){
    $('.boardtable').off("click",'.cell-board');
    dominoGame.playerTwo.removePlayerDominoes();
    dominoGame.playerTwo.showPlayerDominoes();
    dominoGame.selecDominoPlayerTwo();
  };

DominoGame.prototype.drawNumbersInBoard=function(rowPosition,colPosition,aspect,domSelected){
  console.log("IN newDrawNumbersInBoard, row, col, aspect, number: ",rowPosition,colPosition,aspect,domSelected);
  if (aspect===2) {console.log("aspect 2: ",rowPosition,colPosition,domSelected.numberTwo);}
  if (aspect===4) {console.log("aspect 4: ",rowPosition,colPosition,domSelected.numberOne);}
  if (aspect===1) {console.log("aspect 1: ",rowPosition,colPosition,domSelected.numberTwo);}
  if (aspect===3) {console.log("aspect 3: ",rowPosition,colPosition,domSelected.numberOne);}
};


//Draw dominoes in board, old version
/*DominoGame.prototype.drawNumbersInBoard=function(position,number){
  $(position).addClass('filled');
  $(position).html(number);
  $(position).append("<img>");
  switch (number) {
    case 0:
      $(position).children("img").attr('src',"./img/CERO.png");
      break;
    case 1:
      $(position).children("img").attr('src',"./img/UNO.png");
      break;
    case 2:
      $(position).children("img").attr('src',"./img/DOS.png");
      break;
    case 3:
      $(position).children("img").attr('src',"./img/TRES.png");
      break;
    case 4:
      $(position).children("img").attr('src',"./img/CUATRO.png");
      break;
    case 5:
      $(position).children("img").attr('src',"./img/CINCO.png");
      break;
    case 6:
      $(position).children("img").attr('src',"./img/SEIS.png");
      break;
    default:

  }

};*/

DominoGame.prototype.rotateDomino=function(rotable,domSelected,name){
      var conta=0;
      var cur = 0;
      var deggres=90;
      var colNone, colTwo, rowOne, rowTwo;

      var aspect;
      console.log("in function rotateDomino, rotable is: ",rotable);
      console.log("in function rotateDomino, domSelected is: ",domSelected);
      $('.boardtable').off(); //para eliminar el evento on actual
                              //(que pone la ficha seleccionada) sobre la tabla

         //to make placed domino dragable inside board
      $('.rotableDragable').draggable({
           //containment: ".boardtable",
           grid: [ 10, 10 ],
           //scroll: false,
         }
       );

    $(document).keypress(function(e) {
      console.log(e.which);
      //$('.rotableDragable').off();  //para evitar repeticiones del evento "on" del final de la funcion;
      //To reset margin of domino and be able to move in all the table after first placement of domino.
      $('.rotableDragable').css(
        'marginLeft',0+'px'//experimental
      );
      $('.rotableDragable').css(
        'marginTop',0+'px'
      );

      var pos = (conta===0) ? cur=0 :
        cur=(cur+deggres);
        conta=1;

        $(".rotableDragable").css("-webkit-transform", "rotate(" + cur + "deg)");
        switch (cur) {
          case 0: aspect=4;
            break;
          case 90: aspect=1;
            break;
          case 180: aspect=2;
            break;
          case 270: aspect=3;
            break;
          case 360: {aspect=4;
                    cur=0;
                  }
            break;
        default:

        }
        console.log("cur, o sea grados, o sea aspecto: ",cur);
        console.log("aspect, orientacion: ", aspect);

         //dentro de la funcion que permite rotar, detectamos el levantamiento del mouse
         //para indicar posición elegida por el jugador
        $('.boardtable').on('mouseup','.rotableDragable',function(){
          //event.preventDefault();
          console.log("prueba levantar dedo del padtrack, y conta es:",conta);

          var globalOffset=dominoGame.gameBoard.firstCellPosition;
          console.log("Global OFFSET: ",globalOffset);
          console.log("this:-----",this);//this is here the rotableDragable class, is the var rotable

          console.log("this.style.left: ",this.style.left);
          console.log("this.style.top: ",this.style.top);
          //console.log(+this.getAttribute("data-x"),globalOffset.left);
          //console.log(+this.getAttribute("data-y"),globalOffset.top);

          var leftOffset=parseInt(this.style.left)-globalOffset.left; //offset in px from left reference
          console.log("ofset-IZQUIERDO: ",leftOffset);
          var nColumn=Math.round(leftOffset/20);
          console.log("COLUMN: ",nColumn);

          var topOffset=parseInt(this.style.top)-globalOffset.top; //offset in px from top reference
          console.log("ofset-SUPERIOR: ",topOffset);
          var nRow=Math.round(topOffset/20);
          console.log("ROW: ",nRow);

          console.log("dominoGame.gameBoard.domino[0] es:",dominoGame.gameBoard.domino[0]);
            // row column adjust to numberOne of domino position
          if (aspect===1){
            colOne=nColumn+1;
            rowOne=nRow+1;
            colTwo=colOne-1;
            rowTwo=rowOne;
          }
          if (aspect===2){
            colOne=nColumn;
            rowOne=nRow+1;
            colTwo=colOne;
            rowTwo=rowOne-1;
          }
          if (aspect===3){
            colOne=nColumn;
            rowOne=nRow+1;
            colTwo=colOne+1;
            rowTwo=rowOne;
          }
          if (aspect===4){
            colOne=nColumn;
            rowOne=nRow;
            colTwo=colOne;
            rowTwo=rowOne+1;
          }
          console.log("par posicion y aspecto: colOne: ",colOne," colTwo: ",colTwo," rowOne: ", rowOne," rowTwo: ", rowTwo," aspect: ",aspect);

          //correcting attributes of rotable (this in this context)


          dominoGame.placeDominoInBoard(name,domSelected,this,rowOne,colOne,rowTwo,colTwo,aspect);



        });


     }); //function to rotate domino
};


/*nueva funcion dragRotableDomino que en vez de detectar el click para ver si
puede dibujar ahí la pieza
lo que hace es crear una div rotable y dragable*/
DominoGame.prototype.dragRotableDomino=function(domSelected,name){
  console.log("he llegado a dragRotableDomino",domSelected);
  console.log(name);

    //crea en .boardtable una division con atributos de rotable y draggable
  $('.boardtable').on('mousedown','.cell-board',function(){
      console.log("evento onclidk");
      console.log(this); // with,'.cell-board', this is now the cell-board where i clicked
      dataRow=parseInt($(this).attr('data-row'));
      dataCol=parseInt($(this).attr('data-col'));
      console.log(dataRow);
      console.log(dataCol);
      $('.boardtable').append($('<div>')
        .addClass('rotableDragable')
        .attr('data-row', dataRow) //takes as atributos the datrow y datacol donde hago click
        .attr('data-col', dataCol)
        .css('marginLeft',dataCol*20+'px')//experimental to place the domines
        .css('marginTop',dataRow*20+'px')//where made click
      );

     $('.boardtable .rotableDragable').append($('<div>')
       .addClass('dominonumberplaced')
       .attr('dominonumber',1)
       .attr('row',dataRow)
       .attr('col',dataCol)

     );

     $('.boardtable .rotableDragable').append($('<div>')
       .addClass('dominonumberplaced')
       .attr('dominonumber',2)
       .attr('row',dataRow+1)
       .attr('col',dataCol)

     );


  var rotableDragable = document.getElementsByClassName('rotableDragable')[0];
  console.log("var rotableDragable is: ",rotableDragable);


  //this is to construct the domino we are placing
      $('.dominonumberplaced[dominonumber=1]')[0].innerHTML=domSelected.numberOne;
      console.log("primero",domSelected.numberOne);
      $('.dominonumberplaced[dominonumber=1]').append("<img>");
      switch (domSelected.numberOne) {
        case 0:
          $('.dominonumberplaced[dominonumber=1]').children("img").attr('src',"./img/CERO.png");
          break;
        case 1:
          $('.dominonumberplaced[dominonumber=1]').children("img").attr('src',"./img/UNO.png");
          break;
        case 2:
          $('.dominonumberplaced[dominonumber=1]').children("img").attr('src',"./img/DOS.png");
          break;
        case 3:
          $('.dominonumberplaced[dominonumber=1]').children("img").attr('src',"./img/TRES.png");
          break;
        case 4:
          $('.dominonumberplaced[dominonumber=1]').children("img").attr('src',"./img/CUATRO.png");
          break;
        case 5:
          $('.dominonumberplaced[dominonumber=1]').children("img").attr('src',"./img/CINCO.png");
          break;
        case 6:
          $('.dominonumberplaced[dominonumber=1]').children("img").attr('src',"./img/SEIS.png");
          break;
        default:
      }


  //this work
      $('.dominonumberplaced[dominonumber=2]')[0].innerHTML=domSelected.numberTwo;
      console.log("segundo",domSelected.numberTwo); //aqui ahora this is the boardtable
      $('.dominonumberplaced[dominonumber=2]').append("<img>");
      switch (domSelected.numberTwo) {
        case 0:
          $('.dominonumberplaced[dominonumber=2]').children("img").attr('src',"./img/CERO.png");
          break;
        case 1:
          $('.dominonumberplaced[dominonumber=2]').children("img").attr('src',"./img/UNO.png");
          break;
        case 2:
          $('.dominonumberplaced[dominonumber=2]').children("img").attr('src',"./img/DOS.png");
          break;
        case 3:
          $('.dominonumberplaced[dominonumber=2]').children("img").attr('src',"./img/TRES.png");
          break;
        case 4:
          $('.dominonumberplaced[dominonumber=2]').children("img").attr('src',"./img/CUATRO.png");
          break;
        case 5:
          $('.dominonumberplaced[dominonumber=2]').children("img").attr('src',"./img/CINCO.png");
          break;
        case 6:
          $('.dominonumberplaced[dominonumber=2]').children("img").attr('src',"./img/SEIS.png");
          break;
        default:
      }

      console.log("rotabledragable es",rotableDragable);
      dominoGame.rotateDomino(rotableDragable,domSelected,name);

       //aqui ahora this es la board
  }); //on mousedown clicK


}; //DominoGame.prototype.dragRotableDomino


/*New version, with rotable, col y row positions and aspect*/

DominoGame.prototype.placeDominoInBoard=function(name,domSelected,rotable,rowOne,colOne,rowTwo,colTwo,aspect){
var end=dominoGame.gameBoard.domino.length-1;
 console.log("INSIDE new placeDominoInBoard function, nameplayer is:",name, "y this is: ",this);
 console.log(dominoGame.playerOne.name);
 console.log(dominoGame.playerTwo.name);
 $('.dominonumberplaced[dominonumber=1]').attr("row",rowOne);
 $('.dominonumberplaced[dominonumber=1]').attr("col",colOne);
 $('.dominonumberplaced[dominonumber=2]').attr("row",rowTwo);
 $('.dominonumberplaced[dominonumber=2]').attr("col",colTwo);
 console.log(domSelected,rotable,rowOne,colOne,rowTwo,colTwo,aspect);
 console.log(dominoGame.gameBoard.domino[0]);
 if (dominoGame.gameBoard.domino[0]===undefined) {
     dominoGame.gameBoard.drawDomino(rotable,domSelected,rowOne,colOne,rowTwo,colTwo);
     console.log("ejecutado drawDomino");
     if (name===dominoGame.playerOne.name) {
         console.log("era player one");
         $('#dominoesplayerone').off();
         dominoGame.gameBoard.insertPushDomino(domSelected);
         dominoGame.movDominoPlayerOneValid();


       } else if (name===dominoGame.playerTwo.name){
         console.log("era player dos");
         $('#dominoesplayertwo').off();
         dominoGame.gameBoard.insertPushDomino(domSelected);
         dominoGame.movDominoPlayerTwoValid();


     }
   } else if (
               ((dominoGame.gameBoard.graphicOk(rotable,dominoGame.gameBoard.domino[0]))&&
               (dominoGame.gameBoard.movToBegin(domSelected)))||
               ((dominoGame.gameBoard.graphicOk(rotable,dominoGame.gameBoard.domino[end]))&&
               (dominoGame.gameBoard.movToEnd(domSelected)))
             ) {
                 console.log(this); //this is the cell-board where i clicked
                 dataRow=parseInt($(this).attr('data-row'));
                 dataCol=parseInt($(this).attr('data-col'));
                 dominoGame.drawNumbersInBoard(this,domSelected.numberOne);
                 dominoGame.drawNumbersInBoard('div[data-row="'+(dataRow+1)+'"][data-col="'+dataCol+'"]',domSelected.numberTwo);
              }

};

/*Old version with posicion by click, no dragable nor rotable*/
/*
DominoGame.prototype.placeDominoInBoard=function(domSelected,name){

  var dataRow;
  var dataCol;
  var end=dominoGame.gameBoard.domino.length-1; //index of last domino placed in board

    $('.boardtable').on('click','.cell-board',function(){
      console.log("dom selected es:",domSelected);
      console.log(dominoGame.gameBoard.domino[0]);
      if (dominoGame.gameBoard.domino[0]===undefined) {
          dominoGame.gameBoard.insertPushDomino(domSelected); //para el primer movimento
          console.log(this); //this is the cell-board where i clicked
          dataRow=parseInt($(this).attr('data-row'));
          dataCol=parseInt($(this).attr('data-col'));
          dominoGame.drawNumbersInBoard(this,domSelected.numberOne);
          dominoGame.drawNumbersInBoard('div[data-row="'+(dataRow+1)+'"][data-col="'+dataCol+'"]',domSelected.numberTwo);
          if (name===playerOne.name) {
              dominoGame.movDominoPlayerOneValid();
              $('#dominoesplayerone').off();
            } else if (name===playerTwo.name){
              dominoGame.movDominoPlayerTwoValid();
              $('#dominoesplayertwo').off();
          }

        } else if (
                    ((dominoGame.gameBoard.graphicOk(this,domSelected,dominoGame.gameBoard.domino[0]))&&
                    (dominoGame.gameBoard.movToBegin(domSelected)))||
                    ((dominoGame.gameBoard.graphicOk(this,domSelected,dominoGame.gameBoard.domino[end]))&&
                    (dominoGame.gameBoard.movToEnd(domSelected)))
                  ) {
            console.log(this); //this is the cell-board where i clicked
            dataRow=parseInt($(this).attr('data-row'));
            dataCol=parseInt($(this).attr('data-col'));
            dominoGame.drawNumbersInBoard(this,domSelected.numberOne);
            dominoGame.drawNumbersInBoard('div[data-row="'+(dataRow+1)+'"][data-col="'+dataCol+'"]',domSelected.numberTwo);
            if (name===playerOne.name) {
                dominoGame.movDominoPlayerOneValid();
                dominoGame.gameOver(playerOne);
                $('#dominoesplayerone').off();
              } else if (name===playerTwo.name){
                dominoGame.movDominoPlayerTwoValid();
                dominoGame.gameOver(playerTwo);
                $('#dominoesplayertwo').off();
              }
            } else {
                    if (name===playerOne.name){
                      dominoGame.playerOne.addDomino(domSelected);
                      $('#dominoesplayerone').off();
                      dominoGame.repeatPlayerOneMov();

                    } else if (name===playerTwo.name){
                      dominoGame.playerTwo.addDomino(domSelected);
                      $('#dominoesplayertwo').off();
                      dominoGame.repeatPlayerTwoMov();

                    }
                  }
                  console.log(dominoGame.gameBoard.domino);
            }); // end onclic event

    }; //end function placeDominoInBoard
*/

    var dominoGame = new DominoGame({
      playerOne:playerOne,
      playerTwo:playerTwo,
      dominoBox:dominoBox,
      gameBoard:gameBoard,
    });
