$(document).ready(function() {

function initialScreen() {
  startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
  $(".mainArea").html(startScreen);
}

initialScreen();
// start-button click>>>>>>
$("body").on("click", ".start-button", function(event){
  event.preventDefault();  
  generateHTML();

  timerWrapper();

}); 

$("body").on("click", ".answer", function(event){
//correct!>>>>>
  selectedAnswer = $(this).text();
  if(selectedAnswer === correctAnswers[questionCounter]) {
    

    clearInterval(theClock);
    generateWin();
  }
  else {
    //wrong answer>>>>
    clearInterval(theClock);
    generateLoss();
  }
}); 

$("body").on("click", ".reset-button", function(event){
  
  resetGame();
}); 

}); 

function generateLossDueToTimeOut() {
  unansweredTally++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 3000);  
}

function generateWin() {
  correctTally++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 3000);  
}

function generateLoss() {
  incorrectTally++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 3000); 
}

function generateHTML() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p>";
  $(".mainArea").html(gameHTML);
}

function wait() {
  if (questionCounter < 7) {
  questionCounter++;
  generateHTML();
  counter = 30;
  timerWrapper();
  }
  else {
    finalScreen();
  }
}

function timerWrapper() {
  theClock = setInterval(thirtySeconds, 1000);
  function thirtySeconds() {
    if (counter === 0) {
      clearInterval(theClock);
      generateLossDueToTimeOut();
    }
    if (counter > 0) {
      counter--;
    }
    $(".timer").html(counter);
  }
}

function finalScreen() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, how you did, here is!  Hmmmmmm." + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
  $(".mainArea").html(gameHTML);
}

function resetGame() {
  questionCounter = 0;
  correctTally = 0;
  incorrectTally = 0;
  unansweredTally = 0;
  counter = 30;
  generateHTML();
  timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What is the name of Han Solo’s ship?",
           "Who is Luke and Leia’s mother??", 
           "Who are the masters of the Dark Side who want to rule the galaxy??", 
           "What were the last words spoken in The Empire Strikes Back?", 
           "How many members are there in the Jedi Council?",
           "What planet is home to Chewbacca and the Wookiees?", 
           "What color is Yoda’s lightsaber in Attack of the Clones and Revenge of the Sith?", 
           "How many engines are on an X-wing fighter?"];
var answerArray = [
           ["A-wing Fighter", "Millennium Falcon", "Snowspeeder"], 
           ["Beru", "Rey", "Padmé Amidala"],
           ["The Sith", "The Jedi", "Padawans"], 
           ["'Never tell me the odds'", "'No, I am your father'", "'May the Force be with you'"], 
           ["12", "24", "16"], ["Endor", "Naboo", "Kashyyyk"], 
           ["Green", "Red", "Blue"], 
           ["6", "2", "4"]];
var imageArray = ["<img class='center-block img-right' style='width: 70%; height: auto;'' src='assets/images/mf.gif'> ", 
          "<img class='center-block img-right' style='width: 70%;' src='assets/images/padme.gif'>", 
          "<img class='center-block img-right' style='width: 70%;'src='assets/images/sith.gif'>", 
          "<img class='center-block img-right' style='width: 70%;'src='assets/images/may.gif'>",
          "<img class='center-block img-right' style='width: 70%;'src='assets/images/jedi.gif'>",
          "<img class='center-block img-right' style='width: 70%;'src='assets/images/chewbacca.gif'>", 
          "<img class='center-block img-right' style='width: 70%;'src='assets/images/yoda.gif'>",
          "<img class='center-block img-right' style='width: 70%;'src='assets/images/xwing.gif'>"];
var correctAnswers = ["B. Millennium Falcon", 
            "C. Padmé Amidala", 
            "A. The Sith", 
            "C. 'May the Force be with you'", 
            "A. 12", 
            "C. Kashyyyk", 
            "A. Green", 
            "C. 4"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
