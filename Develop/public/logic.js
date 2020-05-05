//adding this file to make sure that github is linked

import { readdir } from "fs";


var newSession = {
      userName: "",
      category: "",
      score: 0 

}
var currentScore = $("<div>").val(newSession.score)


$(".startQuiz").on("click", function() {
            newSession.userName = $(".nameInput").val().trim();
            newSession.category = $(".categorySelected").val();
            window.location.href="/questions.html"
            


            
      })

function startQuiz (category) {
      

      


}