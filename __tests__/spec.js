const calcFuncs = require("../calculator")

describe("multiplyByThree function", ()=>{
    const multiplyBy3 = calcFuncs.multiplyBy3

    test("multiplyByThree exists", () => {
        expect(multiplyBy3).toBeDefined;
    })

})