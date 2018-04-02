
    function Board(options) {

      this.rows               = options.rows;
      this.columns            = options.columns;
      this.domino             = options.dominoPlayed;
      this.firstCellPosition  = options.firstCellPosition; //new, ojo

    }

    Board.prototype.drawFirstDomino=function(rotable,domSelected){
      console.log("ESTAMOS EN drawFirstDomino function");
      console.log("Rotable: ", rotable);
      console.log("domSelected ",domSelected); //orientacion del domino puesto


      rowOne=rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('row');
      colOne=rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('col');
      rowTwo=rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('row');
      colTwo=rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('col');

      $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]")[0].innerHTML=+domSelected.numberOne;
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

      $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]")[0].innerHTML=+domSelected.numberTwo;
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
  console.log("ESTAMOS EN drawDomino function");
  console.log("Rotable: ", rotable);
  console.log("domSelected ",domSelected); //orientacion del domino puesto

  //impresionPrueba

  rowOne=rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('row');
  colOne=rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('col');
  rowTwo=rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('row');
  colTwo=rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('col');
  extremeOne=rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('extreme');
  extremeTwo=rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('extreme');


  $(".boardtable .cell-board[data-row="+rowOne+"][data-col="+colOne+"]")[0].innerHTML=+domSelected.numberOne;
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

  $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]")[0].innerHTML=+domSelected.numberTwo;
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
  if (extremeTwo!==null) $(".boardtable .cell-board[data-row="+rowTwo+"][data-col="+colTwo+"]").attr('extreme',extremeOne);

  $(".rotableDragable").remove(); //para indicar que est


};
/*newwwww*/

Board.prototype.beginOrEndFunction=function(rotable,aspect){
  var valueRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].firstChild.data);
  var rowRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('row'));
  var colRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('col'));
  var valueRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].firstChild.data);
  var rowRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('row'));
  var colRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('col'));

  if(aspect===1){
    if (
         (
           (
             $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined&&
             $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].getAttribute('extreme')=='end'
           )||
           (
             $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
             $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0].getAttribute('extreme')=='end'
           )
          )||
          (
           (
            $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+colRotableOne+'"]')[0]!==undefined&&
            $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+colRotableOne+'"]')[0].getAttribute('extreme')=='end'
          )||
          (
            $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0]!==undefined&&
            $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0].getAttribute('extreme')=='end'
            )
         )||
         (
           (
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+colRotableOne+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+colRotableOne+'"]')[0].getAttribute('extreme')=='end'
          )||
          (
           $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+colRotableTwo+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+colRotableTwo+'"]')[0].getAttribute('extreme')=='end'
        )
      )
    ){return 'end';}
    else return 'start';
  }
};

Board.prototype.placeDominoAtStart=function(rotable,aspect){

  console.log("Estamos en boardMovOk");
  console.log("rotable (new Domino to place) and aspect are:",rotable,aspect);
  var valueRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].firstChild.data);
  var rowRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('row'));
  var colRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('col'));
  var valueRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].firstChild.data);
  var rowRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('row'));
  var colRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('col'));
  var beginOrEnd='';
  debugger;
  //Case aspect=1 verify number one and then number two of rotable
  if((aspect===1)&&($('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]').length===0)){

         if ( $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined &&
              $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne &&
              $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].getAttribute('extreme')=='start'
            ) {
                rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
                rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
                return true;
                }

         if ( $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
              $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
              $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='start'
            ) {
                rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
                rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
                return true;
              }

         if ( $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
              $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
              $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='start'
            ){
                rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
                rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
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
        return true;
    }
    if (
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        return true;
    }
    if(
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        return true;
    }

  }
  //aspect===1

  //Case aspect=1 verify number one and then number two of rotable
  if((aspect===2)&&($('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]').length===0)){
        if(
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='start'
         ){
           rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
           rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
           return true;
         }
         if
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0].getAttribute('extreme')=='start'
         ){
            rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
            rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
            return true;
          }

         if
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0].getAttribute('extreme')=='start'
          ){
              rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
              rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
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
          return true;
       }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        return true;
     }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
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
             return true;
           }
      if
         (
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='start'
         )
           {
             rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
             rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"start");
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
        return true;
      }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        return true;
      }
    if
      ( $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
        $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
        $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='start'
      ) {
          rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
          rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
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
        return true;
      }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0].getAttribute('extreme')=='start'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
        return true;
      }
    if
      ( $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo&&
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].getAttribute('extreme')=='start'
      ) {
          rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
          rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"start");
          return true;
        }
  }

  else {console.log("movimiento incorrecto");
    return false;
  }

};


