
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


    $('#dominoesplayertwo').on('click', ".dominoplayertwo.filled", function() {
      var selectedDomino;
      var numberSelectedDomino;
      numberSelectedDomino=$(this).attr('picknumber');

      /*new solo vale ahora como indicacion de que he herealizado clik en tal elemento*/
      $('.dominoplayerone.filled[picknumber="'+numberSelectedDomino+'"]').mouseup(
              console.log("he soltado el dragable",numberSelectedDomino)
          );
      /**/

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

//Draw dominoes in board
DominoGame.prototype.drawNumbersInBoard=function(position,number){
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

};

DominoGame.prototype.rotableDomino=function(rotable){
      var conta=0;

      console.log("in funcion rotableDomino, rotable is:",rotable);
      $('.boardtable').off(); //para eliminar el evento on actual
                              //(que pone la ficha seleccionada) sobre la tabla
      //to make it rotating.
      $(document).keypress(function(e) {
        $('.boardtable').off();  //para evitar repeticiones del evento "on" del final de la funcion;
      //To reset margin of domino and be able to move in all the table after first placement of domino.
      $('.rotableDragable').css(
        'marginLeft',0+'px'//experimental
      );
      $('.rotableDragable').css(
        'marginTop',0+'px'
      );

         console.log("activated ui-widget-content keypress y conta es:",conta);
         conta++;

          if(e.which == 32) {
             console.log("preskey space");
             console.log(conta);
             //$('#rotating-dragable').toggleClass('rotated');
          }

          if (conta===1){
             console.log("keypressed: ", e.which, conta);
             $('.rotableDragable').addClass('rotated1');
         }

         if (conta===2){
             console.log("keypressed: ", e.which, conta);
             $('.rotableDragable').removeClass('rotated1');
             $('.rotableDragable').addClass('rotated2');
         }

         if (conta===3){
             console.log("keypressed: ", e.which, conta);
             $('.rotableDragable').removeClass('rotated2');
             $('.rotableDragable').addClass('rotated3');
         }

         if (conta===4){
             console.log("keypressed: ", e.which, conta);
             $('.rotableDragable').removeClass('rotated3');
             $('.rotableDragable').addClass('rotated4');
         }

         if (conta===5) {
             console.log("keypressed: ", e.which, conta);
             $('.rotableDragable').removeClass('rotated4');
             $('.rotableDragable').addClass('rotated1');
             conta=1;
         }
         //dentro de la funcion que permite rotar, detectamos el levantamiento del mouse
         //para indicar posición elegida por el jugador
        $('.boardtable').on('mouseup','.rotableDragable',function(){
          console.log("prueba levantar muse, y conta es:",conta);

          var globalOffset=dominoGame.gameBoard.firstCellPosition;
          console.log("Global OFFSET: ",globalOffset);
          console.log(this.style.left,globalOffset.left);
          console.log(this.style.top,globalOffset.top);

          console.log("this:-----",this);//this is here the rotableDragable class, is the var rotable
          var leftOffset=parseInt(this.style.left)-globalOffset.left; //offset in px from left reference
          console.log("ofset-IZQUIERDO: ",leftOffset);
          console.log("COLUMN: ",Math.round(leftOffset/20));
          var topOffset=parseInt(this.style.top)-globalOffset.top; //offset in px from top reference
          console.log("ofset-SUPERIOR: ",topOffset);
          console.log("ROW: ",Math.round(topOffset/20));



          console.log("dominoGame.gameBoard.domino[0] es:",dominoGame.gameBoard.domino[0]);

          if (conta===1){
            placedRow=Math.round(topOffset/20); //ok row aproximate.
            placedCol=Math.round(leftOffset/20);
          }
          if (conta===2){
            placedRow=Math.round(topOffset/20); //ok row aproximate.
            placedCol=Math.round(leftOffset/20); //ok col aproximate, -4 is "calibration"
          }
          if (conta===3){
            placedRow=Math.round(topOffset/20); //ok row aproximate.
            placedCol=Math.round(leftOffset/20);
          }
          if (conta===4){
            placedRow=Math.round(topOffset/20); //ok row aproximate.
            placedCol=Math.round(leftOffset/20); //ok col aproximate, -4 is "calibration"
          }
          console.log("par posicion, placedRow, placedCol, conta: ",placedRow,placedCol, conta);
          if (dominoGame.gameBoard.domino[0]===undefined){
            console.log("primera ficha, ojo");
          }
          else dominoGame.gameBoard.newGraphicOk(conta,this,rotable,dominoGame.gameBoard.domino[0]);
        });
         //$('.rotableDragable').toggleClass('rotated1');

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

    //to make it dragable
    $('.rotableDragable').draggable({
      containment: ".boardtable",
      scroll: false,
    }
  );

//this work
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

   var rotable=document.getElementsByClassName('rotableDragable')[0];

   console.log("rotable es",rotable);

   dominoGame.rotableDomino(rotable);
     //aqui ahora this es la board
});

};


DominoGame.prototype.placeDominoInBoard=function(domSelected,name){

  var dataRow;
  var dataCol;
  var end=dominoGame.gameBoard.domino.length-1; //index of last domino placed in board

    $('.boardtable').on('click','.cell-board',function(){
      console.log("dom selected es:",domSelected);
      //$(domSelected).draggable();//esto no vale no se como funcionara
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


    var dominoGame = new DominoGame({
      playerOne:playerOne,
      playerTwo:playerTwo,
      dominoBox:dominoBox,
      gameBoard:gameBoard,
    });
