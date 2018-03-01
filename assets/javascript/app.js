$(document).ready(function() {

//countdown timer that counts down 

var interval;
var countDown = 20;
var triviaContent = {
    one: {
       question : "What does the \'E'\ stand for in E-Corp?",
       answer: "evil" 
    },
    two: {
        question : "In what city was the series filmed?",
        answer : "New York"
    },
    three: {
        question : "What group is Fsociety based on?",
        answer : "Anonymous"
    },
    four: {
        question : "What OS does Elliot primarily use?",
        answer : "Kali Linux"
    },
    five: {
        question : "What is Elliot's fish's name?",
        answer : "Qwerty"
    }
}
// how to push objects within objects into an array
// for (var i=0; i<triviaContent.length;i++) {
//     answersArray = answersArray.push(triviaContent.)

var answersArray = [
    "Evil",
    "New York",
    "Anonymous",
    "Kali Linux",
    "Qwerty"
]

$('#question1').text(triviaContent.one.question);
$('#question2').text(triviaContent.two.question);
$('#question3').text(triviaContent.three.question);
$('#question4').text(triviaContent.four.question);
$('#question5').text(triviaContent.five.question);



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

//create an array and populate with the user selected answers when the user clicks 'Submit' button 
var selAnswerArr = [];
$('#submitButton').click(function() {

for (var i=0; i<answersArray.length; i++) {
//push the selected answer into the selAnswerArr
$('input[name=answer'+[i+1]+']:checked').each(function(){
    console.log(i);
    selAnswerArr.push($(this).val());
});
};
    
    console.log(selAnswerArr);
    console.log("select =" + selAnswerArr.length);
    console.log("answer length = " + answersArray.length);

    //compare the selected answer array to the answers array by index; increment correctScore if match, wrongScore if no match.
    for (var i=0; i<answersArray.length; i++) {
    if (selAnswerArr.length != answersArray.length) {
        $('#messageBox').text("Please answer all questions before submitting.");
        selAnswerArr = [];
        console.log(selAnswerArr);
        return;
        
    } else if (selAnswerArr[i] === answersArray[i]) {
            correctScore++;
            $('#correctScore').text(correctScore);
    } else {
            wrongScore++;
            $('#wrongScore').text(wrongScore);
    }
};

if (selAnswerArr.length === answersArray.length) {
    clearInterval(interval);
    disableSubmitButton();
    $('#messageBox').text("Check out your results!");
}

});

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

});


