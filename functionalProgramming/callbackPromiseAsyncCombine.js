  //callback only-----------------
  const callbackBasedFn = callback => setTimeout(() => callback("Hello"), 200);
  const callbackFn = value => console.log(`callback only: ${value+value}`);

  callbackBasedFn(callbackFn);
  //Promise only-----------------------
  const numberProviderPromise = () => new Promise(resolve =>
      setTimeout(() => resolve(10), 100));

  numberProviderPromise().then(value => console.log(`promise only:${value + value}`));
  //async&await only--------------------
  const numberProviderAsync = async () =>
      await new Promise(resolve => setTimeout(() => resolve(15), 300));

  numberProviderAsync().then(value => console.log(`async&await only:${value + value}`));
  //callbackPromiseAsyncAwait---------------
  const numberProviderCallback = (callback) =>
      setTimeout(() => callback(1), 300);

  const numberProviderPromise1 = () => new Promise(resolve =>
      numberProviderCallback(resolve));

  const numberProviderAsync1 = async () =>
      await numberProviderPromise1()

  const combinerAsync = async () => {
      return new Promise(resolve => {
          numberProviderCallback(async number => {
              const number1 = await number,
                  number2 = await numberProviderPromise1(),
                  number3 = await numberProviderAsync1();
              resolve(number1 + number2 + number3);
              console.log(`callbackPromiseAsyncAwait:${number1+number2+number3}`);
          });
      });
  }

  combinerAsync();
  console.log("last combine of code");


//   module.exports = {
//       combinerAsync
//   }
  //-----------------------------------------------

//   const numberProviderCallback1 = function (callback) {
//       setTimeout(() => callback(2), 950);
//   };

//   const numberProviderPromise2 = function () {
//       return new Promise(resolve => resolve(3));
//   };

//   const numberProviderAsync2 = async function () {
//       return await 6;
//   }

//   const sum = function () {
//       return new Promise(resolve => {
//           numberProviderCallback1(async number => {
//               const number1 = await number;
//               const number2 = await numberProviderPromise2();
//               const number3 = await numberProviderAsync2();
//               resolve(number1 + number2 + number3);
//               console.log(`last line of code: ${number1 + number2 + number3}`);
//           });
//       });
//   }
//   sum()


//   module.exports = {
//       sum
//   }

//   //----------------------------------------

//   const add = (x, y) => {
//       console.log(x + y);

//   }
//   const callbackFn1 = (x, callback) => {
//       setTimeout(() => callback(x, 7), 1000)
//   }
//   callbackFn1(1, add);


//   const promiseFn = () => {
//       return new Promise((resolve => {
//           setTimeout(() => {
//               resolve(callbackFn1(2, add), callbackFn1(3, add), callbackFn1(4, add))
//           }, 500)
//       }));
//   };
//   promiseFn()

//   const asyncFn = async () => await
//   setTimeout(() => {
//       return new Promise(resolve => {
//           resolve((add(5, 7)))
//       }, 3000)
//   });

//   asyncFn();

//   //------------------------------------------
//   const addNumber = number => new Promise(resolve => resolve(number));
//   addNumber(13).then(v => console.log(v))