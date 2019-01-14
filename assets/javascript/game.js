
$(document).ready(function(){

var wins = 0;
var loss = 0;
var totalScore = 0;


    var randomNumber = Math.floor(Math.random() * (120-19) + 19);
    $("#randomnumber").text(randomNumber)


    var crystal1 = Math.floor(Math.random() * (12-1) +1);
    var crystal2 = Math.floor(Math.random() * (12-1) +1);
    var crystal3 = Math.floor(Math.random() * (12-1) +1);
    var crystal4 = Math.floor(Math.random() * (12-1) +1);

    $(".win").text(wins);
    $(".loss").text(loss);

    function reset() {
        randomNumber =Math.floor(Math.random() * (120-19) +19);
        $("#randomnumber").text(randomNumber)
        crystal1 = Math.floor(Math.random() * (12-1) +1);
        crystal2 = Math.floor(Math.random() * (12-1) +1);
        crystal3 = Math.floor(Math.random() * (12-1) +1);
        crystal4 = Math.floor(Math.random() * (12-1) +1);
        totalScore = 0;
        $("#finaltotal").text(totalScore);


    }
    function win(){
        wins ++;
        $('.win').text(wins)
        reset();
    }
function lose() {
    loss++;
    $(".loss").text(loss)
    reset()
}

    $("#crystal1").on ("click", function(){
        totalScore = totalScore + crystal1;
        $("#finaltotal").text(totalScore)

        if ( totalScore === randomNumber) {
            win();
        }
        else if ( totalScore > randomNumber){
            lose();
        }
    })

    $("#crystal2").on ("click", function(){
        totalScore = totalScore + crystal2;
        $("#finaltotal").text(totalScore)

        if ( totalScore === randomNumber) {
            win();
        }
        else if ( totalScore > randomNumber){
            lose();
        }
    })

    $("#crystal3").on ("click", function(){
        totalScore = totalScore + crystal3;
        $("#finaltotal").text(totalScore)

        if ( totalScore === randomNumber) {
            win();
        }
        else if ( totalScore > randomNumber){
            lose();
        }
    })

    $("#crystal4").on ("click", function(){
        totalScore = totalScore + crystal4;
        $("#finaltotal").text(totalScore)

        if ( totalScore === randomNumber) {
            win();
        }
        else if ( totalScore > randomNumber){
            lose();
        }
    })})
