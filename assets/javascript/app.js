$(document).ready(function() {



//countdown timer that counts down 

var interval;
var countDown = 5;
var triviaContent = {
    one: {
       question : "What color is the rose?",
       answer: "red" 
    },
    two: {
        question : "What color is the sky?",
        answer : "blue"
    },
    three: {
        question : "What color is Pikachu?",
        answer : "yellow"
    }
}
var answers = [
    "red",
    "blue",
    "yellow"
]

$('#question1').text(triviaContent.one.question);
$('#question2').text(triviaContent.two.question);
$('#question3').text(triviaContent.three.question);



//.text to show the first count of counter before counting down
$('#countDown').text(countDown);
interval = setInterval(count, 1000);

function count() {
    
    countDown--;
    $('#countDown').text(countDown);
    //make it stop at 0
    if (countDown === 0) {
        clearInterval(interval);
        disableSubmitButton();
        console.log("You ran out of time!");
    }
}

//multiple choice questions 

$('#submitButton').click(function() {


var selAnswer = $('input[name=answer1]:checked').val();
console.log(selAnswer);
    
if (selAnswer === answers[0]) {
    correctScore++;
    $('#correctScore').text(correctScore);
}

}
})
//reveal number of questions player answers correctly and incorrectly 

var correctScore = 0;
var wrongScore = 0;

$('#correctScore').text(correctScore);
$('#wrongScore').text(wrongScore);

function disableSubmitButton() {
    $('#submitButton').prop("disabled", true);
}

function enableSubmitButton() {
    $('#submitButton').prop("disabled", false);
}







})
//