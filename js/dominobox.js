
    function DominoBox(options) {

      this.body = [
          { numberOne:0,
            numberTwo:0,
            numberOneOpen:true,
            numberTwoOpen:true,
            numberOnePos:{
              row:100,
              column:100,},
            numberTwoPos:{
              row:100,
              column:100,}
          },
          {numberOne:0,numberTwo:1,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:0,numberTwo:2,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:0,numberTwo:3,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:0,numberTwo:4,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:0,numberTwo:5,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:0,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:1,numberTwo:1,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:1,numberTwo:2,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:1,numberTwo:3,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:1,numberTwo:4,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:1,numberTwo:5,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:1,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:2,numberTwo:2,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:2,numberTwo:3,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:2,numberTwo:4,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:2,numberTwo:5,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:2,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:3,numberTwo:3,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:3,numberTwo:4,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:3,numberTwo:5,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:3,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:4,numberTwo:4,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:4,numberTwo:5,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:4,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:5,numberTwo:5,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:5,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:6,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          ];


    }


    DominoBox.prototype.print = function() {
      var pieces = [];
      for (var i = 0; i < this.body.length; i++) {
        var piece = this.body[i];
        pieces.push(piece.numberOne + " | " + piece.numberTwo);
      }
      console.log(pieces.join("   -   "));
    };


    DominoBox.prototype.shuffle = function () {
      //Fisher–Yates shuffle
        var box = this.body;
        var j, x, i;
        var boxLength = box.length;
        for ( i = boxLength - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            x = box[i];
            box[i] = box[j];
            box[j] = x;
          }
        return box;
    };


    DominoBox.prototype.getDomino= function(){
      if (this.body.length===0) return null;
      else return this.body.shift();
    };


    var dominoBox = new DominoBox();

    DominoBox.prototype.letDomino = function () {
      this.body.push(item);
    };
