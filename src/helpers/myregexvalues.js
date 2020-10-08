// 
//   myregexvalues.js
// 
//   här finns mina custom funktioner som kan användas av vuelidate eller något annat
// 
//  '^[a-zA-ZåäöüÄÖÜß].*$'
const patternRegexåäö ='^[a-zA-ZåäöüÄÖÜß]*$';


// /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
// /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
// /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
//  /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
// const phoneno = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;
const phoneno = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;

// funktion som kan användas av vuelidate för att kontrollera att det bara skrivs text
function isValidalphaRegexåäö(value) {
// console.log(value)
  if (value.match(patternRegexåäö)) {
    return true;
  } else {
    return false;
  }
}

// funktion som kan användas av vuelidate för data "phoneNumber"
 function validPhonenumber(value) {
  if (value.match(phoneno)) {
    return true;
  } else {
    return false;
  }
}

// här exporterar man de funktioner som finns i denna modul.
export { isValidalphaRegexåäö, validPhonenumber };