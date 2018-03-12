
    function Board(options) {

      this.rows               = options.rows;
      this.columns            = options.columns;
      this.domino             = options.dominoPlayed;
      this.firstCellPosition  = options.firstCellPosition; //new, ojo

    }

//New function newGraphicOk to check graphically correct movement
//with consideration of position and orientation of domino
Board.prototype.drawDomino=function(rotable,domSelected){
  console.log("ESTAMOS EN drawDomino function");
  console.log("Rotable: ", rotable);
  console.log("domSelected ",domSelected); //orientacion del domino puesto

  rowOne=rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('row');
  colOne=rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('col');
  rowTwo=rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('row');
  colTwo=rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('col');

  $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]")[0].innerHTML=+domSelected.numberOne;
  $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]").addClass("occupied").append("<img>");
  switch (domSelected.numberOne) {
    case 0:
      $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]").children("img").attr('src',"./img/CERO.png");
      break;
    case 1:
      $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]").children("img").attr('src',"./img/UNO.png");
      break;
    case 2:
      $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]").children("img").attr('src',"./img/DOS.png");
      break;
    case 3:
      $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]").children("img").attr('src',"./img/TRES.png");
      break;
    case 4:
      $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]").children("img").attr('src',"./img/CUATRO.png");
      break;
    case 5:
      $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]").children("img").attr('src',"./img/CINCO.png");
      break;
    case 6:
      $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]").children("img").attr('src',"./img/SEIS.png");
      break;
    default:
  }

  $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]")[0].innerHTML=+domSelected.numberTwo;
  $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").addClass('occupied').append("<img>");
  switch (domSelected.numberTwo) {
    case 0:
      $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").children("img").attr('src',"./img/CERO.png");
      break;
    case 1:
      $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").children("img").attr('src',"./img/UNO.png");
      break;
    case 2:
      $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").children("img").attr('src',"./img/DOS.png");
      break;
    case 3:
      $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").children("img").attr('src',"./img/TRES.png");
      break;
    case 4:
      $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").children("img").attr('src',"./img/CUATRO.png");
      break;
    case 5:
      $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").children("img").attr('src',"./img/CINCO.png");
      break;
    case 6:
      $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").children("img").attr('src',"./img/SEIS.png");
      break;
    default:
  }

  $(".rotableDragable").remove(); //para indicar que est


};
/*newwwww*/


//Function to check graphically correct movement
Board.prototype.boardMovOk=function(rotable,aspect){
  console.log("Estamos en boardMovOk");
  console.log("rotable (new Domino to place) and aspect are:",rotable,aspect);
  var valueRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].firstChild.data);
  var rowRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('row'));
  var colRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('col'));
  var valueRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].firstChild.data);
  var rowRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('row'));
  var colRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('col'));
debugger;
  //verify mov posible to begin of snake
  if(aspect===1){
    if (($('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]').length===0)&&
    (
         ($('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne
         )||
         ( $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne
         )||
         ( $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne)
    )
  ){
      console.log("Movimiento correcto con numero uno");
      return true;
  }
  else if (($('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]').length===0)&&
  (
    $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo)

  ) {
       console.log("movimiento correcto con numero dos");
       return true;
    }
    else {console.log("movimiento incorrecto");
      return false;
    }
 } //aspect===1

  if(aspect===2){
    if (($('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]').length===0)&&
    (
         ($('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne
         )||
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne
         )||
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne)
    )
  ){
      console.log("Movimiento correcto con numero uno");
      return true;
  }
  else if (($('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]').length===0)&&
  (
    $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo)

  ) {
       console.log("movimiento correcto con numero dos");
       return true;
    }
    else {console.log("movimiento incorrecto");
      return false;
    }

  }//aspect 2
  if(aspect===3){
    if (($('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]').length===0)&&
    (
         ($('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne
         )||
         ( $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne
         )||
         ( $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne)
    )
  ){
      console.log("Movimiento correcto con numero uno");
      return true;
  }
  else if (($('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]').length===0)&&
  (
    $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo)

  ) {
       console.log("movimiento correcto con numero dos");
       return true;
    }
    else {console.log("movimiento incorrecto");
      return false;
    }
  }
  if(aspect===4){
    if (($('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]').length===0)&&
    (
         ($('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne
         )||
         ( $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne
         )||
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne)
    )
  ){
      console.log("Movimiento correcto con numero uno");
      return true;
  }
  else if (($('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]').length===0)&&
  (
    $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo)

  ) {
       console.log("movimiento correcto con numero dos");
       return true;
    }
    else {console.log("movimiento incorrecto");
      return false;
    }
  }



};


/*
  thisdataRow=parseInt($(boardPlace).attr('data-row'));
  thisdataCol=parseInt($(boardPlace).attr('data-col'));
  console.log($('div[data-row="'+(thisdataRow)+'"][data-col="'+thisdataCol+'"]').html());


  //verify begin mov to begin
  if (
    ((parseInt($('div[data-row="'+(thisdataRow-1)+'"][data-col="'+thisdataCol+'"]').html())===newDom.numberOne||
      parseInt($('div[data-row="'+thisdataRow+'"][data-col="'+(thisdataCol-1)+'"]').html())===newDom.numberOne||
      parseInt($('div[data-row="'+thisdataRow+'"][data-col="'+(thisdataCol+1)+'"]').html())===newDom.numberOne)&&
          (newDom.numberOne===snakeDom.numberOne&&snakeDom.numberOneOpen||
            newDom.numberOne===snakeDom.numberTwo&&snakeDom.numberTwoOpen))||
      ((parseInt($('div[data-row="'+(thisdataRow+1)+'"][data-col="'+(thisdataCol-1)+'"]').html())===newDom.numberTwo||
        parseInt($('div[data-row="'+(thisdataRow+1)+'"][data-col="'+(thisdataCol+1)+'"]').html())===newDom.numberTwo||
        parseInt($('div[data-row="'+(thisdataRow+2)+'"][data-col="'+thisdataCol+'"]').html())===newDom.numberTwo)&&
          (newDom.numberTwo===snakeDom.numberOne&&snakeDom.numberOneOpen||
            newDom.numberTwo===snakeDom.numberTwo&&snakeDom.numberTwoOpen))
        )
      {

     return true;
   } else {

     return false;
   }*/



