//adding this file to make sure that github is linked


var newSession = {
      userName: "",
      category: "",
      score: 0 

}
var currentScore = $("<div>").val(newSession.score)



$(function() {
      $(".startQuiz").on("click", function() {
            newSession.userName = $(".nameInput").val().trim();
            newSession.category = $(".categorySelected").val();

            
      })
});


function startQuiz () {
      


}