console.log("Hello World1");

//JavaScript problems & solutions

//1) // alert("Hello World")
// console.log("Hello world2 ");
// document.write("Hello World")

//2)Add of two number
//static
// let a = 5;
// let b = 6;

// let c = a + b;
//As we know + is used to add number & also concatination of string;
//Imp whenever we are going to use +(addition) then we have to use as parseInt(value).as it converts from string to numbers

//console.log("The sum of " +a+ " & " +b+ " is = " +c);


//dynamic calculation
//let d = prompt("Please enter first number ", "");
//let e = prompt("Please enter second number ", "");
//To convert from string to number we use parseInt()
//let f = parseInt(d) + parseInt(e);
//console.log(f);

//3) To find squareroot of number in js by using Math.sqrt()
//let g = prompt("Enter the number ","")
//let h = Math.sqrt(g)
//let i = Math.sqrt("Hello" or -6 ) O/p => NaN

//console.log(i);

//4) Find Area of triangle
// let base = prompt("Enter base of a triangle ","");
// let height = prompt("Enter height of triangle ","");

// let area = ( parseInt(base) * parseInt(height))/2

// console.log("base is " +base+ " height is " +height+ " area is " +area);

// let base1 = prompt("Enter base of a triangle ","");
// let height1 = prompt("Enter height of triangle ","");

// let area1 = ( base1 * height1)/2

// console.log("base is " +base1+ " height is " +height1+ " area is " +area1);



//5) Find area of regular triangular s=(a+b+c)/2 & Area= squareroot s(s-a)*(s-b)*(s-c)

// let a = 5;
// let b = 10;
// let c = 10;

// let s = (a + b + c) / 2;

// console.log(s);

// let temp = s * (s - a) * (s - b) * (s - c)
// console.log(temp);
// let area = Math.sqrt(temp)

// console.log(area);

// 6) Swapping of two values

//  let a = 5;
//  let b = 6;
//  let temp;

//  temp=a;
//  a=b;
//  b=temp

//  console.log("a is " +a+ " b is " +b);

//  let p = parseInt(prompt("Enter the p number"));
//  let q = parseInt(prompt("Enter the q number"));
//     console.log("p is " +p+ " q is " +q);

//  p = p+q
//  q = p-q
//  p = p -q

//     console.log("p is " +p+ " q is " +q);

//11) Even & Odd for if-else, ternery operator

// var x = 10;

// if(x % 2 == 0){
//         console.log(`${x} is even number`);
// }else{
//         console.log(`${x} is odd number`);
// }

// var res = x%2 == 0 ? "even" : "odd"; ///optimize code in ternery operator
// console.log( `${x} is an ${res} number`);

//12)  To Find prime number or not
// var number = prompt("Enter the number");

// if(number == 1){
//         console.log(`${number} is not a prime number nor composite number`);
// }else if(number < 1){
//         console.log(`${number} is not a prime number`);
// }else {
//         //number = 15
//         for( var i=2; i<number; i++){
//                 //15%2 = R:1
//                 //15/2 = Q:7
//                 if(number % i == 0){
//                         var res = `${number} is not a prime number`;
//                         break;
//                 }else {
//                         var res = `${number} is a prime number`;
//                 }
//         }
//         console.log(res);
// }

//13) Find the largest number i.e Math.max(n1, n2,n3)


// var a = prompt("Enter the first number");
// var b = prompt("Enter the second number");
// var c = prompt("Enter the third number");

// //var res = Math.max(a,b,c)    or
// var x = check(a,b,c)
// console.log(`${a},${b},${c}: Largest${x} `);

// function check(p,q,r){

//         if(p>=q && p>=r){
//                         return p
//                 }
//         else if( q>=p && q>=r){
//                         return q
//         }else{
//                 return r
//         }

// }

// 14 The factorial number if 5 = 1*2*3*4*5 = 120

// var number = prompt("Enter the number");

// var fact = 1;

// if(number == 0){
// console.log(`The factorial of ${number} is 1`);
// }else if( number < 0){
// console.log(`The factorial of will never be negative`);
// }else{
// for(var i = 1; i<=number; i++ ){
//         fact = fact * i

// }
// console.log(`The factorial of ${number} is ${fact}`);
// }

