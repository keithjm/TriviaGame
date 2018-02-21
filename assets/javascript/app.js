

$( document ).ready(function() {

q1 = {
    "question":"In what year did the first human walk on the Moon?",
    "choices": ["1969", "1961", "1973","1974"],
    "answerPos": 0
};


q2 = {
    "question":"What is the highest point in NC",
    "choices": ["Grandfather Mountain", "Mount Mitchell", "Mount Pisgah","Roan Mountain"],
    "answerPos": 1
};


q3 = {
    "question": "How many national championships does The University of Alabama Football program have?",
    "choices": ["10", "12", "15","17"],
    "answerPos": 3
};
    startGame();    
    
    $(".choice").on("click", function(){ 
        console.log("The value is " + $(this).val());
    });

    function startGame() {
        $("#trivia-display").empty();
        var startButton = $("<button>").attr("class", "btn btn-default").text("Start");
        $("#trivia-display").append(startButton);
    }

    function newQuestion(questionJSON) {

        //$("").empty();
        $("#trivia-display").empty();
        var qDiv = $("<div>").text(questionJSON.question);
        var choiceDiv = $("<div>").attr("class", "btn-group-vertical");
        choiceDiv.attr("role", "group");
        choiceDiv.attr("aria-label", "....");
        
        
        console.log(questionJSON.question);
        
        for(var i = 0; i < questionJSON.choices.length;  i++) {
            //choiceDiv.append(questionJSON.choices);
            var choiceButton = $("<button>").attr("type", "button");
            choiceButton.attr("class", "btn btn-default choice");
            choiceButton.attr("value", i);
            choiceButton.text(questionJSON.choices[i]);
            choiceDiv.append(choiceButton); 
        }

        $("#trivia-display").append(qDiv, choiceDiv);
    }
    newQuestion(q1);
});