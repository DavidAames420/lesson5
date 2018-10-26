/* JavaScript is a programming language used to make web pages interactive. 

*It runs on your visitor's computer and doesn't require constant downloads from your website. 

*JavaScript is often used to create polls and quizzes.

*JavaScript support is built right into all the major web browsers, 

*including Internet Explorer, Firefox and Safari. Provided that the visitors to your site are using web browsers that support 

*JavaScript (most do) and have JavaScript enabled (it is by default), then your JavaScript will run when they visit the page.

*Do you need to learn javascript to be able to use it?

*No. There are plenty of pre-written JavaScripts that people have made available for you to plug straight into your web page. 

*All you need to know to be able to use such scripts is how to paste the supplied code into the required places in your web page.

*There are three different types of JavaScript Basic Syntax, Document Object Model (DOM), and The Browser Object Model.
  Basic Syntax: The core component of JavaScript is its syntax. Just as English has nouns and verbs, 
                JavaScript has a syntax that dictates how the code is put together. In both JavScript and JScript, 
                this syntax is based on the ECMAscript 262 standard. This standard defines how the core part of the 
                language works. 

                This includes the definition of:
                
                how to define your variables

                how to perform calculations on those variables

                how to set up loops and functions and

                how to define objects

       The DOM: The second component part of the language is the Document Object Model. This standard has been developed by the W3C and defines how JavaScript should communicate with the web page,
                in order to extract content from the page for processing, add content to the page, as well as how to access the stylesheet for the page in order to change the appearance of the page. 
                There are four different 'levels' in this set of standards. The DOM0 'standards' are those methods that the browsers implemented prior to the W3C starting on writing the standards 
                and which the browsers still support today. The W3C has released three different sets of standards for interfacing with the web page each of which includes everything in the prior standard, 
                and which then adds further ways of interfacing with the page. These are known as DOM1, DOM2, and DOM3.The DOM3 standard is considered to be the final version with no further additions to it 
                being required. Most browsers currently support most or all of the DOM2 standard, and small parts of the DOM3 standard. Internet Explorer is somewhat behind the other browsers and still has some gaps, 
                in its support for DOM2 although JScript does also provide some alternatives that provide similar functionality.

        The BOM: The third and final component is the Browser Object Model which is how the scripts obtain information from the browser and pass information back to it. For this part of the language there is no one actually co ordinating standards, 
                 and so the browser writers can define their own interface. Most browsers other than Internet Explorer have copied the Firefox way of interfacing to the browser which simplifies the task somewhat. 
                 Internet Explorer has two different ways of interfacing with the browser depending on whether the browser is being run in standards mode or quirks mode. 
                 This is determined by whether the page has a valid DOCTYPE statement as the first tag in the HTML file. Since quirks mode results in web pages looking different in different browsers, 
                 you should always include a doctype as the first thing in your HTML. That will make it simpler to write code that provides equivalent processing for each browser.


*Variables are a way of referring to a memory location used in a computer program. This memory location holds values- 
 perhaps numbers or text or more complicated types of data like a payroll record. Variable is simply a container for a value. All variables must be identified with certain names.
 These names are refered to as identifiers. Identifiers can be named all types of things from words like "world" to letters such as x, and y.

 The value of a variable Datatypes can be more than just numbers for example:

 There are four different variable datatypes
  1. String: A string is a text enclosed by quotations marks such as "" or '' for example:*/

   var y = 'dean';

   var name = 'sam';

   var name = ''; //this string contains a value and type. the value is in the quotations.

   // You can also connect two strings example

   var greeting = 'whats up';
   var name = 'sam';
   alert('whats up' + 'sam') 

   // the (+) combines the two strings.

  2. Number; numbers do not required to be contained in quotes example.
  
  var y = 2500;

  // Every number in java script are floated

//3. Boolean: Boolean have true/false values. The key phrases True and False don't have to be contained in quotes.
//Example.

var red = true;
var blue = false;

