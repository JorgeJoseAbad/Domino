
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
    }

//GameOver without winner (lack of dominoes)
DominoGame.prototype.endgame=function(){
  document.getElementById("gamestate").innerHTML='No more dominoes in box,'+
   ' END OF GAME';
};

// GameOver with winner.
DominoGame.prototype.gameOver=function(player){
  var winner;
  if (player.body.length===0){
    winner=player.name;
    document.getElementById("gamestate").innerHTML=winner +' is the winner;'+
      ' GAME OVER';
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
    document.getElementById("gamestate").innerHTML=
      'Game is running, pick a domino and place it with click in the grey board.'+
      ' Then press space and move the chip with the pointer (mouse or trackpad),'+
      ' rotating it by pressing space. Leave it in place by lifting the pointer.'+
      ' If the move is incorrect, the chip returns to player.'+
      ' If the move is correct change turn to other player';
    dominoGame.playerOne.startPlayer(dominoGame.dominoBox);
    dominoGame.playerTwo.startPlayer(dominoGame.dominoBox);

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

      selectedDomino=dominoGame.playerOne.body.splice(numberSelectedDomino,1)[0];

      dominoGame.playerOne.removePlayerDominoes();
      dominoGame.playerOne.showPlayerDominoes();
      dominoGame.dragRotableDomino(selectedDomino,dominoGame.playerOne.name);

    });//end on click event

}; //end function

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

      selectedDomino=dominoGame.playerTwo.body.splice(numberSelectedDomino,1)[0];

      dominoGame.playerTwo.removePlayerDominoes();
      dominoGame.playerTwo.showPlayerDominoes();
      dominoGame.dragRotableDomino(selectedDomino,dominoGame.playerTwo.name);

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

//If playerTwo move on board is NOT valid
  DominoGame.prototype.repeatPlayerTwoMov=function(){
    $('.boardtable').off("click",'.cell-board');
    dominoGame.playerTwo.removePlayerDominoes();
    dominoGame.playerTwo.showPlayerDominoes();
    dominoGame.selecDominoPlayerTwo();
  };

//Make dragable & rotable the domino placed on board
DominoGame.prototype.rotateDomino=function(rotable,domSelected,name){

  var angleMode=0;
  var angle = 0;
  var colOne, colTwo, rowOne, rowTwo;
  var aspect=0;
  var top=parseInt(rotable.style.marginTop)+dominoGame.gameBoard.firstCellPosition.top;
  var left=parseInt(rotable.style.marginLeft)+dominoGame.gameBoard.firstCellPosition.left;

  $('.boardtable').off();

  $('.rotableDragable').draggable({
     grid: [ 10, 10 ],
     }
    );

  $('.rotableDragable')
   .css('marginLeft',0+'px')
   .css('left',left+'px');
  $('.rotableDragable')
   .css('marginTop',0+'px')
   .css('top',top+'px');

  $(document).keypress(function(e) {

    $('.rotableDragable')
        .css('marginLeft',0+'px');

    $('.rotableDragable')
        .css('marginTop',0+'px');

   var mode=(angleMode===0) ? angle=0 : angle=(angle+90);
     angleMode=1;

   $(".rotableDragable").css("-webkit-transform", "rotate(" + angle + "deg)");

   switch (angle) {
     case 0: aspect=4;
    break;
     case 90: aspect=1;
    break;
     case 180: aspect=2;
    break;
     case 270: aspect=3;
    break;
     case 360: {aspect=4;
               angle=0;}
    break;
    default:
   }
  }); //end $(document).keypress(function(e)

  $('.boardtable').on('mouseup','.rotableDragable',function(){
    if (angleMode===1) dominoGame.generateCoordsOfPlacedDomino(this,domSelected,aspect,name);

  });
}; // end function rotateDomino

//function that states the position on board of sub-divs of new domino placed and rotated
DominoGame.prototype.generateCoordsOfPlacedDomino=function(rotableDragable,domSelected,
  aspect,playername){
debugger;
  var globalOffset=dominoGame.gameBoard.firstCellPosition;
  var leftOffset=parseInt(rotableDragable.style.left)-globalOffset.left; //offset in px from left reference
  var nColumn=Math.round(leftOffset/20);
  var topOffset=parseInt(rotableDragable.style.top)-globalOffset.top; //offset in px from top reference
  var nRow=Math.round(topOffset/20);

// row column adjust to numberOne of domino position
  switch (aspect) {
    case 1:
      colOne=nColumn;
      rowOne=nRow;
      colTwo=colOne-1;
      rowTwo=nRow;
    break;
    case 2:
      colOne=nColumn;
      rowOne=nRow+1;
      colTwo=nColumn;
      rowTwo=nRow;
    break;
    case 3:
      colOne=nColumn-1;
      rowOne=nRow;
      colTwo=nColumn;
      rowTwo=nRow;
    break;
    case 4:
      colOne=nColumn;
      rowOne=nRow;
      colTwo=colOne;
      rowTwo=rowOne+1;
    break;
    default:
  }

  dominoGame.placeDominoInBoard(playername,domSelected,rotableDragable,rowOne,colOne,rowTwo,colTwo,aspect);


}; // end of function generateCoordsOfPlacedDomino

