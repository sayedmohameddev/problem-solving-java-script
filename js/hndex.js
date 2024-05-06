//1 : Write a program that allow to user enter number then print it
/*var num =Number (window.prompt("Enter a number"));
console.log(num);*/



//2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

/*var num =Number (window.prompt("Enter a number"));

if(num %3==0 && num %4 ==0){
    console.log("yes");
}
else{
    console.log("no");
}*/


//3- Write a program that allows the user to insert 2 integers then print the max
 /*var num1 = Number
 (window.prompt("Enter a num1"));
 var num2 =Number
 (window.prompt("Enter a num2"));
 if(num1>num2){
    console.log(num1);
 }
 else if (num2<num1){
    console.log(num2);
 }*/

//4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
   /*var num1 = Number
 (window.prompt("Enter a num1"));
 if (num1>0){
    console.log("positive");
 }
 var num2 =Number
 (window.prompt("Enter a num2"));
 if(num2>0){
    console.log("negative");
 }*/

 //5- Write a program that take 3 integers from user then print the max element and the min element.


/*var a = Number (window.prompt("Enter the  number1"));
var b = Number (window.prompt("Enter the  number2"));
var c = Number (window.prompt("Enter the  number3"));
 
if (a>b && a>c && b>c) {
    console.log(" max elemnt =" +  a + "\n"+ " min elemnt =" + c);
}
else if (a>b && a>c && c>b){
    console.log(" max elemnt =" +   a + "\n"+ " min elemnt =" + b);
}
else if (b>a && b>c && a>c) {
    console.log(" max elemnt ="+ b + "\n" + " min elemnt =" + c);
}
else if (b>a && b>c && c>a) {
    console.log(" max elemnt ="+ b + "\n" + " min elemnt =" + a);
}
else if (c>a && c>b && b>a) {
    console.log(" max elemnt ="+ c + "\n" + " min elemnt =" + a);
}
else{
    console.log(" max elemnt ="+c + "\n" +  "the min elemnt =" + b);
}*/


   
//6- Write a program that allows the user to insert integer number thencheck If a number is oven or odd

/*var num1 =Number
(window.prompt("Enter a num1"));

if(num1>0)
if(num1%2==0){
    console.log('even');
}
else{
    console.log('odd');
}*/

//Write a program that take character from user then if it is vowel chars (a,e,I,o,u)then print vowel otherwise print consonant

/*var input = prompt("Enter a character:");
if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
console.log("Its a vowel");
} else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
  console.log("Its a consonant");
} else {
    console.log("Invalid input please enter an alphabet");
 }*/


//9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1tothat’s number

/*var user_number = Number(window.prompt("Enter a number:"));
for (var i = 0; i <= user_number; i++) {
    console.log(i);
}*/


//10- Write a program that allows userto insert integerthen print a multiplication table up to 12.

/*var n = Number;
var n = Number(window.prompt("Enter a n"));
for (var i =0; i <= 10; ++i)
    console.log(n + " * " + i +  " = " + n * i);*/


//11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbersbetween 1 to this number


/*var n = Number;
var n = Number(window.prompt("Enter a n"))
    for (var i = 0; i <= n; i += 2) 
      console.log(i);*/




//12- Writeaprogramthattaketwointegersthenprintthepower


/*var num1 = Number
 (window.prompt("Enter a num1"));
 var num2 =Number
 (window.prompt("Enter a num2"));
 console.log(num1**num2);*/



//12- Write a program to enter marks of five subjects and calculate total, average and percentage.

/*var Mark1 = Number

(window.prompt("Enter Marks of 1"));
 
var Mark2 = Number

(window.prompt("Enter Marks of 2"));
 
var Mark3 = Number

(window.prompt("Enter Marks of 3"));
 
var Mark4 = Number

(window.prompt("Enter Marks of 4"));

 var Total_marks= Mark1 + Mark2 + Mark3 + Mark4;

 console.log("Total marks: " + Total_marks);

 var numberOfSubjects = 4;

 var Average_marks = Total_marks / numberOfSubjects;

 console.log("Average marks: " + Average_marks);

 var maximumPossibleMarks = numberOfSubjects * 100;

 var Percentage = (Total_marks / maximumPossibleMarks) * 100;
 
 console.log("Percentage: " + Percentage.toFixed(2) + "%");*/


//13-Write a program to input month number and print number of days in that month.