//4. Array: An array is a structure that lets you store different values in a single reference that are closed in square brackets [] and can hold multiple data types.
// Example:

 var colors = ['green', 'blue', 'yellow', 'red'];

 [100, 1, 300, 'gold', 'silver']

 // To enter arrays
 // declare the array

 var money = ['washington', 'lincon', 'jackson', 'grant', 'franklin'];

 // Entering the first element
 
 console.log(money[0]);

 // enter the fourth element

 console.log(money[3]);

 // multiple array stored in on array is called an 'arrayception'

 var horesemen = ['war', 'conquest', 'death', 'famine'];
 var money = ['washington', 'lincon', 'jackson', 'grant', 'franklin'];

 // to enter the second array inside horesmen and the third item in that array

 console.log(horesmen[1][2]); 

//5. Object: Objects are everything in javascript and can a within a variable. Javascript objects are contained in the curly brackets {}, 
 //  and there properties are described as name;value pairs, seperated by commas.

 var parents = {fathersName: 'John', mothersName'Jane'}

 // The object is 'parents' and it has only two values fathersName, and mothersName.
 // To be able to access the information within the oject you first have to declare the assigned varibale.
 // You can access this information via alert
 // Example:

 alert(parent['fathersName']);
 alert(parent['mothersName']);

 // You can degu you code by using a dot notation.
 // A dot notations is similar to the bracket notation.
 // Instead of a bracket you can simply use a dot.
 // Example:

 var parents = { fathersName: 'John', mothersName:'Jane' }
 alert(parents.fathersName);
 alert(parents.mothersName);

 // By using the typeof operator can create various variable datatypes.
 // The typeof operator does not use a symbol the only this required is the words 'typeof'.
 // Example:

 console.log(typeof 'cars');
 console.log(typeof 'parents');

 var planets = "earth";
 console.log(typeof planets);

 // Another operators are 'Unary Operators' and 'Binary Operators'.
 
 // A Unary Operator only takes on value you. the result of an operation on only one operand. 
 
 // There are six defined in the Java language:

 +    the unary plus operator makes an expression positive. 
 -    the unary negative operator makes an expression negative. 
 ++   the increment operator increments a value by 1. 
 --   the decrement operator decrements a value by 1. 
 !    the logical complement operator inverts a boolean value. 
 ~    the bitwise complement operator inverts the bits of a binary number.
 
 // Example:

 int prefixValue = 5;  

 //increment prefixValue by one (i.e., 6). 

 ++prefixValue;  

 //the prefix expression is equal to prefixValue  
 
 //incremented by one (i.e., 7). 
 
 int seven = ++prefixValue  int postfixValue = 10  
 
 //increment the postfixValue by one (i.e., 11). 

  postfixValue++;  
 
 //the postfix expression is equal to postfixValue  
 
 //before it is incremented by one (i.e., 11).  

 int eleven = postfixValue++;  
 
 //postfixValue has still been incremented by one (i.e., 12). 

 int twelve = postfixValue;

 // A Binary Operator appears between its arguments and has two values.

 // Operators in java fall into 8 different categories: Java operators fall into eight different categories: 
 
 // assignment, arithmetic, relational, logical, bitwise, compound assignment, conditional, and type.

 //Example:

 console.log ((200 - 73));

 // This will result in 127 the console.log indicates thats 73 subtracted by 200 will equal 27 but using the two binary vaules.

 // Althought the function will result in 73 the (-) operator only uses on value and acts like a unary operator.

 // You can also accomplish this by using the is/else statement

 // Example:

 if (typeof 'parents' === 'fathersName') {
    alert('John');
 }   else {
    alert('John is your' + 'fathersName');
 }

// 6. An undefined is a variable without a value and will results in a message error 'undifined' 

 // due to the fact that the value not being declared.

 // Example:

 var planets // the value and type is undfined

 chips = 'doritos'; 


 // No assignment and no value operator

 // var was not placed infront of chips which resulted in an undecleared variable

 // Once you declear a variable, you can change its value:

 var chips = " doritos";
 console.log(chips);

 chips = "doritos";
 console.log(chips);

 // Variables with numbers in the datatypes must also be declared using the keyword VAR.
 // Example:

 var x = 25;
 var y = x * 91;
 console.log(y);

 /* since x = 25 during the console log x (25) will be multiplied by (91)

 /*  Once the variable has been declared its time to assign them.
 
 // you can assign them by using an (=)

 //Example:*/

var x = 'John';
var y = 'Smith';
var z = 'My fathersName is ' + x + y;
console.log(z);

//Javascript can be complicated but it is basic Programing Logic






















