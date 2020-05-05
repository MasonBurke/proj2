//adding this file to make sure that github is linked
var newSession = {
      userName: $(".nameInput").val().trim(),
      category: $(".categorySelected").val(),
      score: 0 

}
var currentScore = $("<div>").val(newSession.score)



$(function() {
      $(".startQuiz").on("click", function() {
            
      })
});


function startQuiz () {
      currentScore.show


}