// Task#1
// Given a string x, write a function that returns true if x is palindrome. It will return false if the string is not a palindrome

// An integer is a palindrome when it reads the same backward as forward.

// For example, aba is a palindrome while abb is not.
// Example "awbbbwa" is palindrome
// Example "awbbwc" is palindrome



/**
 * @param {string} s which has to be checked for palindrome
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let j=s.length-1; //10
  for(let i=0; i<j/2; i++){
    let a=s[i];
     let b=s[j-i];
    if(a!==b){
      return false
    }
      
  }else
  return true
};