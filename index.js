// Function to accept a callback and call it
function receivesAFunction(callback) {
    callback(); // Call the callback function
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function!");
    };
  }
  
  // Testing the functions
  
  // Test receivesAFunction
  receivesAFunction(() => console.log("Callback executed!"));
  
  // Test returnsANamedFunction
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Logs: "I am a named function!"
  
  // Test returnsAnAnonymousFunction
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc(); // Logs: "I am an anonymous function!"
  