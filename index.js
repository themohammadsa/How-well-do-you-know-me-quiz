var readLineSync = require("readline-sync")

var userName = readLineSync.question("What is your name? \n");
console.log("\nHello " + userName + "!.\nThis is a quiz about - How well do you know me? \n");
var score = 0

var questions = [
  {
  question : "1. What is my favourite city? ",
  answer : "Dammam"
  },
  {
   question : "2. Who is my favourite actor? ",
   answer : "liam neeson"
  },
  {
   question : "3. Where do I live?  ",
   answer : "Dindigul"
  },
  {
   question : "4. What is my favourite car? ",
   answer : "Audi"
  },
  {
   question : "5. What is my favourite TV show? ",
   answer : "The 100"
  }
]

 for (i=0; i<questions.length; i++){
   var currentQuestion = questions[i];
   quiz(currentQuestion.question,currentQuestion.answer)
 }



function quiz(a,b) {
  console.log(a)
  var userAnswer = readLineSync.question();
    if (userAnswer.toUpperCase() === b.toUpperCase()) {
      console.log("You are absolutely Right!");
      console.log("-----------------------------");
      score = score + 1;
    }
    else{
      console.log("Ouch! You are wrong!");
      console.log("-----------------------------");
    }
}
 
 console.log("Your Total score is " + score);


var highscores = [
  {
   name: "Rahul",
   score : 5
  },
  {
   name: "Rohit",
   score: 7
  }
 ]

 for (var i=0; i<highscores.length; i++)
 {
   console.log('\nThe name of the Highscores are ' + highscores[i].name + ' with the score of '+ highscores[i].score);

    if(score > highscores[i].score){
      console.log(" Superb! You have crossed the highscore.")
      console.log(" Do send me a screenshot! I will update the highscore")
      break
   }
 }

 console.log ("\nThank you " + userName + " for attending my quiz!");