// defining a function that returns an object

var objFn = function(){
  return { name: 'jim'};
};

console.log(objFn); // [function]
console.log(objFn()); // { name: 'jim'}

// immediately invoking an anonymous function,
// without saving it to a variable
// we wrap the function expression in () because js interpreters 
// see any lin e beginning with the keyword function to be a function
// expression, which would be short hand for a named function  ( see crockford page 100)
(function(){
  console.log('hi');
})(); // this invokes the function immediately

// the above is also called an imediately invoked funciton expression (iife)

// using an iife to return an object
var obj = (function(){
  return {name: 'john'};
})();

console.log(obj); // { name: 'john' }

// closure variables using function scope

obj = (function(){ // this is a new scope
  var fruit = 'banana';
  console.log(fruit); // 'banana'  
  return { primate: 'monkey'};
})();

console.log(obj); // { primate: 'monkey'};

try{
  console.log(fruit); // undefined
}
catch(e){
console.log(e);
}

console.log(obj.fruit); // undefined

// put it all together for the revealing module pattern which
// returns an object with references to internal closured properties

var module = (function(){
  // private closured variables
  var count = 0;
  var increment = function(){
    count++;
  };

  var report = function(){
    console.log(['count is currently:', count].join(' '));
  };

  // return public interface
  return { inc: increment, report : report };
})(); // finish function expression and invoke it, setting module var

console.log(module.count); // undefined, wasn't in return object literal

try{
  console.log(count); // undefined, was closured inside the above iife
}
catch(e){ console.log(e); }

module.report(); // count is currently 0;
module.inc(); // modifies private closured variable, even if we can't
module.report(); // count is currently 1;


