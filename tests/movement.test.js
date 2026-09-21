const knightMoves = require("../src/index.js")

test('Input squares range restrictions', () => {
    expect(() => knightMoves([-1, -2], [0, 4])).toThrow(Error)
    expect(() => knightMoves([0, 1], [8, 4])).toThrow(Error)
})