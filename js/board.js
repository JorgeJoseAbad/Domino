
    function Board(options) {

      this.rows               = options.rows;
      this.columns            = options.columns;
      this.domino             = options.dominoPlayed;
      this.firstCellPosition  = options.firstCellPosition;

    }

    Board.prototype.drawFirstDomino=function(rotable,domSelected){

      rowOne=rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('row');
      colOne=rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('col');
      rowTwo=rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('row');
      colTwo=rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('col');
      
      $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]")[0].innerHTML = domSelected.numberOne;
      $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]").attr('dominonumber',1);
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

      $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]")[0].innerHTML = domSelected.numberTwo;
      $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").attr('dominonumber',2);
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

      $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]").attr('extreme','start');
      $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").attr('extreme','end');
      $(".rotableDragable").remove(); //para indicar que est

    };


//New function newGraphicOk to check graphically correct movement
//with consideration of position and orientation of domino
Board.prototype.drawDomino=function(rotable,domSelected){

  rowOne=rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('row');
  colOne=rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('col');
  rowTwo=rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('row');
  colTwo=rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('col');
  extremeOne=rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('extreme');
  extremeTwo=rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('extreme');


  $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]")[0].innerHTML = domSelected.numberOne;
  $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]").attr('dominonumber',1);
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

  $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]")[0].innerHTML = domSelected.numberTwo;
  $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").attr('dominonumber',2);
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

  if (dominoGame.gameBoard.domino[0]===undefined && domSelected.numberOne===domSelected.numberTwo){
    $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]").attr('extreme','start');
    $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").attr('extreme','end');
  }

  if (extremeOne!==null) $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]").attr('extreme',extremeOne);
  if (extremeTwo!==null) $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").attr('extreme',extremeTwo);

  $(".rotableDragable").remove(); //para indicar que est

};



Board.prototype.placeDominoAtStart=function(rotable,aspect){

  var valueRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].firstChild.data);
  var rowRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('row'));
  var colRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('col'));
  var valueRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].firstChild.data);
  var rowRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('row'));
  var colRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('col'));


  //Case aspect=1 verify number one and then number two of rotable
  if((aspect===1)&&($('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]').length===0)){

         if ( $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined &&
              $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne &&
              $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].getAttribute('extreme')=='start'
            ) {
                rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
                rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
                $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]').attr('extreme','previousStart');
                return true;
                }

         if ( $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
              $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
              $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='start'
            ) {
                rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
                rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
                $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]').attr('extreme','previousStart');
                return true;
              }

         if ( $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
              $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
              $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='start'
            ){
                rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
                rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
                $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]').attr('extreme','previousStart');
                return true;
              }
    }

  if ((aspect===1)&&($('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]').length===0)){
    if (
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]').attr('extreme','previousStart');
        return true;
    }
    if (
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]').attr('extreme','previousStart');
        return true;
    }
    if(
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]').attr('extreme','previousStart');
        return true;
    }

  }
  //aspect===1

  //Case aspect=2 verify number one and then number two of rotable
  if((aspect===2)&&($('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]').length===0)){
        if(
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='start'
         ){
           rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
           rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]').attr('extreme','previousStart');
           return true;
         }
         if
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0].getAttribute('extreme')=='start'
         ){
            rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
            rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
            $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]').attr('extreme','previousStart');
            return true;
          }

         if
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0].getAttribute('extreme')=='start'
          ){
              rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
              rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
              $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]').attr('extreme','previousStart');
              return true;
          }
        }

  if ((aspect===2)&&($('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]').length===0)){
    if(
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='start'
      ) {
          rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
          rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
          $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]').attr('extreme','previousStart');
          return true;
       }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]').attr('extreme','previousStart');
        return true;
     }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]').attr('extreme','previousStart');
        return true;
       }
     }
  //aspect 2

  //aspect 3
  if((aspect===3)&&($('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]').length===0)){
      if
         (
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0].getAttribute('extreme')=='start'
         ) {
             rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
             rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
             $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]').attr('extreme','previousStart');
             return true;
           }
      if
         (
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='start'
         ) {
             rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
             rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
             $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]').attr('extreme','previousStart');
             return true;
           }
      if
         (
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='start'
         ) {
             rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
             rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
             $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]').attr('extreme','previousStart');
             return true;
           }
        }


  if ((aspect===3)&&($('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]').length===0)){
    if (
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]').attr('extreme','previousStart');
        return true;
      }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]').attr('extreme','previousStart');
        return true;
      }
    if
      ( $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
        $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
        $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='start'
      ) {
          rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
          rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
          $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]').attr('extreme','previousStart');
          return true;
        }
      }
  //end aspect 3

  //aspect 4
  if((aspect===4)&&($('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+colRotableOne+'"]').length===0)){
    if
       (
         $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0]!==undefined&&
         $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne&&
         $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0].getAttribute('extreme')=='start'
       ) {
           rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
           rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]').attr('extreme','previousStart');
           return true;
         }
    if
       (
         $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
         $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
         $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='start'
       )
       {
           rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
           rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]').attr('extreme','previousStart');
           return true;
         }
    if
       (
         $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined&&
         $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne&&
         $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].getAttribute('extreme')=='start'
       )
         {
           rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
           rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]').attr('extreme','previousStart');
           return true;
         }
  }

  if((aspect===4)&&($('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+colRotableOne+'"]').length===0)){
    if (
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]').attr('extreme','previousStart');
        return true;
      }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]').attr('extreme','previousStart');
        return true;
      }
    if
      ( $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo&&
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].getAttribute('extreme')=='start'
      ) {
          rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
          rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
          $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]').attr('extreme','previousStart');
          return true;
        }
  }

  else {
    document.getElementById("gamestate").innerHTML = "movimiento incorrecto"
    return false;
  }

};


