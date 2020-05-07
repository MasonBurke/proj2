//adding this file to make sure that github is linked



var newSession = {
      userName: "",
      quizCategory: "",
      score: 0 

}
var currentScore = $("<div>").val(newSession.score);
var categorySelected = $("#categorySelected");
var userNameInput = $("#userNameInput");
var labelEl = $("label");
var startBtn = $("#startQuiz");
var topBanner = $(".display-4");
var scoreBanner = $(".score")
var sessionScore = newSession.score





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
            q4: 'How many annual holidays does the U.S Federal Government ',
          },
      answers: {
            q1: ['North America', 'South America', 'Asia', 'Africa'], 
            // correct 4
            q2: ['100 Acres', '4,000lbs', '12,000 pizzas', '320 Tons'],
            // correct 1
            q3: ['223', '414', '117', '195'],
            q4: ['13', '22', '39', '10']
          }

}
var artQuestions = {
    
      questions: {
            q1: 'Which famous painter cut off his ear?',
            q2: 'What type of colors are Blue and Yellow?',
            q3: 'Which of the following is considered one of the main 4 Renaissance Artists?',
            q4: 'What artist was struck in the face with a mallet by an envious rival, disfiguring him for life?',
          },
      answers: {
            q1: ['Van Gogh', 'Monet', 'Picasso', 'Michelangelo'], 
           
            q2: ['Primary', 'Secondary', 'Both Primary & Secondary', 'Neither Primary nor Secondary'],
            
            q3: ['Caravaggio', 'Giotto', 'Titian', 'Donatello'],

            q4: ['Van Gogh', 'Monet', 'Picasso', 'Michelangelo']
          }

}

// ------------------------- FUNCTIONS AND CLICK EVENTS BELOW---------------------------------------


$("#startQuiz").on("click", function() {
            newSession.userName = userNameInput.val();
            newSession.quizCategory = categorySelected.val();
            console.log(newSession.userName);
            console.log(newSession.quizCategory);
            startQuiz(newSession.quizCategory);
            
      })


function startQuiz (category) {
      
      
      
      if (category === "Science") {
            scienceQuiz ();

      }
      else if (category === "Culture") {
            cultureQuiz();
      }
      else if (category === "Art") {
            artQuiz();
      }

}

function scienceQuiz (){
      topBanner.empty();
      topBanner.text(newSession.quizCategory + " Time!!")
      scoreBanner.text("Current Score: " + sessionScore);

      firstScienceQuestion();
      console.log(newSession.quizCategory);




function firstScienceQuestion() {
     

            
      console.log("first science question triggered");
      userNameInput.hide();
      categorySelected.hide();
      labelEl.hide();
      startBtn.hide();
      
      var divQuestion = $("<h3>");
      var divAnswer1 = $("<a class='btn btn-secondary btn-lg btn-block q1 button' role='button'>");
      var divAnswer2 = $("<a class='btn btn-secondary btn-lg btn-block q2 button' role='button'>");
      var divAnswer3 = $("<a class='btn btn-secondary btn-lg btn-block q3 button' role='button'>");
      var divAnswer4 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      
      
      
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
      $(".button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            secondScienceQuestion();
      })   
      }
      

