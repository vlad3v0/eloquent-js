//00000000000000000000000000000000000000000000000000000000000000000000
//00----------------------------------------------------------------00
//00---------------- EX Eloquent js  -------------------------------00
//00----------------------------------------------------------------00
//00000000000000000000000000000000000000000000000000000000000000000000


// var day;
// var  assignValue = 124325;    //Capitalize

// var years = 35;
// var someText = " years old ";
// var gameOver = true;

// alert (years + someText);


// function addSomething(num,str) {

//     var add = num + str;

//     alert (add);

// }

// addSomething(455,"Program to write");

// var number1 = 7;
// var number2 = 4;

// var number1 = number1 + number2;
// // number1 *= number2;
// // number1++ ;
// // number1-- ;

// var number1 =(4 + 3) * 5;
// var number1 =4 + 3 * 5;

// document.write (number1);


// - * /

// var food = "Carota";

// if (food == "Apple") {

//     alert ("is a apple");

// }
// else if (food == "Meat") {

//     alert ("is a Meat");

// }

// else if (food == "Carota") {

//     alert ("is a Carota");

// }

// else if (food == "Zucchina") {

//     alert ("is a Zucchina");

// }

// else {

//     alert ("this food isn't a Apple");
// }

// var i = 1;

// ------------ciclo while -------------------

// while (i < 5) {

//     document.write ("Stato in funzione");

//     i++;

// }

// ------------ciclo for -------------------

// for (var i = 1 ; i < 5 ; i++){

//     document.write ("Ciclo while ");

// }

//------------------- Function Baseball logical game --------------------


// function batting(player, distance) {

//     if (distance <= 350 && distance > 0) {

//         document.write(player + " hit the ball" );

//     }
//     else if (distance <= 0) {

//         document.write(player + " struck out " );
//     }
//     else {
//         document.write(player + " hit a home run" );
//     }
// }

// batting("Steve", 0);


//------------------- Function  with return statement --------------------

// function add(x,y) {

//     result = x + y;
//     return result;

// }

// var theResult = add(5, 5);

// document.write(theResult);


//------------------- global and local variables --------------------

// var name="George"; //global variable

// function printNamee() {

//     var name2 ="Sarah"; // local variable
//     name3 = "Vlad";
// }

// printNamee(); // call function
// document.write (name3);

// // document.write (name2);

// //------------------- Pass by value --------------------

// function batting(player, distance) {

//     var more = player + " hit the balls " + distance + " feet ";
//     document.write(more);

// }

// batting("George", 351); // we pass in argument to parameters

//------------------- Array --------------------

// var road = "stone"
// var road2 = "dirt"
// []

// var roads = ["stone", "dirt", "cement", "tar",];

// // var roads = [];
// //     roads [0] = "stone"
// //     roads [1] = "dirt"
// //     roads [3] = "cement"
// //     roads [4] = "tar"


// var roadTravelled = roads[1];

// document.write (roadTravelled);
// console.log(roadTravelled);

//------------------- Object --------------------

// var orc = {
//     color: "green",
//     height: 5,
//     weight: 180

// };

// var orcs = [];
// // var orc = [  // array
// //     "green",
// //     5,
// //     180
// // ];

// orc.color; // richiamre un oggetto con il valore specifico

// console.log(orc);

// function addValue(color, height, weight) {

//     orc.color = color;
//     orc.height = height;
//     orc.weight = weight;

// }

// var orc = {
//     color: "green",
//     height: 5,
//     weight: 180,
//     yell: function () {    // functions inside objects are called methods
//         document.write ("Orcs is the best!")},
// };


// orc.yell();


// var orc = {

//     hair: "green",
//     age: 26,
//     eat: function () {
//         document.write("YUM YUM!");    // Dynamic value
//     },
//     stomachFull: true,

// };

// // orc.eat();

// // var newAge = orc.age + 2;

// orc.stomachFull = false;

// if (orc.stomachFull == true) {

//     orc.eat();

// } else {
//     document.write("not eating -.-'");
// }

// var orc = {
//     hair: "green",
//     age: 26,
//     stomachFull: false,

// };

// orc.hair = "purple";
// orc.hair = 1;
// orc.hair2 = "red";
// delete orc.hair2;
// orc.hair2;

// document.write(orc.hair2);

//------------------- EX 1 Eloquent --------

// let cancelletto = "";

// for (let i = 0 ; i  < 7; i ++) {

//     cancelletto = cancelletto + "#";
//     document.write(cancelletto + ("<br>"));
//     console.log(cancelletto);

// }
// console.log();

//-------------------- EX Fizz Buzz ---------

// let risultato;


// for (let  i = 1; i <= 100; i++) {

//     risultato = i;

//     if (i % 3 == 0) {
//         risultato = "FIzz";

//     }
//     if (i % 5 == 0) {
//         risultato = "Buzz";
//     }
//     if ((i % 3 == 0) && (i % 5 == 0)){
//         risultato ="TOPBuzzing";
//     }
//     document.write(risultato + "<br>");
// }

//-------------------- EX Scacchiera---------
// let size = 8;

// let campoGioco = "";

// for (let colonna = 0; colonna < size; colonna++) {
//     for (let riga = 0; riga < size; riga++) {
//         if ((riga + colonna) % 2 == 0) {
//             campoGioco += "#";   // campoGioco = campoGioco + "#"
//         }
//         else {
//             campoGioco += " ";   // campoGioco = campoGioco + " "
//         } 
//     }
//     campoGioco += "\n"; // campoGioco = campoGioco + "\n"
// }
// console.log(campoGioco);

// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += "#";
//     } else {
//       board += " ";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

//---------------------------------------------