Board.prototype.placeDominoAtEnd=function(rotable,aspect){
  var valueRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].firstChild.data);
  var rowRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('row'));
  var colRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('col'));
  var valueRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].firstChild.data);
  var rowRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('row'));
  var colRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('col'));


  //Case aspect=1 verify number one and then number two of rotable
  if((aspect===1)&&($('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]').length===0)){

         if ( $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined &&
              $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne &&
              $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].getAttribute('extreme')=='end'
            ) {
                rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
                rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
                $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]').attr('extreme','previousEnd');
                return true;
                }

         if ( $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
              $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
              $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='end'
            ) {
                rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
                rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
                $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]').attr('extreme','previousEnd');
                return true;
              }

         if ( $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
              $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
              $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='end'
            ){
                rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
                rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
                $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]').attr('extreme','previousEnd');
                return true;
              }
    }

  if ((aspect===1)&&($('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]').length===0)){
    if (
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]').attr('extreme','previousStart');
        return true;
    }
    if (
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
        $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]').attr('extreme','previousEnd');
        return true;
    }
    if(
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
        $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]').attr('extreme','previousEnd');
        return true;
    }

  }
  //aspect===1

  //Case aspect=1 verify number one and then number two of rotable
  if((aspect===2)&&($('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]').length===0)){
        if(
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='end'
         ){
           rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
           rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]').attr('extreme','previousEnd');
           return true;
         }
         if
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0].getAttribute('extreme')=='end'
         ){
            rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
            rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
            $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]').attr('extreme','previousEnd');
            return true;
          }

         if
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0].getAttribute('extreme')=='end'
          ){
              rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
              rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
              $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]').attr('extreme','previousEnd');
              return true;
          }
        }

  if ((aspect===2)&&($('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]').length===0)){
    if(
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='end'
      ) {
          rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
          rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
          $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]').attr('extreme','previousEnd');
          return true;
       }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
        $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]').attr('extreme','previousEnd');
        return true;
     }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
        $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]').attr('extreme','previousEnd');
        return true;
       }
     }
  //aspect 2

   //aspect 3
  if((aspect===3)&&($('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]').length===0)){
      if
         (
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0].getAttribute('extreme')=='end'
         ) {
             rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
             rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
             $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]').attr('extreme','previousEnd');
             return true;
           }
      if
         (
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='end'
         )
           {
             rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
             rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
             $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]').attr('extreme','previousEnd');
             return true;
           }
      if
         (
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='end'
         )
           {
             rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
             rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
             $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]').attr('extreme','previousEnd');
             return true;
           }
        }


  if ((aspect===3)&&($('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]').length===0)){
    if (
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]').attr('extreme','previousEnd');
        return true;
      }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
        $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]').attr('extreme','previousEnd');
        return true;
      }
    if
      ( $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
        $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
        $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='end'
      ) {
          rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
          rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
          $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]').attr('extreme','previousEnd');
          return true;
        }
      }
  //end aspect 3

  //aspect 4
  if((aspect===4)&&($('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+colRotableOne+'"]').length===0)){
    if
       (
         $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0]!==undefined&&
         $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne&&
         $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0].getAttribute('extreme')=='end'
       ) {
           rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
           rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]').attr('extreme','previousEnd');
           return true;
         }
    if
       (
         $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
         $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
         $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='end'
       )
       {
           rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
           rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]').attr('extreme','previousEnd');
           return true;
         }
    if
       (
         $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined&&
         $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne&&
         $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].getAttribute('extreme')=='end'
       )
         {
           rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
           rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]').attr('extreme','previousEnd');
           return true;
         }
  }

  if((aspect===4)&&($('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+colRotableOne+'"]').length===0)){
    if (
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]').attr('extreme','previousEnd');
        return true;
      }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
        $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]').attr('extreme','previousEnd');
        return true;
      }
    if
      ( $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo&&
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].getAttribute('extreme')=='end'
      ) {
          rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
          rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
          $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]').attr('extreme','previousEnd');
          return true;
        }
  }

  else {
    document.getElementById("gamestate").innerHTML = "Wrong move..."
    return false;
  }

};