/*Function dragRotableDomino that creates a rotable and dragable div.*/
DominoGame.prototype.dragRotableDomino=function(domSelected,name){

  $('.boardtable').on('mousedown','.cell-board',function(){
      dataRow=parseInt($(this).attr('data-row'));
      dataCol=parseInt($(this).attr('data-col'));

      $('.boardtable').append($('<div>')
        .addClass('rotableDragable')
        .attr('data-row', dataRow)
        .attr('data-col', dataCol)
        .css('marginLeft',dataCol*20+'px')
        .css('marginTop',dataRow*20+'px')
      );

     $('.boardtable .rotableDragable').append($('<div>')
       .addClass('dominonumberplaced')
       .attr('dominonumber',1)
       .attr('number',domSelected.numberOne)
       .attr('open',true)
       .attr('row',dataRow)
       .attr('col',dataCol)
     );

     $('.boardtable .rotableDragable').append($('<div>')
       .addClass('dominonumberplaced')
       .attr('dominonumber',2)
       .attr('number',domSelected.numberTwo)
       .attr('open',true)
       .attr('row',dataRow+1)
       .attr('col',dataCol)
     );


  var rotableDragable = document.getElementsByClassName('rotableDragable')[0];

  //this is to construct the domino we are placing
      $('.dominonumberplaced[dominonumber=1]')[0].innerHTML=domSelected.numberOne;
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


      $('.dominonumberplaced[dominonumber=2]')[0].innerHTML=domSelected.numberTwo;
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

      dominoGame.rotateDomino(rotableDragable,domSelected,name);

  }); //on mousedown clicK


}; //DominoGame.prototype.dragRotableDomino


/*Function with rotable, col y row positions and aspect*/
DominoGame.prototype.placeDominoInBoard=function(name,domSelected,rotable,rowOne,colOne,rowTwo,colTwo,aspect){

 $('.boardtable').off('mouseup','.rotableDragable'); //prueba
 var end=dominoGame.gameBoard.domino.length-1;

 $('.dominonumberplaced[dominonumber=1]').attr("row",rowOne);
 $('.dominonumberplaced[dominonumber=1]').attr("col",colOne);
 $('.dominonumberplaced[dominonumber=2]').attr("row",rowTwo);
 $('.dominonumberplaced[dominonumber=2]').attr("col",colTwo);


 if (dominoGame.gameBoard.domino[0]===undefined) {
     dominoGame.gameBoard.drawFirstDomino(rotable,domSelected);
     dominoGame.gameBoard.insertFirstDomino(rotable,domSelected);

     if (name===dominoGame.playerOne.name) {
         dominoGame.movDominoPlayerOneValid();
         $('#dominoesplayerone').off();
       } else if (name===dominoGame.playerTwo.name){
         dominoGame.movDominoPlayerTwoValid();
         $('#dominoesplayertwo').off();
       }
   }
      else if (dominoGame.gameBoard.placeDominoAtStart(rotable,aspect)){
                dominoGame.gameBoard.drawDomino(rotable,domSelected);
                dominoGame.gameBoard.movToBegin(rotable,domSelected);
                if (name===dominoGame.playerOne.name) {
                    dominoGame.movDominoPlayerOneValid();
                    dominoGame.gameOver(playerOne);
                    $('#dominoesplayerone').off();
                  } else if (name===dominoGame.playerTwo.name){
                    dominoGame.movDominoPlayerTwoValid();
                    dominoGame.gameOver(playerTwo);
                    $('#dominoesplayertwo').off();
                  }
      } //else if placeDominoAtStart
      else if (dominoGame.gameBoard.placeDominoAtEnd(rotable,aspect)){
                dominoGame.gameBoard.drawDomino(rotable,domSelected);
                dominoGame.gameBoard.movToEnd(rotable,domSelected);
                if (name===dominoGame.playerOne.name) {
                    dominoGame.movDominoPlayerOneValid();
                    dominoGame.gameOver(playerOne);
                    $('#dominoesplayerone').off();
                  } else if (name===dominoGame.playerTwo.name){
                    dominoGame.movDominoPlayerTwoValid();
                    dominoGame.gameOver(playerTwo);
                    $('#dominoesplayertwo').off();
                  }
        } //else if placeDominoAtEnd

    // from here, if a movement is not valid.
    else if (name===dominoGame.playerOne.name){
      dominoGame.playerOne.addDomino(domSelected);
      $('#dominoesplayerone').off();
      dominoGame.repeatPlayerOneMov();
      $(".rotableDragable").remove();
    }
    else if (name===dominoGame.playerTwo.name){
      dominoGame.playerTwo.addDomino(domSelected);
      $('#dominoesplayertwo').off();
      dominoGame.repeatPlayerTwoMov();
      $(".rotableDragable").remove();
    }

}; //end function placeDominoInBoard

    var dominoGame = new DominoGame({
      playerOne:playerOne,
      playerTwo:playerTwo,
      dominoBox:dominoBox,
      gameBoard:gameBoard,
    });
