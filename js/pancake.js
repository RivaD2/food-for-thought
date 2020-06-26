// var greeting;
// var signup = confirm('Sign up for monthly recipes') 
// if (signup === true) {
//     greeting = 'Click here to sign up!'
// }else if (signup === false) {
//     greeting = 'No pancakes for you!'
 // }


var hasAnswered = false
function greeting(signupQuestion) {
    var answer = prompt(signupQuestion)
    if (answer === "yes") {
        hasAnswered = true 
      var adopt = prompt("Do you want yummy pancakes");
        if (adopt === "yes") {
            alert("Yay! Bring your hoisen sauce");
        } else if(adopt === "no") {
            alert("no pancakes for you");
        } else {
            alert ("Look, are you hungry or not, yes or no?")
        }
    } else if (answer === "no") {
        hasAnswered = true
    }
}
 while(hasAnswered === false ) {        
 greeting("Will you sign up for monthly recipes?")
 }


var response = ""
var count = prompt("How many pancakes will you eat");
for (let i = 0; i <  parseInt(count); i++) {
response = response + "pancake! "
// add to html
}
confirm(response);
