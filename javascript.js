const row = 3;
const col = 3;
let board = [];
for(let i=0; i<row; i++){
    board.push([])
    for(let j=0; j<col; j++){
        board[i].push(j+1)
    }
    console.log(board[i])
}

