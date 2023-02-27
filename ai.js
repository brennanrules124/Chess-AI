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