const {
      combinerAsync
} = require("./callbackPromiseAsyncCombine.js");

describe("calculat numbers with combine callback,promise and async;)", () => {
      it("should add a 1", async () => {

            const sum = await combinerAsync();
            expect(sum).toBe(3);
      })
})

//-------------------------

// const {sum} = require("./callbackPromiseAsyncCombine.js");

// describe("calculat numbers with combine callback,promise and async;)", () => {
//       it("should add a 1", async() => {

// const sum1 = await sum();
// expect(sum1).toBe(11);
//       })
// })
//-------------------------------------------------