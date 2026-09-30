// Board is 8x8 chessboard > 64 squares
// Max no. of moves/edges = 8, min = 2

// Each square on the board is a node (or vertex).
// A knight’s valid moves from any square represent the edges (or connections) between the vertices.

function exploreMoves(vertex) {
    const maxMoves = 8
    const movement = [-2, -1, 2, 1, 2, -1, -2, 1]
    
    let possibleMoves = []
    let i = 0
    while (i < maxMoves) {
        let dX = vertex[0] + movement[i]
        let dY = vertex[1] + movement[(maxMoves - 1) - i]
        let move = [dX, dY]

        // Ensure that the move stays within the board
        if (!move.some(coord => coord < 0 || coord > 7)) {
            possibleMoves.push(move)
        }
        i++
    }
    return possibleMoves
}

function knightMoves(startVert, endVert) {
    // Check input
    inputSquares = startVert.concat(endVert)
    if (inputSquares.some(a => a < 0 || a > 7)) {
        throw new Error('Given square(s) out of range')
    }
};

module.exports = { knightMoves, exploreMoves };