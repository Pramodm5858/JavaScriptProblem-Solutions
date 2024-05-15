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

        function table(n){

                for(var i=1; i<=10; i++){
                        var fact = n * i
                        console.log(` ${n} x ${i} = ${fact}`);
                }
        }
        table(5)
        table(15)
        table(10)