Board.prototype.placeDominoAtEnd=function(rotable,aspect){

  console.log("Estamos en boardMovOk");
  console.log("rotable (new Domino to place) and aspect are:",rotable,aspect);
  var valueRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].firstChild.data);
  var rowRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('row'));
  var colRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('col'));
  var valueRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].firstChild.data);
  var rowRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('row'));
  var colRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('col'));
  var beginOrEnd='';
  debugger;
  //Case aspect=1 verify number one and then number two of rotable
  if((aspect===1)&&($('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]').length===0)){

         if ( $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined &&
              $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne &&
              $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].getAttribute('extreme')=='end'
            ) {
                rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
                rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
                return true;
                }

         if ( $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
              $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
              $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='end'
            ) {
                rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
                rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
                return true;
              }

         if ( $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
              $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
              $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].getAttribute('extreme')=='end'
            ){
                rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
                rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
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
        return true;
    }
    if (
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
        return true;
    }
    if(
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
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
           return true;
         }
         if
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0].getAttribute('extreme')=='end'
         ){
            rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
            rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
            return true;
          }

         if
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0].getAttribute('extreme')=='end'
          ){
              rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
              rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('extreme',"end");
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
          return true;
       }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
        return true;
     }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
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
        return true;
      }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
        return true;
      }
    if
      ( $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
        $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
        $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].getAttribute('extreme')=='end'
      ) {
          rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
          rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
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
        return true;
      }
    if
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0].innerText==valueRotableTwo&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+colRotableTwo+'"]')[0].getAttribute('extreme')=='end'
    ){
        rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
        rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
        return true;
      }
    if
      ( $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo&&
        $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].getAttribute('extreme')=='end'
      ) {
          rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
          rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('extreme',"end");
          return true;
        }
  }

  else {console.log("movimiento incorrecto");
    return false;
  }

};


