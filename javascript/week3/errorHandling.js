//error handling is great to allow us to handles errors in data provided to us through user input and API calls
//try, catch, throw, and finally are eroor handling syntaxes for handling data

//try-catch-finally catches errors in data based on a condition, and will throw the error
try {
    console.log('start of try runs'); //start of try runs
    nucamp;
    console.log('Emd of try, error never reached'); //skipped due to error
} catch (err) {
    console.log(`Error name ${err.name} `); //error has occured ReferenceError; nucamp is not define
    console.log(`Error name ${err.message} `); 
} finally {
    console.log('This is the finally block'); //always runs
}
//when errors are caught, JS creates an error object with two primary properties. name and message

//Try-Catch only works with runnable code, or runtime errors, so syntax errors prevent it from running
//syntax is parse-time errors

//practice use case for api calls that may not carry a name with a user data point
try {
    let user = '{"age": 38}';
    let userObj = JSON.parse(user);
    if (!userObj.name) throw new SyntaxError('Incomplete data, no name')
    console.log(userObj.name);
} catch (e){
    console.log(`jsonErr ${e.name} ${e.message}`);
}

// Task 1: Validate Username
function validateUsername(username) {
    if (username.length < 5) throw new RangeError('Username must contain at least 5 characters');
  }
  
  // Task 2: Validate Password
  function validatePassword(password) {
    if (password.length < 8) throw new RangeError('Password must contain at least 8 characters with at least one number');
    if (!/\d/.test(password)) throw new EvalError('Passwords must contain at least 1 number');
  }
  
  // Task 3: Validate Email
  function validateEmail(email) {
    if (!email.includes('@')) throw new EvalError('email does not include @, please provide vaild email')
    // Write code to check if the email contains an '@' symbol.
    // If the email is not valid, throw an error with a message.
  }
  
  // Task 4: Validate User
  function validateUser(user) {
    let userVal = false;
      try {
        validateUsername(user.username);
        validatePassword(user.password);
        validateEmail(user.email);
        return userVal = true;
      } catch(error) {
        console.log(`${error.message}`)
        return userVal = false
    } return userVal
    // Use the above validation functions to validate the user's username, password, and email.
    // If any validation fails, log the error and return false. Otherwise, return true.
  }
  
  