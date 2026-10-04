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

// Find endSqr and record edges
function findEdges(startSqr, endSqr) {
    let queue = [startSqr]
    let visited = new Set()
    let edges = {}  // Basically an adjacency list, but with parent squares as keys 

    let found = false
    while (!found) {
        let current = queue.shift()

        let nextSquares = exploreSquares(current)
        
        // Stop search if the next move would reach endSqr
        if (nextSquares.some(sqr => sqr.toString() === endSqr.toString())) {
            edges[current] = nextSquares
            found = true
        } else {
            if (!visited.has(current.toString())) {
                // Only add new squares to find the shortest path
                visited.add(current.toString())

                // Save edges
                edges[current] = nextSquares

                // Push next squares to queue
                queue.push(...nextSquares)
            }
        }
    }
    return edges
}

// Reconstruct the path from the edges
function constructPath(endSqr, edges) {
    let path = [endSqr]
    
    let keys = Object.keys(edges).reverse()  // Reverse keys to back-track from end square to start
    let sqr = endSqr

    // The endSqr should 
    for (let key of keys) {
        for (let i = 0; i < edges[key].length; i++) {
            if (sqr.toString() === edges[key][i].toString()) {
                path.push(key.split(',').map(Number))  // JS converts keys to strings, convert back to arrays
                sqr = key
            }
        }
    }

    return path.reverse()
}

function knightMoves(startSqr, endSqr) {
    // Check input
    const inputSquares = startSqr.concat(endSqr)
    if (inputSquares.some(a => a < 0 || a > 7)) {
        throw new Error('Given square(s) out of range')
    }
    
    const edges = findEdges(startSqr, endSqr)
    const path = constructPath(endSqr, edges)

    return path
}

console.log(knightMoves([0,0],[7,7]))
module.exports = { knightMoves, exploreSquares, findEdges, constructPath };