//new Function to check graphically correct movement
/*
Board.prototype.boardMovOk=function(rotable,aspect,numberOnTest){
  console.log("Estamos en boardMovOk");
  console.log("rotable (new Domino to place) and aspect are:",rotable,aspect,numberOnTest);
  var valueRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].firstChild.data);
  var rowRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('row'));
  var colRotableOne=parseInt(rotable.getElementsByClassName('dominonumberplaced')[0].getAttribute('col'));
  var valueRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].firstChild.data);
  var rowRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('row'));
  var colRotableTwo=parseInt(rotable.getElementsByClassName('dominonumberplaced')[1].getAttribute('col'));
  var beginOrEnd='';
debugger;
  //verify mov posible to begin of snake
  if(aspect===1){
    if (($('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]').length===0)&&
    (
         ($('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne&&
           valueRotableOne==numberOnTest
         )||
         ( $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           valueRotableOne==numberOnTest
         )||
         ( $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           valueRotableOne==numberOnTest)
    )
  ){
      beginOrEnd=dominoGame.gameBoard.beginOrEndFunction(rotable,aspect);
      console.log("Movimiento correcto con numero uno");
      rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
      return beginOrEnd;
  }
  else if (($('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]').length===0)&&
  (
    $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo&&
      valueRotableTwo==numberOnTest
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      valueRotableTwo==numberOnTest
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      valueRotableTwo==numberOnTest)

  ) {
       beginOrEnd=dominoGame.gameBoard.beginOrEndFunction(rotable,aspect);
       console.log("movimiento correcto con numero dos");
       rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
       return beginOrEnd;
    }
    else {console.log("movimiento incorrecto");
      return false;
    }
 } //aspect===1

  if(aspect===2){
    if (($('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]').length===0)&&
    (
         ($('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           valueRotableOne==numberOnTest
         )||
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne&&
           valueRotableOne==numberOnTest
         )||
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne&&
           valueRotableOne==numberOnTest)
    )
  ){
      console.log("Movimiento correcto con numero uno");
      rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
      return true;
  }
  else if (($('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]').length===0)&&
  (
    $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      valueRotableTwo==numberOnTest
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo&&
      valueRotableTwo==numberOnTest
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo&&
      valueRotableTwo==numberOnTest)

  ) {
       console.log("movimiento correcto con numero dos");
       rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
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
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne&&
           valueRotableOne==numberOnTest
         )||
         ( $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne-1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           valueRotableOne==numberOnTest
         )||
         ( $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           valueRotableOne==numberOnTest)
    )
  ){
      console.log("Movimiento correcto con numero uno");
      rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
      return true;
  }
  else if (($('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]').length===0)&&
  (
    $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo&&
      valueRotableTwo==numberOnTest
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      valueRotableTwo==numberOnTest
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      valueRotableTwo==numberOnTest)

  ) {
       console.log("movimiento correcto con numero dos");
       rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
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
           $('.occupied[data-row="'+rowRotableOne+'"][data-col="'+(colRotableOne+1)+'"]')[0].innerText==valueRotableOne&&
           valueRotableOne==numberOnTest
         )||
         ( $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne+1)+'"][data-col="'+(colRotableOne)+'"]')[0].innerText==valueRotableOne&&
           valueRotableOne==numberOnTest
         )||
         ( $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0]!==undefined&&
           $('.occupied[data-row="'+(rowRotableOne)+'"][data-col="'+(colRotableOne-1)+'"]')[0].innerText==valueRotableOne&&
           valueRotableOne==numberOnTest)
    )
  ){
      console.log("Movimiento correcto con numero uno");
      rotable.getElementsByClassName('dominonumberplaced')[0].setAttribute('open',false);
      return true;
  }
  else if (($('.occupied[data-row="'+(rowRotableTwo-1)+'"][data-col="'+(colRotableTwo)+'"]').length===0)&&
  (
    $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+rowRotableTwo+'"][data-col="'+(colRotableTwo-1)+'"]')[0].innerText==valueRotableTwo&&
      valueRotableTwo==numberOnTest
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo+1)+'"][data-col="'+(colRotableTwo)+'"]')[0].innerText==valueRotableTwo&&
      valueRotableTwo==numberOnTest
    )||
    ( $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0]!==undefined&&
      $('.occupied[data-row="'+(rowRotableTwo)+'"][data-col="'+(colRotableTwo+1)+'"]')[0].innerText==valueRotableTwo&&
      valueRotableTwo==numberOnTest)

  ) {
       console.log("movimiento correcto con numero dos");
       rotable.getElementsByClassName('dominonumberplaced')[1].setAttribute('open',false);
       return true;
    }
    else {console.log("movimiento incorrecto");
      return false;
    }
  }



};

*/
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



// Move domino to begin of array in board  OLD FUNCTI=N
/*  Board.prototype.movToBegin=function(selectedDomino){


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
};*///Move domino to begin of array in board  OLD FUNCTI=N

Board.prototype.movToBegin=function(rotable,newDomino){
  console.log("in movToBegin");
  console.log(rotable,newDomino);


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
  console.log(this.domino);
  return true;

};

Board.prototype.movToEnd=function(rotable,newDomino){
  console.log("in movToEnd");
  console.log(rotable,newDomino);
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
  console.log(this.domino);
  return true;

};


//OLD Move domino to end of array in board
/*Board.prototype.movToEnd=function(selectedDomino){

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
};*/



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
    Board.prototype.insertFirstDomino=function(rotable,newDomino){

        console.log("pieza DOM de domino: ",rotable);
        console.log("pieza domino: ",newDomino);
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
