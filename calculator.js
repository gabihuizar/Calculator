$(document).ready(function(){
  var num1 = [];
  var num2 = [];
  var operator = null;
  var total;
  var solved = false;
  
  /*when clicking a number*/
  $(".num").click(function(){
    var digit = this.innerHTML;
    if(!operator){ /*if the operator is not there yet*/
      num1.push(digit); /* add the digit to the num1 array */
      $("#screen").html(num1.join('')); /*show the num1 array to screen */
    }
    else { /* if operator has been chosen*/
      num2.push(digit); /*add digits to the num2 array */     $("#screen").html(num1.join('')+operator+num2.join(''));/*show num1, operator, and num2 to screen */
   }   
  });
   $(".op").click(function(){ /*when operator is clicked*/
      operator = this.innerHTML; /*get it's value and set to operator*/
      $("#screen").html(num1.join('')+operator);/*show first number and operator on screen*/
    });
   
  $("#equals").click(function(){ /*when you click equals sign*/
    if(num1 && num2 && operator) { /*if all the components are there*/
    var n1 = +(num1.join(''));/*set joined num1 array to integer to a n1 variable*/
    var n2 = +(num2.join(''));/*set joined num2 array to integer to a n2 variable*/
    switch(operator) { /*switch statement for operator*/
      case "+": /*if it's a plus, add two numbers*/
        total = n1+n2;
        break;
      case "-": /*if it's a minus, subtract them*/
        total = n1-n2;
        break;
      case "*": /*if it's an asterisk, multiply*/
        total = n1*n2;
        break;
      case "/": /*if it's a slash, divide them */
        total = n1/n2;
        break;
      default:
        total = 23;
        break;
    }
    $("#screen").html(total); /*show total on the screen */
    solved = true; /*set solved as true */
    }
    if(solved){ /*if it's been solved, */
      num1 = []; /*make num1 an empty array*/
      num1.push(total); /*push the old total in there*/
      num2 = []; /*set num2 to empty array*/
      operator = null; /*set operator to null */
      solved = false; /*set solved to false */
    }
    
  })
   
 function clear(){
   num1 = [];
   num2 = [];
   operator = null;
   $("#screen").html(0);
 }
 $("#clear").click(function(){
   clear();
 })  
      
});