Board.prototype.movToBegin=function(rotable,newDomino){

  if (this.domino.length===1) this.domino[0].numberOneOpen=false;
  else if (this.domino[0].numberOneOpen===false) this.domino[0].numberTwoOpen=false;
  else if (this.domino[0].numberTwoOpen===false) this.domino[0].numberOneOpen=false;

  numberOneDOMelement=rotable.getElementsByClassName('dominonumberplaced')[0];
  numberTwoDOMelement=rotable.getElementsByClassName('dominonumberplaced')[1];
  rowNumberOne=numberOneDOMelement.getAttribute('row');
  colNumberOne=numberOneDOMelement.getAttribute('col');
  rowNumberTwo=numberTwoDOMelement.getAttribute('row');
  colNumberTwo=numberTwoDOMelement.getAttribute('col');

  newDomino.numberOnePos.row=parseInt(rowNumberOne);
  newDomino.numberOnePos.column=parseInt(colNumberOne);
  newDomino.numberOneOpen=(numberOneDOMelement.getAttribute('open')!=='false');
  newDomino.numberTwoPos.row=parseInt(rowNumberTwo);
  newDomino.numberTwoPos.column=parseInt(colNumberTwo);
  newDomino.numberTwoOpen=(numberTwoDOMelement.getAttribute('open')!=='false');

  this.domino.unshift(newDomino);
  return true;

};

Board.prototype.movToEnd=function(rotable,newDomino){

  var long=this.domino.length;

  if (this.domino.length===1) this.domino[0].numberTwoOpen=false;
  else if (this.domino[long-1].numberOneOpen===false) this.domino[long-1].numberTwoOpen=false;
  else if (this.domino[long-1].numberTwoOpen===false) this.domino[long-1].numberOneOpen=false;

  numberOneDOMelement=rotable.getElementsByClassName('dominonumberplaced')[0];
  numberTwoDOMelement=rotable.getElementsByClassName('dominonumberplaced')[1];
  rowNumberOne=numberOneDOMelement.getAttribute('row');
  colNumberOne=numberOneDOMelement.getAttribute('col');
  rowNumberTwo=numberTwoDOMelement.getAttribute('row');
  colNumberTwo=numberTwoDOMelement.getAttribute('col');

  newDomino.numberOnePos.row=parseInt(rowNumberOne);
  newDomino.numberOnePos.column=parseInt(colNumberOne);
  newDomino.numberOneOpen=(numberOneDOMelement.getAttribute('open')!=='false');
  newDomino.numberTwoPos.row=parseInt(rowNumberTwo);
  newDomino.numberTwoPos.column=parseInt(colNumberTwo);
  newDomino.numberTwoOpen=(numberTwoDOMelement.getAttribute('open')!=='false');

  this.domino.push(newDomino);
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

    };


//funcions for test
Board.prototype.insertFirstDomino=function(rotable,newDomino){

  var rowOne,colOne,rowTwo,colTwo;
  var numberOne,numberTwo;
  numberOneDOMelement=rotable.getElementsByClassName('dominonumberplaced')[0];
  numberTwoDOMelement=rotable.getElementsByClassName('dominonumberplaced')[1];
  rowNumberOne=numberOneDOMelement.getAttribute('row');
  colNumberOne=numberOneDOMelement.getAttribute('col');
  rowNumberTwo=numberTwoDOMelement.getAttribute('row');
  colNumberTwo=numberTwoDOMelement.getAttribute('col');

  newDomino.numberOnePos.row=parseInt(rowNumberOne);
  newDomino.numberOnePos.column=parseInt(colNumberOne);
  newDomino.numberTwoPos.row=parseInt(rowNumberTwo);
  newDomino.numberTwoPos.column=parseInt(colNumberTwo);

  this.domino.push(newDomino);
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
