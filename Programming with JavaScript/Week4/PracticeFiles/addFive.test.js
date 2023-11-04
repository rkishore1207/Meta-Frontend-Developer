const addFiveFunction = require("./addFive");

test("Returns the addition of Number with 5",()=>{
    expect(addFiveFunction(3)).toBe(8);
})