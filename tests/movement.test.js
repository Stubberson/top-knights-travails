const { knightMoves,
        exploreSquares,
        findEdges,
        constructPath } = require("../src/index.js")

test('Restrict input squares correctly', () => {
    expect(() => knightMoves([-1, -2], [0, 4])).toThrow(Error)
    expect(() => knightMoves([0, 1], [8, 4])).toThrow(Error)
})

test('Find correct possible moves', () => {
    expect(exploreSquares([0, 0])).toEqual(expect.arrayContaining([[1, 2], [2, 1]]))  // Order doesn't matter
    expect(exploreSquares([0, 0])).toHaveLength(2)  // Exact number of possible moves, no more, no less
    expect(exploreSquares([1, 2])).toEqual(expect.arrayContaining([[0, 0], [2, 0], [3, 1], [3, 3], [2, 4], [0, 4]]))
    expect(exploreSquares([1, 2])).toHaveLength(6)
    expect(exploreSquares([3, 3])).toEqual(expect.arrayContaining([[2, 1], [1, 2], [4, 1], [5, 2], [5, 4], [4, 5], [2, 5], [1, 4]]))
    expect(exploreSquares([3, 3])).toHaveLength(8)
})

test('Find correct edges', () => {
    expect(findEdges([0,0], [2,1])).toEqual({'0,0': [[1,2], [2,1]]})
    expect(Object.keys(findEdges([0,0], [4,2]))).toHaveLength(3)
})

test('Construct a correct path', () => {
    expect(constructPath([2,1], findEdges([0,0], [2,1]))).toEqual([[0, 0], [2,1]])
})