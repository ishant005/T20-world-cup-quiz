var readlineSync=require('readline-sync');
console.log("Welcome to the T20 Worldcup-Quiz")
console.log("---------------")
console.log("Each right answer will give you a +1")
console.log("Answer with a,b,c,d ");
var userName=readlineSync.question("Enter your name");
var score=0;
function quiz(question,answer){
   var userAnswer=readlineSync.question(question)
   if(userAnswer===answer){
     console.log("The answer is right")
     score++;
   }
   else{
     console.log("The answer is wrong")
   }
   console.log("Your score is: "+ score)
   console.log("---------\n")

}
var questions=[
  firstQuestion={question:"What was the result of the India vs Pakistan T20 World Cup 2021 held on 24 October?\na.Match tied\nb.India Won\nc.Pakistan won\nd.No result\n.Your answer :",
  answer:"c"


  },
  secondQuestion={
    question:"India played its inaugural T20 World Cup 2021 match against which country?\na.Afghanistan\nb.Scotland\nc.Pakistan \nd.NewZealand\n.Your answer:",
  answer:"c"


  },
  thirdQuestion={question:"Which team won the 2021 T-20 Worldcup ?\na.India \nb.Australia \nc.Pakistan \nd.England\n.Your answer:",
  answer:"b"


  },
  fourthQuestion={question:"Who was the player of the tournament\na.Babar Azam\nb.David Warner\nc. Virat Kohli\nd.Rohit sharma\n.Your answer:",
  answer:"b"


  },
  fifthQuestion={question:"Which team was the runner up \na.NewZealand\nb.India \nc.Pakistan \nd.England\n.Your answer:",
  answer:"a"
  }
]
for(i=0;i<questions.length;i++){
   var currentQuestion=questions[i]
   quiz(currentQuestion.question,currentQuestion.answer)
}
var highscores=[
  Ishant={
    score:"5"
  },
  yogesh={
    score:"4"
  },
   rajat={
     score:"4"
   }
]
console.log("Your final Score is : " + score)
console.log("\n-------------------------------------\n")
 console.log("Our Hall of Fame :")
 console.log("Ishant :" + Ishant.score  )
 console.log("yogesh :" + yogesh.score  )
 console.log("rajat :" + rajat.score  )
console.log("\n-------------------------------------\n")
if (score == Ishant.score){
  console.log(`Congratulations!! ${userName} You have tied your score with Hall of Famers`)
 
}else {
  console.log(`Sorry ${userName} you couldn't match the highscore.Your final score is ${score}`)
}

