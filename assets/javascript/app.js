

//countdown timer that counts down 

var interval;
var countDown = 5;

interval = setInterval(count, 1000);
console.log(interval);
function count() {
    countDown--;
    $('#countDown').text(countDown);
    //make it stop at 0
    if (countDown === 0) {
        clearInterval(interval);
    }
}

//multiple choice questions 




//reveal number of questions player answers correctly and incorrectly 

var correct = 0;
var incorrect = 0;



//