function secondScienceQuestion() {
      var sessionScore = newSession.score
      scoreBanner.text("Current Score: " + sessionScore);


      var divQuestion = $("<h3>");
      var divAnswer1 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer2 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer3 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer4 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      
   
      
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
      $(".button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            thirdScienceQuestion();
      }) 

  function thirdScienceQuestion() {
      var sessionScore = newSession.score
      scoreBanner.text("Current Score: " + sessionScore);

      var divQuestion = $("<h3>");
      var divAnswer1 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer2 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer3 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer4 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      
   
      
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
      $(".button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            fourthScienceQuestion();
      }) 


    function fourthScienceQuestion() {
      var sessionScore = newSession.score
      scoreBanner.text("Current Score: " + sessionScore);

      var divQuestion = $("<h3>");
      var divAnswer1 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer2 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer3 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer4 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      
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
                    
                    location.reload();
                    // Reload the page to get the updated list
                    
                  });
            
      });

      divAnswer1.on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            $.ajax("/api/scores", {
                  type: "POST",
                  data: newSession
                }).then(
                  function() {
                    
                    // Reload the page to get the updated list
                    location.reload();
                  });
      });
      divAnswer2.on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            $.ajax("/api/scores", {
                  type: "POST",
                  data: newSession
                      }).then(
                   function() {
                        
                          // Reload the page to get the updated list
                          location.reload();
                        }
                      );
            
      }); 
      divAnswer3.on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            $.ajax("/api/scores", {
                  type: "POST",
                  data: newSession
                }).then(
                  function() {
                    
                    // Reload the page to get the updated list
                    location.reload();
                  });
          
      });
        
  }
}

}
}
function cultureQuiz (){
      topBanner.empty();
      topBanner.text(newSession.quizCategory + " Time!!")

      firstCultureQuestion();


   function firstCultureQuestion() {
      var sessionScore = newSession.score
      scoreBanner.text("Current Score: " + sessionScore);
         
      userNameInput.hide();
      categorySelected.hide();
      labelEl.hide();
      startBtn.hide();
      
      var divQuestion = $("<h3>");
      var divAnswer1 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer2 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer3 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer4 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      
      
      
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
      $(".button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            secondCultureQuestion();
      }) 
   }

   function secondCultureQuestion() {
      var sessionScore = newSession.score
      scoreBanner.text("Current Score: " + sessionScore);

      var divQuestion = $("<h3>");
      var divAnswer1 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer2 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer3 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer4 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      
      
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
      $(".button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            thirdCultureQuestion();
      }) 
         
   }

   function thirdCultureQuestion() {
      var sessionScore = newSession.score
      scoreBanner.text("Current Score: " + sessionScore);
      var divQuestion = $("<h3>");
      var divAnswer1 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer2 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer3 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer4 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      
      
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
      $(".button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            fourthCultureQuestion();
      }) 
         
   }

   function fourthCultureQuestion() { 
      var sessionScore = newSession.score
      scoreBanner.text("Current Score: " + sessionScore);

      var divQuestion = $("<h3>");
      var divAnswer1 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer2 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer3 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer4 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      
      
      divQuestion.text(cultureQuestions.questions.q4);
      divAnswer1.text(cultureQuestions.answers.q4[0]);
      divAnswer2.text(cultureQuestions.answers.q4[1]);
      divAnswer3.text(cultureQuestions.answers.q4[2]);
      divAnswer4.text(cultureQuestions.answers.q4[3]);

      $(".content").append(divQuestion);
      $(".answerList").append(divAnswer1);
      $(".answerList").append(divAnswer2);
      $(".answerList").append(divAnswer3);
      $(".answerList").append(divAnswer4);

      divAnswer4.on("click", function () {
            newSession.score = newSession.score + 100;
            $.ajax("/api/scores", {
                  type: "POST",
                  data: newSession
                }).then(
                  function() {
                    console.log("passed through data of newSession", newSession)
                    location.reload();
                  }
                );
            $(".content").empty();
            $(".answerList").empty();
            
      })
      divAnswer1.on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            $.ajax("/api/scores", {
                  type: "POST",
                  data: newSession
                }).then(
                  function() {
                    
                    // Reload the page to get the updated list
                    location.reload();
                  });
      });
      divAnswer2.on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            $.ajax("/api/scores", {
                  type: "POST",
                  data: newSession
                      }).then(
                   function() {
                        
                          // Reload the page to get the updated list
                          location.reload();
                        }
                      );
            
      }); 
      divAnswer3.on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            $.ajax("/api/scores", {
                  type: "POST",
                  data: newSession
                }).then(
                  function() {
                    
                    // Reload the page to get the updated list
                    location.reload();
                  });
          
      });
         
   }

      
}
function artQuiz() {
      topBanner.empty();
      topBanner.text(newSession.quizCategory + " Time!!")

      firstArtQuestion();


   function firstArtQuestion() {
      var sessionScore = newSession.score
      scoreBanner.text("Current Score: " + sessionScore);
         
      userNameInput.hide();
      categorySelected.hide();
      labelEl.hide();
      startBtn.hide();
      
      var divQuestion = $("<h3>");
      var divAnswer1 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer2 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer3 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer4 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      
      
      
      divQuestion.text(artQuestions.questions.q1);
      divAnswer1.text(artQuestions.answers.q1[0]);
      divAnswer2.text(artQuestions.answers.q1[1]);
      divAnswer3.text(artQuestions.answers.q1[2]);
      divAnswer4.text(artQuestions.answers.q1[3]);

      $(".content").append(divQuestion);
      $(".answerList").append(divAnswer1);
      $(".answerList").append(divAnswer2);
      $(".answerList").append(divAnswer3);
      $(".answerList").append(divAnswer4);

      divAnswer1.on("click", function () {
            newSession.score = newSession.score + 100;
            $(".content").empty();
            $(".answerList").empty();
            secondArtQuestion();
      })
      $(".button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            secondArtQuestion();
      }) 
      
}
function secondArtQuestion() {
      var sessionScore = newSession.score
      scoreBanner.text("Current Score: " + sessionScore);

      var divQuestion = $("<h3>");
      var divAnswer1 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer2 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer3 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer4 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      
      
      
      divQuestion.text(artQuestions.questions.q2);
      divAnswer1.text(artQuestions.answers.q2[0]);
      divAnswer2.text(artQuestions.answers.q2[1]);
      divAnswer3.text(artQuestions.answers.q2[2]);
      divAnswer4.text(artQuestions.answers.q2[3]);

      $(".content").append(divQuestion);
      $(".answerList").append(divAnswer1);
      $(".answerList").append(divAnswer2);
      $(".answerList").append(divAnswer3);
      $(".answerList").append(divAnswer4);

      divAnswer1.on("click", function () {
            newSession.score = newSession.score + 100;
            $(".content").empty();
            $(".answerList").empty();
            thirdArtQuestion();
      })
      $(".button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            thirdArtQuestion();
      }) 

      }

  function thirdArtQuestion() {
      var sessionScore = newSession.score
      scoreBanner.text("Current Score: " + sessionScore);

      var divQuestion = $("<h3>");
      var divAnswer1 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer2 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer3 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer4 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      
      
      
      divQuestion.text(artQuestions.questions.q3);
      divAnswer1.text(artQuestions.answers.q3[0]);
      divAnswer2.text(artQuestions.answers.q3[1]);
      divAnswer3.text(artQuestions.answers.q3[2]);
      divAnswer4.text(artQuestions.answers.q3[3]);

      $(".content").append(divQuestion);
      $(".answerList").append(divAnswer1);
      $(".answerList").append(divAnswer2);
      $(".answerList").append(divAnswer3);
      $(".answerList").append(divAnswer4);

      divAnswer4.on("click", function () {
            newSession.score = newSession.score + 100;
            $(".content").empty();
            $(".answerList").empty();
            fourthArtQuestion();
      })
      $(".button").on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            fourthArtQuestion();
      }) 
        
  }

  function fourthArtQuestion() {
      var sessionScore = newSession.score
      scoreBanner.text("Current Score: " + sessionScore);

      var divQuestion = $("<h3>");
      var divAnswer1 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer2 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer3 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      var divAnswer4 = $("<a class='btn btn-secondary btn-lg btn-block q4 button' role='button'>");
      
      
      
      
      divQuestion.text(artQuestions.questions.q4);
      divAnswer1.text(artQuestions.answers.q4[0]);
      divAnswer2.text(artQuestions.answers.q4[1]);
      divAnswer3.text(artQuestions.answers.q4[2]);
      divAnswer4.text(artQuestions.answers.q4[3]);

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
                    // Reload the page to get the updated list
                    location.reload()
                  });



            
      })
      divAnswer1.on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            $.ajax("/api/scores", {
                  type: "POST",
                  data: newSession
                }).then(
                  function() {
                    
                    // Reload the page to get the updated list
                    location.reload();
                  });
      });
      divAnswer2.on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            $.ajax("/api/scores", {
                  type: "POST",
                  data: newSession
                      }).then(
                   function() {
                        
                          // Reload the page to get the updated list
                          location.reload();
                        }
                      );
            
      }); 
      divAnswer3.on("click", function () {
            $(".content").empty();
            $(".answerList").empty();
            $.ajax("/api/scores", {
                  type: "POST",
                  data: newSession
                }).then(
                  function() {
                    
                    // Reload the page to get the updated list
                    location.reload();
                  });
          
      });
        
  }
}


console.log(newSession.score);

const getScores = () => {
      $.get("/api/scores" , function(data) {
            console.log("Scores:", data);
            if(!data) {
                  console.log("There's no scores or no information in the scores")
                  //call a function that puts a message saying that nobody has played yet
                  //initializeEmpty or something
            } else {
                  console.log(data)
                  //call the put into a table function
                  //initializeTable or something

                  const {art,science,culture} = data;
                  for (const score of science) {
                        console.log(score.score)
                        $("#scienceScore").append(`<p>name: ${score.userName} | Score: ${score.score} | Date: ${score.createdAt}</p>`)
                  }
                  for (const score of art) {
                        $("#artScore").append(`<p>name: ${score.userName} | Score: ${score.score} | Date: ${score.createdAt}</p>`)
                  }
                  for (const score of culture) {
                        $("#cultureScore").append(`<p>name: ${score.userName} | Score: ${score.score} | Date: ${score.createdAt}</p>`)
                  }
            }
      })
}
getScores();