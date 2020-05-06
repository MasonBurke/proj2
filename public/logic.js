//adding this file to make sure that github is linked



var newSession = {
      userName: "",
      category: "",
      score: 0 

}
var currentScore = $("<div>").val(newSession.score);
var categorySelected = $("#categorySelected");
var userNameInput = $("#userNameInput");
var labelEl = $("label");
var startBtn = $("#startQuiz");
const topBanner = $(".display-4");





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
var cultureQuestions = {
    
      questions: {
            q1: 'Which continent is the most linguistically diverse?',
            q2: 'How much pizza do Americans eat on average each Day?',
            q3: 'How many countries exist around the world?',
            q4: 'Which compound expands as it gets colder?',
          },
      answers: {
            q1: ['North America', 'South America', 'Asia', 'Africa'], 
            // correct 4
            q2: ['100 Acres', '4,000lbs', '12,000 pizzas', '320 Tons'],
            // correct 1
            q3: ['223', '414', '117', '195'],
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
      topBanner.empty();
      topBanner.text(newSession.category + " Time!!")

      firstScienceQuestion();
      console.log(newSession.category);




function firstScienceQuestion() {
     

            
      console.log("first science question triggered");
      userNameInput.hide();
      categorySelected.hide();
      labelEl.hide();
      startBtn.hide();
      
      var divQuestion = $("<h3>");
      var divAnswer1 = $("<button>");
      var divAnswer2 = $("<button>");
      var divAnswer3 = $("<button>");
      var divAnswer4 = $("<button>");
      
      
      
      divQuestion.text(scienceQuestions.questions.q1);
      divAnswer1.text(scienceQuestions.answers.q1[0]);
      divAnswer2.text(scienceQuestions.answers.q1[1]);
      divAnswer3.text(scienceQuestions.answers.q1[2]);
      divAnswer4.text(scienceQuestions.answers.q1[3]);

      $(".content").append(divQuestion);
      $(".answerList").append(divAnswer1);
      $(".answerList").append(divAnswer2);
      $(".answerList").append(divAnswer3);
      $(".answerList").append(divAnswer4);


      divAnswer1.on("click", function () {
                  newSession.score = newSession.score + 100;
                  $(".content").empty();
                  $(".answerList").empty();
                  secondScienceQuestion();
            })
      $("button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            secondScienceQuestion();
      })   
      }
      

function secondScienceQuestion() {


      var divQuestion = $("<h3>");
      var divAnswer1 = $("<button>");
      var divAnswer2 = $("<button>");
      var divAnswer3 = $("<button>");
      var divAnswer4 = $("<button>");
      
   
      
      divQuestion.text(scienceQuestions.questions.q2);
      divAnswer1.text(scienceQuestions.answers.q2[0]);
      divAnswer2.text(scienceQuestions.answers.q2[1]);
      divAnswer3.text(scienceQuestions.answers.q2[2]);
      divAnswer4.text(scienceQuestions.answers.q2[3]);

      $(".content").append(divQuestion);
      $(".answerList").append(divAnswer1);
      $(".answerList").append(divAnswer2);
      $(".answerList").append(divAnswer3);
      $(".answerList").append(divAnswer4);

      divAnswer1.on("click", function () {
            newSession.score = newSession.score + 100;
            $(".content").empty();
            $(".answerList").empty();
            thirdScienceQuestion();
      })
      $("button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            thirdScienceQuestion();
      }) 

  function thirdScienceQuestion() {
      var divQuestion = $("<h3>");
      var divAnswer1 = $("<button>");
      var divAnswer2 = $("<button>");
      var divAnswer3 = $("<button>");
      var divAnswer4 = $("<button>");
      
   
      
      divQuestion.text(scienceQuestions.questions.q3);
      divAnswer1.text(scienceQuestions.answers.q3[0]);
      divAnswer2.text(scienceQuestions.answers.q3[1]);
      divAnswer3.text(scienceQuestions.answers.q3[2]);
      divAnswer4.text(scienceQuestions.answers.q3[3]);

      $(".content").append(divQuestion);
      $(".answerList").append(divAnswer1);
      $(".answerList").append(divAnswer2);
      $(".answerList").append(divAnswer3);
      $(".answerList").append(divAnswer4);

      divAnswer2.on("click", function () {
            newSession.score = newSession.score + 100;
            $(".content").empty();
            $(".answerList").empty();
            fourthScienceQuestion();
      })
      $("button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            fourthScienceQuestion();
      }) 


    function fourthScienceQuestion() {
      var divQuestion = $("<h3>");
      var divAnswer1 = $("<button>");
      var divAnswer2 = $("<button>");
      var divAnswer3 = $("<button>");
      var divAnswer4 = $("<button>");
      
      divQuestion.text(scienceQuestions.questions.q4);
      divAnswer1.text(scienceQuestions.answers.q4[0]);
      divAnswer2.text(scienceQuestions.answers.q4[1]);
      divAnswer3.text(scienceQuestions.answers.q4[2]);
      divAnswer4.text(scienceQuestions.answers.q4[3]);

      $(".content").append(divQuestion);
      $(".answerList").append(divAnswer1);
      $(".answerList").append(divAnswer2);
      $(".answerList").append(divAnswer3);
      $(".answerList").append(divAnswer4);

      divAnswer4.on("click", function () {
            newSession.score = newSession.score + 100;
            $(".content").empty();
            $(".answerList").empty();
            $.ajax("/api/scores", {
                  type: "POST",
                  data: newSession
                }).then(
                  function() {
                    console.log("created new quizSession");
                    // Reload the page to get the updated list
                    
                  }
                );
            
      })
      $("button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            $.ajax("/api/scores", {
                  type: "POST",
                  data: newSession
                }).then(
                  function() {
                    console.log("created new quizSession");
                    // Reload the page to get the updated list
                    
                  }
                );
            
      }) 
          
    }
        
  }
}
}
function cultureQuiz (){
      topBanner.empty();
      topBanner.text(newSession.category + " Time!!")

      firstCultureQuestion();


   function firstCultureQuestion() {
         
      userNameInput.hide();
      categorySelected.hide();
      labelEl.hide();
      startBtn.hide();
      
      var divQuestion = $("<h3>");
      var divAnswer1 = $("<button>");
      var divAnswer2 = $("<button>");
      var divAnswer3 = $("<button>");
      var divAnswer4 = $("<button>");
      
      
      
      divQuestion.text(cultureQuestions.questions.q1);
      divAnswer1.text(cultureQuestions.answers.q1[0]);
      divAnswer2.text(cultureQuestions.answers.q1[1]);
      divAnswer3.text(cultureQuestions.answers.q1[2]);
      divAnswer4.text(cultureQuestions.answers.q1[3]);

      $(".content").append(divQuestion);
      $(".answerList").append(divAnswer1);
      $(".answerList").append(divAnswer2);
      $(".answerList").append(divAnswer3);
      $(".answerList").append(divAnswer4);

      divAnswer4.on("click", function () {
            newSession.score = newSession.score + 100;
            $(".content").empty();
            $(".answerList").empty();
            secondCultureQuestion();
      })
      $("button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            secondCultureQuestion();
      }) 
   }

   function secondCultureQuestion() {

      var divQuestion = $("<h3>");
      var divAnswer1 = $("<button>");
      var divAnswer2 = $("<button>");
      var divAnswer3 = $("<button>");
      var divAnswer4 = $("<button>");
      
      
      divQuestion.text(cultureQuestions.questions.q2);
      divAnswer1.text(cultureQuestions.answers.q2[0]);
      divAnswer2.text(cultureQuestions.answers.q2[1]);
      divAnswer3.text(cultureQuestions.answers.q2[2]);
      divAnswer4.text(cultureQuestions.answers.q2[3]);

      $(".content").append(divQuestion);
      $(".answerList").append(divAnswer1);
      $(".answerList").append(divAnswer2);
      $(".answerList").append(divAnswer3);
      $(".answerList").append(divAnswer4);

      divAnswer1.on("click", function () {
            newSession.score = newSession.score + 100;
            $(".content").empty();
            $(".answerList").empty();
            thirdCultureQuestion();
      })
      $("button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            thirdCultureQuestion();
      }) 
         
   }

   function thirdCultureQuestion() {
      var divQuestion = $("<h3>");
      var divAnswer1 = $("<button>");
      var divAnswer2 = $("<button>");
      var divAnswer3 = $("<button>");
      var divAnswer4 = $("<button>");
      
      
      divQuestion.text(cultureQuestions.questions.q3);
      divAnswer1.text(cultureQuestions.answers.q3[0]);
      divAnswer2.text(cultureQuestions.answers.q3[1]);
      divAnswer3.text(cultureQuestions.answers.q3[2]);
      divAnswer4.text(cultureQuestions.answers.q3[3]);

      $(".content").append(divQuestion);
      $(".answerList").append(divAnswer1);
      $(".answerList").append(divAnswer2);
      $(".answerList").append(divAnswer3);
      $(".answerList").append(divAnswer4);

      divAnswer4.on("click", function () {
            newSession.score = newSession.score + 100;
            $(".content").empty();
            $(".answerList").empty();
            fourthCultureQuestion();
      })
      $("button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            fourthCultureQuestion();
      }) 
         
   }

   function fourthCultureQuestion() {

      var divQuestion = $("<h3>");
      var divAnswer1 = $("<button>");
      var divAnswer2 = $("<button>");
      var divAnswer3 = $("<button>");
      var divAnswer4 = $("<button>");
      
      
      divQuestion.text(cultureQuestions.questions.q3);
      divAnswer1.text(cultureQuestions.answers.q3[0]);
      divAnswer2.text(cultureQuestions.answers.q3[1]);
      divAnswer3.text(cultureQuestions.answers.q3[2]);
      divAnswer4.text(cultureQuestions.answers.q3[3]);

      $(".content").append(divQuestion);
      $(".answerList").append(divAnswer1);
      $(".answerList").append(divAnswer2);
      $(".answerList").append(divAnswer3);
      $(".answerList").append(divAnswer4);

      divAnswer4.on("click", function () {
            newSession.score = newSession.score + 100;
            $(".content").empty();
            $(".answerList").empty();
            
      })
      $("button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
           
      }) 
         
   }

      
}


function postSession(data) {
      $.post("/api/scores", data).then(getScores);
      
}
function getScores() {
      
      $.get("/api/scores", function (data) {
            var scores = [];
            for (var i = 0; i < data.length; i++){
            scores.push(data[i]);
      
            }
            console.log(scores);
            
      })
}