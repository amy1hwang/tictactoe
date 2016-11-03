//BL
function Player(name, piece) {
  this.name = name
  this.piece = piece
}

function Space(space){
  this.space = space;
  this.mark = "";
}

function Board(space) {
  this.gameBoard = [];
}

function Game(){
  this.turn = 1;
}

var newBoard = new Board();

//UI
$(document).ready(function() {



  $("form#players").submit(function(event) {
    var xName = $("#player-x").val();
    var oName = $("#player-o").val();
    var xPlayer = new Player(xName, "X");
    var oPlayer = new Player(oName, "O");

    $(".col-md-4").click(function() {
      numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
      numbers.forEach(function(number) {
        var grid = parseInt($("#" + number).attr('data-myValue'));
        var newSpace = new Space(grid);
        newBoard.gameBoard.push(newSpace);
      });
      console.log(newBoard);
    })


    event.preventDefault();
  });

});