// Move domino to begin of array in board
  Board.prototype.movToBegin=function(selectedDomino){

      switch  (this.domino[0].numberOneOpen||this.domino[0].numberTwoOpen)

            {
              case this.domino[0].numberOneOpen&&(this.domino[0].numberOne===selectedDomino.numberOne):
                    this.domino[0].numberOneOpen=false;
                    selectedDomino.numberOneOpen=false;
                    this.domino.unshift(selectedDomino);
                break;
              case this.domino[0].numberOneOpen&&(this.domino[0].numberOne===selectedDomino.numberTwo):
                    this.domino[0].numberOneOpen=false;
                    selectedDomino.numberTwoOpen=false;
                    this.domino.unshift(selectedDomino);
                break;
              case this.domino[0].numberTwoOpen&&(this.domino[0].numberTwo===selectedDomino.numberOne):
                    this.domino[0].numberTwoOpen=false;
                    selectedDomino.numberOneOpen=false;
                    this.domino.unshift(selectedDomino);
                break;
              case this.domino[0].numberTwoOpen&&(this.domino[0].numberTwo===selectedDomino.numberTwo):
                    this.domino[0].numberTwoOpen=false;
                    selectedDomino.numberTwoOpen=false;
                    this.domino.unshift(selectedDomino);
                break;
              default: {


                return false;
              }
            }
            return true;
};


//Move domino to end of array in board
Board.prototype.movToEnd=function(selectedDomino){

    var last;
    last=this.domino.length-1;

    switch (
            this.domino[last].numberOneOpen||this.domino[last].numberTwoOpen //se puede insertar otra ficha
            )
          {
            case this.domino[last].numberOneOpen&&(this.domino[last].numberOne===selectedDomino.numberOne):
              this.domino[last].numberOneOpen=false;
              selectedDomino.numberOneOpen=false;
              this.domino.push(selectedDomino);
            break;
            case this.domino[last].numberOneOpen&&(this.domino[last].numberOne===selectedDomino.numberTwo):
              this.domino[last].numberOneOpen=false;
              selectedDomino.numberTwoOpen=false;
              this.domino.push(selectedDomino);
            break;
            case this.domino[last].numberTwoOpen&&(this.domino[last].numberTwo===selectedDomino.numberOne):
              this.domino[last].numberTwoOpen=false;
              selectedDomino.numberOneOpen=false;
              this.domino.push(selectedDomino);
            break;
            case this.domino[last].numberTwoOpen&&(this.domino[last].numberTwo===selectedDomino.numberTwo):
              this.domino[last].numberTwoOpen=false;
              selectedDomino.numberTwoOpen=false;
              this.domino.push(selectedDomino);
            break;
            default:{

              return false;
            }
          }
          return true;
};



    Board.prototype.drawBoard=function(){

      for (var rowIndex = 0; rowIndex < this.rows; rowIndex++){
        for (var columnIndex = 0; columnIndex < this.columns; columnIndex++){
          $('.boardtable').append($('<div>')
            .addClass('cell-board')
            .attr('data-row', rowIndex)
            .attr('data-col', columnIndex)
          );
        }
      }
      //to retrieve x,y position of first cell of board,
      var  firstCell=$(".cell-board:first");
      gameBoard.firstCellPosition=firstCell.offset();
      console.log("CELL: ",firstCell);
      console.log("CELLPOSITION: ",gameBoard.firstCellPosition);
    };


//prueba para ejecutar desde consola
Board.prototype.impresionPrueba=function(mensaje){
  console.log(mensaje);
};

//funcions for test
    Board.prototype.insertPushDomino=function(domDomino,newDomino){

        console.log("pieza DOM de domino: ",domDomino);
        console.log("pieza domino: ",newDomino);
        var rowOne,colOne,rowTwo,colTwo;
        var numberOne,numberTwo;
        numberOneDOMelement=domDomino.getElementsByClassName('dominonumberplaced')[0];
        numberTwoDOMelement=domDomino.getElementsByClassName('dominonumberplaced')[1];
        rowNumberOne=numberOneDOMelement.getAttribute('row');
        colNumberOne=numberOneDOMelement.getAttribute('col');
        rowNumberTwo=numberTwoDOMelement.getAttribute('row');
        colNumberTwo=numberTwoDOMelement.getAttribute('col');

        newDomino.numberOnePos.row=parseInt(rowNumberOne);
        newDomino.numberOnePos.column=parseInt(colNumberOne);
        newDomino.numberTwoPos.row=parseInt(rowNumberTwo);
        newDomino.numberTwoPos.column=parseInt(colNumberTwo);

        this.domino.push(newDomino);
        console.log(this.domino);
        return true;

    };

//function for test
    Board.prototype.insertUnshiftDomino=function(domino){
      var snake;
      snake=this.domino.unshift(domino);
    };

  var gameBoard = new Board({
    rows: 20,
    columns: 20,
    dominoPlayed: [],
    firstCellPosition: {} //nuevo, ojo
  });
