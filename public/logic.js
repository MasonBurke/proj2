//adding this file to make sure that github is linked



var newSession = {
      userName: "",
      category: "",
      score: 0 

}
var currentScore = $("<div>").val(newSession.score);
var categorySelected = $("#categorySelected");
var userNameInput = $("#userNameInput");

2
var scienceQuestions = {
    
      questions: {
            q1: 'How many feet are in 100 yards?',
            q2: 'How many miles are in 1 Nautical League?',
            q3: 'What is the largest planet in the solar system?',
            q4: 'Which compound expands as it gets colder?',
          },
      answers: {
            q1: ['300', '318.5', '327.21', '333.33'],
            q2: ['3.45 Miles', '6.21 Miles', '6.66 Miles', '10 Miles'],
            q3: ['Saturn', 'Jupiter', 'The Sun', 'Uranus'],
            q4: ['Sulfer Dioxide', 'Carbon Monoxide', ' Muratic Acid', 'Dihydrogen Monoxide'],
          }

}
$("#startQuiz").on("click", function() {
            newSession.userName = userNameInput.val();
            newSession.category = categorySelected.val();
            console.log(newSession.userName);
            console.log(newSession.category);
            startQuiz(newSession.category);
            
      })


function startQuiz (category) {
      
      
      
      if (category === "Science") {
           
            scienceQuiz ();

      }
      else if (category === "Culture") {
            cultureQuiz();
      }

}

function scienceQuiz (){

      
      firstQuestion();

      function firstQuestion() {

            
            console.log("first science question triggered")
            userNameInput.hide()
            
            
            var divQuestion = $("<p>").text(scienceQuestions.questions.q1);
            var divAnswer1 = $("<div>").text(scienceQuestions.options.q1[0]);
            var divAnswer2 = $("<div>").text(scienceQuestions.options.q1[1]);
            var divAnswer3 = $("<div>").text(scienceQuestions.options.q1[2]);
            var divAnswer4 = $("<div>").text(scienceQuestions.options.q1[3]);


           
            // this is where I will append the proper elements with the variables above. 
            // Then I will create If/Else statements to capture increase in score (if applicable) and trigger next question.
      }
      
     




      console.log(newSession.category);

}

function cultureQuiz (){
      
}
// function scienceQuiz (){
      
// }