// 15)) JS progm to find factorial of a number using recursion (n!) = 1* 2 * 3 * 4....n .i.e.
//recursion= The process in which a function calls itself directly or indirectly is called recursion & the corresponding function is also called recursion.
// e.g :- function demo(){
//         if(condition){
//                 return
//         }
//         demo() ...  if return is true then it go to next step or if not then it can be called again as demo()
// }
// var number = prompt("Enter the number for factorial")
// var fact = 1
// console.log(fact);
// function factr(n){
//         if(n>number){
//                 return
//         }
//         var tmp = fact
//         fact = fact * n;
//         console.log(tmp+ " x " +n+ " = "  +fact);
//         n++;
//         factr(n)
//         // console.log("value of fact is " +n);
// }
// factr(1)
// console.log(`the factorial of ${number} is ${fact}` );

// 16) JS prog to print the table of any user given number

// function table(n){

//         for(var i=1; i<=10; i++){
//                 var fact = n * i
//                 console.log(` ${n} x ${i} = ${fact}`);
//         }
// }
// table(5)
// table(15)
// table(10)


//10) JS prog to generate a random number Math.random()
//      Math.floor(Math.random()*(highestNumber - lowestNumber)) + lowestNumber
//        generation random number
// let x = Math.random()


// console.log("Before calculation " +x);

// x1 = x * (10000 - 1) + 1;
// console.log("After calculation " +x1);

// x2 = Math.floor(x1)
// console.log("After calculation " +x2);

// x2 = Math.ceil(x1)
// console.log("After calculation " +x2);


// 16) JS prog to make a simple calc using switch case

// let num1 = prompt("Enter the 1st number");
// let num2 = prompt("Enter teh 2nd number");

// let opr = prompt("Enter symbol +,-,*,/");

// switch(opr){
//         // if(opr == +)
//         case "+" :
//         var res = parseFloat(num1) + parseFloat(num2);
//         console.log(`${num1} + ${num2} = ${res}`);
//         break;
//         // if(opr == -)
//         case "-" :
//         var res = num1 - num2;
//         console.log(`${num1} - ${num2} = ${res}`);
//         break;
//         // if(opr == *)
//         case "*" :
//                 var res = num1 * num2;
//                 console.log(`${num1} * ${num2} = ${res}`);
//                 break;
//         // if(opr == /)
//         case "/" :
//         var res = num1 / num2;
//         console.log(`${num1} / ${num2} = ${res}`);
//         break;

//         default:
//                 console.log(`Invalid Operator`);
// }
// alert("Hello")

//  17) JS prog to check if number have same last digit
// 1)Suppose we have 3 number num1, num2, num3
// 2)to check all have same last digit
//         divide each number by 10;
//         check the remainder
//         if all the remainders are same, those numbers has the same last digit

// var a = prompt("Enter the 'a' number")
// var b = prompt("Enter the 'b' number")
// var c = prompt("Enter the 'c' number")

// var res1 = a%10;
// var res2 = b%10;
// var res3 = c%10;

// if(res1 === res2 && res1 === res3){
//         console.log(`${a}, ${b} & ${c} are having same last digit`);
// }else{
//         console.log(`${a}, ${b} & ${c} are not having same last digit`);
// }

//   18)JS prog to check Armstrong Number
// In the case of an Armstrong number pf 3 DOMStringList, the sum of cubes of each digit is equal to the number itself . For EventTarget. 153 is Armstrong number becz
// 153 = 1*1*1 + 5*5*5 + 3*3*3
// var number = prompt("Please enter a number")
// var temp = number;
// var noOfDigits = number.toString().length;
// var sum = 0;
// while(temp>0){
//         var digit = temp%10;
//         //console.log(digit);
//         sum += digit**noOfDigits;
//         //console.log("Sum  "+ sum);
//         temp = parseInt(temp/10);
//         //console.log(temp);
// }
// if(sum == number){
//         console.log(`${number} is an armstrong number`);
// }else{
//         console.log(`${number} is not an armstrong number`);
// }

//  19)JS prog to find Armstrong numbers between An Interval
// var a = prompt("Please enter lowest number");
// var b = prompt("Please enter upper number");

// for(var i=a; i<=b; i++){
//         var temp = i;
//         var noOfDigits = i.toString().length;
//         var sum = 0;
//         while(temp>0){
//                 var digit = temp%10;
//                 temp = parseInt(temp/10);
//                 sum += digit** noOfDigits;
//         }
//         if(sum==i){
//                 console.log(i);
//         }
// }

//  20) JS prog to check palindrome using loop
//  <p>What is palindrome? A string is a palindrome if it is read the same from forword or backword.e.g dad/madam reads the same either from forward or backward </p>
// var string = prompt("Enter the string");
// var len = string.length;            //first to divide string it
// console.log(string);
// var msg = "It is palindrome";
// for (var i = 0; i < len / 2; i++) {
//         if (string[i] != string[len - 1 - i]) {
//                 msg = "It is not palindrome";
//         }
//         // console.log(string[i]);
//         // console.log(string[len - 1 - i]);
// }
// console.log(`${string}: ${msg}`);

