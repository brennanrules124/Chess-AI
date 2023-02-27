/*
Piece Index
0 = Blank
1 = Pawn
2 = Rook
3 = Knight
4 = Bishop
5 = Queen
6 = King
*/

var board = [64];
var backRowOrder = [2, 3, 4, 5, 6, 4, 3, 2]; //For white; needs to be reversed for black

for(var i = 0; i < board.length; i++)
{
    board[i] = 0;
}

function SpaceToCoordinate(space){
    var horizontal;
    var vertical;

    horizontal = Math.floor(space / 8);
    vertical = space % 8;

    return horizontal, vertical;
}