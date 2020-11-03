//EX 1
function makePromiseResolveWith3(){
    return new Promise((resolve) => resolve(3))
  }
  
  //EX 2
  function makePromiseRejectWithBoo(){
    return new Promise((res, rej) => {
        rej("Boo");
    })
}
  
  // EX 3 
    @param {boolean} itShouldResolve - Whether the promise should resolve or reject
    @returns {Promise<undefined, undefined>}
  
  function makePromiseWithConstructor(itShouldResolve){
    return new Promise((resolve, reject) => {
        if (itShouldResolve){ resolve();}
        else{ reject();}
    });
}
  
  // EX 4
   
    @param {any} value 
    @param {number} delayInMs 
    @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
  
  function makeDelayPromise(value, delayInMs){
    return new Promise((resolve) => {setTimeout(() => {resolve(value)}, delayInMs)})
  }
  
//   PART 2
  
   // EX 1
    @param {Promise} promise
    @param {thunk} action
    
  function waitForPromise(promise, action){
    promise.then(action);
  }
  //
   EX 2
  
  function consumePromise(promise, consumer, handler){
    promise.then(response => consumer(handler(response)));
  }
 
  module.exports = {
   makePromiseResolveWith3,
    makePromiseRejectWithBoo,
    makePromiseWithConstructor,
    makeDelayPromise,
    waitForPromise,
    consumePromise,
  };
