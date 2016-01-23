//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name){
  	if(name === "Tyler"){
  		return true;
  	}
  	else {
  		return false;
  	}
  }

 isTyler(name);

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName(userName) {
  	userName = prompt("Please enter your name");
  	return userName;
  }

	getName("Nishu");

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome(userName) {
  	return "Welcome, " + getName(userName);
  }

  welcome("Nishu");

//Next problem




//What is the difference between arguments and parameters?

  An argument is something passed to a function when its being called while a parameter is something
  given to the function upon declaration or definition.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  Falsey Values: NaN, undefined, null, 0, false, ""
  You can check if something is falsey using an if statement combined with typeof. For example,
  if (typeof myVar == "undefined")



//Next Problem



//Create a function called myName that returns your name

  function myName(){
  	return "Nishu";
  }
  


//Now save the function definition of myName into a new variable called newMyName

 var newMyName = myName();
 alert(newMyName);

//Now alert the result of invoking newMyName



//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn() {
  	return (function(){
  		return "Nishu";
  	});
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  innerFn = outerFn();
  innerFn();

//Now invoke innerFn.
