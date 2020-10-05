var timeEl = document.querySelector("#seconds");
	var secondsLeft = 30


	var score = 0
	score.textContent = count;
	var count = localStorage.getItem("count");
	

        // hides the question until start quiz is clicked
		$(document).ready(function() {
    	$('.question1').hide();
        $('.question2').hide();
        $('.question3').hide();
        $('.question4').hide();
		});

   // start button is clicked, shows the first question and hides start button
      $('#btn2').on('click', function() {
			$('.question1').show();
			$('#btn2').hide();
			setTime();
		});

		function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
	timeEl.textContent = secondsLeft + ' Seconds Left'

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
function sendMessage() {
  timeEl.textContent = "Times Up!";
  localStorage.setItem("secondsLeft", secondsLeft);
			window.location.href = "highscores.html";


}


        // When an answer is clicked, the question gets hidden and the next question is shown.
		$('#btnA').on('click', function() {
			$('.question1').hide();
            $('.question2').show();
            

		});

        $('#btnB').on('click', function(){
			$('.question1').hide();
            $('.question2').show();
			secondsLeft=secondsLeft-5

		});

        $('#btnC').on('click', function(){
			$('.question1').hide();
            $('.question2').show();
			secondsLeft=secondsLeft-5
		});
// show question 2
        $('#btn2A').on('click', function() {
			$('.question2').hide();
            $('.question3').show();
			secondsLeft=secondsLeft-5
		});

        $('#btn2B').on('click', function(){
			$('.question2').hide();
            $('.question3').show();
			secondsLeft=secondsLeft-5
		});

        $('#btn2C').on('click', function(){
			$('.question2').hide();
            $('.question3').show();
            
		});
// show question 3
        $('#btn3A').on('click', function() {
			$('.question3').hide();
            $('.question4').show();
			secondsLeft=secondsLeft-5
		});

        $('#btn3B').on('click', function(){
			$('.question3').hide();
            $('.question4').show();
			secondsLeft=secondsLeft-5
		});

        $('#btn3C').on('click', function(){
			$('.question3').hide();
            $('.question4').show();
            
		});
// show question 4
        $('#btn4A').on('click', function() {
			$('.question3').hide();
            $('.question4').show();
			secondsLeft=secondsLeft-5
		});

        $('#btn4B').on('click', function(){
			$('.question3').hide();
            $('.question4').show();
            
		});

        $('#btn4C').on('click', function(){
			$('.question3').hide();
            $('.question4').show();
			secondsLeft=secondsLeft-5
		});

// End Questions, show score
		btn4A.addEventListener('click', function() {
			localStorage.setItem("secondsLeft", secondsLeft);
			window.location.href = "highscores.html";
		})
		
		btn4B.addEventListener('click', function() {
			localStorage.setItem("secondsLeft", secondsLeft);
			window.location.href = "highscores.html";
		})
		
		btn4C.addEventListener('click', function() {
			localStorage.setItem("secondsLeft", secondsLeft);
			window.location.href = "highscores.html";
		})
		