// 21) JS prog to sort words in alphabetical order
//<p>split():- to split into array</p>
//<p>sort():- To sort the array into alphabetical order & it takes capital ABCD first then small letter abcd later</p>
//var string = prompt("Please Enter the string")
//var stringArray = string.split(" ")
//var Arrangestring = stringArray.sort()
//stringArray.sort()
//console.log(string);
//console.log(stringArray);
//console.log(Arrangestring);

// 22) JS prog Replace Characters to string
//<p>replace():- The replace function finds, replaces and returns a new string. Syntax:- replace(find, replace) </p>
// var string = "Mr. Red has a red car and red bike. "
// var reg = new RegExp("Red", "gi")  //global & case sensitive
// var replacestring = string.replace(reg,"blue")

// console.log(string);
// console.log(replacestring);

// 23) js prog to reverse a string using for loop
// var string = prompt("Enter the string")
// var strlen = string.length;
// var revrtr = '' ;

// for (var i= strlen-1; i>=0; i--){
//         revrtr += string[i]
// }
// console.log(`${string} reverse is ${revrtr}`);

// 23) JS prog to convert the First Letter of a string into uppercase
//<p>Func to be used 1)charAt() 2)toUpperCase() 3)slice() </p>
//<p>1)charAT():-To get a character at an index. 2)toUpperCase():- To upper case characters. 3)slice():- To slide any character from the string </p>

//var string = prompt("Enter the string")  //first break it and solve it
//var first = string.charAt(0);    //Becz here this is string but in real it is array like continues type ka array hota hai ye & ye (0)is fist character hota hai
//var demo = first.toUpperCase()

// var rem = string.slice(1);

// var caps = first.toUpperCase() + rem

// console.log(string);
// console.log(first);
// //console.log(demo);
// console.log(rem);
// console.log(`Final ${caps}`);

// 24)JS prog to check the number of occurances of the character in a string using of Loop
// var string = prompt("Enter the string")
// var let = prompt("Enetr the letter");
// var lenstr = string.length;
// h 0
// e 1
// l 2
// l 3
// o 4
// let counter = 0;
// for (var i=0; i< lenstr; i++){
//         if(string[i]==let){
//                 counter++
//         }
// }
// console.log(string);
// console.log(lenstr);
// console.log(`${string} => ${let} => ${counter}`);

//25)JS prog to count the number of vowels in a string using regex
//<p>What is Regex? Regex is known as regular expression. It is used to match, test and find character(s) from a string. To find vowels: Expression: [aeiou] Modifiers: gi</p>
// var string = prompt("Enter the string")
// const reg = /[aeiou]/gi;
// var chars = string.match(reg);
// console.log(chars.join(','));
// console.log(chars.length);

//26) JS prog to check whether the string starts and ends with Certain characters in JS
//<p>Inbuilt funtion used 1)string.startsWith() :- It will check the first character of the string, and return true or false. 2)string.endsWith() :- It will check the last character of the string, and return true or false.  </p>
// var string = prompt("Enter the string");
// console.log(string);
// var testStart = string.startsWith('W');
// var testEnd = string.endsWith('e');

// if (testStart == true && testEnd == true) {
//         console.log(`${string} starts with W and ends with e`);
// } else if (testStart == true && testEnd == false) {
//         console.log(`${string} starts with W `);
// } else if (testStart == false && testEnd == true) {
//         console.log(`${string} ends with e`);
// } else {
//         console.log(`${string} neither startswith with W nor ends with E`);
// }

//27) JS prog to check whether a string contains a substring
//<p> string.includes():- The JS String includes() method checks if one string can be found inside another string and returns true or false </p>
//<p>string.indexOf():- The JS string indexOf() method returns the first index of occurrence of given value in the string, or -1 if it is not present. </p>

// var string1 = prompt("please enter the string")
// var subString = "the";

// console.log(string1);

// var test1 = string1.includes(subString)
// console.log(test1);

// var test2 = string1.indexOf(subString);
// console.log(test2);

// 28) JS prog to check palindrome using Array methods
// var string = prompt("Enter the string")
// console.log(string);
// var sonvert = string.split('');
// var rev = sonvert.reverse()

// var joinstring = rev.join("")
// console.log(joinstring);

// if(string == joinstring){
//         console.log(`${string} : is palindrome`);
// }else{
//         console.log(`${string} : is not a palindrome`);
// }




