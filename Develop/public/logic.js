//adding this file to make sure that github is linked



var newSession = {
      userName: "",
      category: "",
      score: 0 

}
var currentScore = $("<div>").val(newSession.score)

var scienceQuestions = [
      {
        question: 'How many feet are in 100 yards?',
        answers: [
          { text: '300', correct: true },
          { text: '318.65', correct: false },
          { text: '303.33', correct: false },
          { text: '366.66', correct: false }
        ]
      },
      {
        question: 'How many miles are in 1 Nautical League?',
        answers: [
          { text: '6.215 miles', correct: false },
          { text: '3.45 miles', correct: true },
          { text: '12.12 miles', correct: false },
          { text: '9.02 miles', correct: false },
        ]
      },
      {
        question: 'What is the largest planet in the solar system?',
        answers: [
          { text: 'Jupiter', correct: true },
          { text: 'Saturn', correct: false },
          { text: 'Uranus', correct: false },
          { text: 'Pluto', correct: false }
        ]
      }
    ]


$("#startQuiz").on("click", function() {
            console.log("Quiz Started");
            newSession.userName = $(".nameInput").val().trim();
            newSession.category = $(".categorySelected").val();
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




}
function cultureQuiz (){
      
}
// function scienceQuiz (){
      
// }