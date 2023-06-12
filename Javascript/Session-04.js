// Asynchronous Javascript

//  ====================================================================================

// Callbacks

// function fetchData(url, callback) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => callback(null, data))
//     .catch((error) => callback(error, null));
// }

// fetchData("https://randomuser.me/api/", (error, data) => {
//   if (error) {
//     console.log("ERROR : ", error);
//   } else {
//     console.log("Data : ", data);
//   }
// });

//  ====================================================================================

// Promises

// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }

// fetchData("https://randomuser.me/api/")
//   .then((data) => console.log("Data : ", data))
//   .catch((error) => console.log("Error : ", error));

//  ====================================================================================

// Async-Await

// async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// async function fetchApi() {
//   try {
//     const data = await fetchData("https://randomuser.me/api/");

//     console.log("Data : ", data);
//   } catch (error) {
//     console.log("Error : ", error);
//   }
// }

//  ====================================================================================

// setTimeout

// function delayedLog(message, delay) {
//   setTimeout(() => {
//     console.log("[MESSAGE...] : ", message);
//   }, delay);
// }

// delayedLog("Delayed log after 5 seconds.", 5000);

//  ====================================================================================

// setInterval

// let counter = 0;
// function incrementCounter() {
//   counter++;
//   console.log("Counter : ", counter);
// }

// setInterval(incrementCounter, 1000);

//  ====================================================================================

// Promises and its functions

// Promise.resolve(value) :
// Promise.reject(error) :
// Promise.all(promises) :
// Promise.race(promises) :
// [resolvedData1, resolvedData2, rejectedError3, resolvedData4] = Promise.allSettled([promise1, promise2, promise3, promise4]) :

//  ====================================================================================

// MicroTask Queue

// Event Loop --> Find Visualisation

//  ====================================================================================

// Callback Hell (Pyramid of Doom)

asyncOperation1((error1, result1) => {
  if (error1) console.log(error1);
  else {
    asyncOperation2(
      (result1,
      (error2, result2) => {
        if (error2) console.log(error2);
        else {
          asyncOperation3(
            (result2,
            (error3, result3) => {
              if (error3) console.log(error3);
              else {
                // More nested callbacks
              }
            })
          );
        }
      })
    );
  }
});
