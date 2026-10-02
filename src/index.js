// Return a list of all next possible squares / adjacency list
function exploreSquares(square) {
    // Movement encoding to produce all unique moves
    const movement = [-2, -1, 2, 1, 2, -1, -2, 1]
    
    let possibleSquares = []
    let i = 0
    while (i < 8) {
        let dX = square[0] + movement[i]
        let dY = square[1] + movement[7 - i]
        let newSquare = [dX, dY]

        // Ensure that newSquare stays within the board
        if (!newSquare.some(coord => coord < 0 || coord > 7)) {
            possibleSquares.push(newSquare)
        }
        i++
    }
    return possibleSquares
}

function knightMoves(startSqr, endSqr) {
    // Check input
    const inputSquares = startSqr.concat(endSqr)
    if (inputSquares.some(a => a < 0 || a > 7)) {
        throw new Error('Given square(s) out of range')
    }

    // Search for the ending square
    let queue = [startSqr]
    
    let visited = new Set()
    visited.add(startSqr.toString())

    let parents = {}

    while (queue.length > 0) {
        let current = queue.shift()

        // Have we found the endSqr?
        if (current.toString() === endSqr.toString()) {
            break
        }

        let nextSquares = exploreSquares(current)
        
        for (let next of nextSquares) {
            let key = next.toString()

            // We haven't encountered this square before
            if (!visited.has(key)) {
                visited.add(key)

                // Remember how we got here
                parents[key] = current

                // Put it in the BFS queue
                queue.push(next)
            }
        }
    }
    
    // Reconstruct the path
    let path = []
    let pathSqr = endSqr

    while (pathSqr.toString() !== startSqr.toString()) {
        path.push(pathSqr)
        pathSqr = parents[pathSqr.toString()]
    }

    path.push(startSqr)
    path.reverse()

    return path
}

console.log(knightMoves([0,0],[7,7]))
module.exports = { knightMoves, exploreSquares };