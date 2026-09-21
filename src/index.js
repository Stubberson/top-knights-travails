// Board is 8x8 chessboard > 64 squares
// Max no. of moves/edges = 8, min = 2

// Each square on the board is a node (or vertex).
// A knight’s valid moves from any square represent the edges (or connections) between the vertices.

// Basically, the movement of the knight
function createAdjacencyList(startVert, endVert) {
    // Let's say start = [0,0], end = [1, 1]
    startEdges = [[1, 2], [2, 1]]
    endEdges = [[2, 3], [3, 2], [0, 3], [3, 0]]
}

function knightMoves(startVert, endVert) {
    // Check input
    inputSquares = startVert.concat(endVert)
    if (inputSquares.some(a => a < 0 || a > 7)) {
        throw new Error('Given square(s) out of range')
    }


};

module.exports = knightMoves