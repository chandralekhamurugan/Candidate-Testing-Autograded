const input = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
//Comment


//TODO: Variables for Part 2
let questions = ["1) Who was the first American woman in space? ", "2) True or false: 5 kilometer == 5000 meters? ", ("3) (5 + 3)/2 * 10 = ? "), "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your Name?");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // let candidateAnswer = (prompt(question));

  for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    candidateAnswers[step] = input.question((questions[step]));
  }  

}

function gradeQuiz(candidateAnswers) {
  let grade = 0;
  let NoOfCorrectAnswers=0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log();
    console.log(questions[step]);
    console.log(`Your Answer: ${candidateAnswers[step]} \nCorrect Answer: ${correctAnswers[step]}`);
    if(candidateAnswers[step].toUpperCase() == correctAnswers[step].toUpperCase()){
      grade += 20;
      NoOfCorrectAnswers +=1;
     } 
  
    
  }

  //TODO 3.2 use this variable to calculate the candidates score.

  let percentage = (NoOfCorrectAnswers/questions.length)*100;
  console.log();
  if (percentage >=80) {
    console.log(`>>> Overall Grade: ${percentage}% ${NoOfCorrectAnswers} of 5 responses correct <<<`);
    console.log(">>> Status: PASSED <<<");

  } else {    
    console.log(`>>> Overall Grade: ${percentage}% ${NoOfCorrectAnswers} of 5 responses correct <<<`);
    console.log(">>> Status: FAILED <<<");
  }

  return grade;

    

}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("CandidateName: " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};