/*var a = Number(window.prompt("Enter the month number"));
if (a == "1") {
    console.log("days in month :  31");
}
else if(a == "2") {
    console.log("days in month :  29");
}
else if(a == "3") {
    console.log("days in month :  31");
}
else if(a == "4") {
    console.log("days in month :  30");
}
else if(a == "5") {
    console.log("days in month :  31");
}
else if(a == "6") {
    console.log("days in month :  30");
}
else if(a == "7") {
    console.log("days in month :  31");
}
else if(a == "8") {
    console.log("days in month :  31");
}
else if(a == "9") {
    console.log("days in month :  30");
}
else if(a == "10") {
    console.log("days in month :  31");
}
else if(a == "11") {
    console.log("days in month :  30");
}
else if (a == "12") {
    console.log("days in month :  31");
}
else{
    console.log("erorr");
}*/
//14- Write a program to input marks of five subjectsPhysics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

/*var Physics = Number(window.prompt("Enter marks for Physics:"));
var Chemistry = Number(window.prompt("Enter marks for Chemistry:"));
var Biology = Number(window.prompt("Enter marks for Biology:"));
var Mathematics = Number(window.prompt("Enter marks for Mathematics:"));
var Computer = Number(window.prompt("Enter marks for Computer:"));

var totalMarks = Physics + Chemistry + Biology + Mathematics + Computer;

var percentage = (totalMarks / (5 * 100)) * 100;

var grade;
if (percentage >= 90) {
    grade = 'A+';
} else if (percentage >= 80) {
    grade = 'A';
} else if (percentage >= 70) {
    grade = 'B';
} else if (percentage >= 60) {
    grade = 'C';
} else if (percentage >= 50) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);*/

//15- Write a program to print total number of days in month

/*var a = Number(window.prompt("Enter the month number"));
 switch (a) {
    case a = Number("1"):
        console.log("31");
        break;
    case a = Number("2"):
        console.log("29");
        break;
    case a = Number("3"):
        console.log("30");
        break;
    case a = Number("4"):
        console.log("31");
        break;
    case a = Number("5"):
        console.log("30");
        break;
    case a = Number("6"):
        console.log("31");
        break;
    case a = Number("7"):
        console.log("30");
        break;
    case a = Number("8"):
        console.log("31");
        break;
    case a = Number("9"):
        console.log("30");
        break;
    case a = Number("10"):
        console.log("31");
        break;
    case a = Number("11"):
        console.log("30");
        break;
    case a = Number("12"):
        console.log("31");
        break;
 
    default:
        console.log("not defined as a month number");
        break;
 }*/

 //16- Write a program to check whether an alphabet is vowel or consonant

/*var char = window.prompt("Enter a single character");
 switch (char) {
         case char = "a"  :
        console.log("vowel");
        break;
        case char = "e" :
            console.log("vowel");
        break;
        case char = "i" :
            console.log("vowel");
        break;
        case char = "o" :
            console.log("vowel");
        break;
        case char = "u" :
            console.log("vowel");
        break;
    default:
        console.log("consonant");
        break;
 }*/


 //17- Write a program to find maximum between two numbers

/* var num1 = Number(window.prompt("Enter the first number"));
 var num2 = Number(window.prompt("Enter the second number"));
 
 if (num1 > num2) {
     console.log("The max number is " + num1);
 } else if (num1 < num2) {
     console.log("The max number is " + num2);
 } else {
     console.log("The two numbers are equal");
 }*/
 
// 18- Write a program to check whether a number is even or odd

/*var num = Number(window.prompt("Enter a number"));
var remainder = num % 2;

if (remainder === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}*/


//19- Write a program to check whether a number is positive or negative or zero

/*var num =Number (window.prompt("Enter a number"));
switch (true) {
    case num > 0:
        console.log("positve num");
        break;
    case num < 0:
        console.log("negative num");
        break;
    default:
        console.log("zero");
        break;
}*/


//20- Write a program to create Simple Calculator

/*var c = prompt("Enter an operator (+, -, *, /, ^):");
var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));

switch (c) {
    case '+':
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
    case '-':
        console.log(num1 + " - " + num2 + " = " + (num1 - num2));
        break;
    case '*':
        console.log(num1 + " * " + num2 + " = " + (num1 * num2));
        break;
    case '/':
        if (num2 !== 0) {
            console.log(num1 + " / " + num2 + " = " + (num1 / num2));
        } else {
            console.log("Cannot divide by zero.");
        }
        break;
    case '^':
        console.log(num1 + " ^ " + num2 + " = " + Math.pow(num1, num2));
        break;
    default:
        console.log("Invalid operator.");
        break;
}*/
