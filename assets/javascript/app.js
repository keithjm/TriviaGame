

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
    var questionList = [q1, q2, q3];
    var currentQuestionPos = 0;
    
    startGame();

    function qTimer() {
        clock = setInterval(thirtySeconds, 1000);

        function thirtySeconds() {
            if (counter === 0) {
                
                clearInterval(clock);
            }
            if (counter > 0) {
                counter--;
            }
            $("#countdown").html(counter);
        }
    }

    function startGame() {
        $("#trivia-display").empty();
        var startButton = $("<button>").attr("class", "btn btn-default").text("Start").attr("id", "start-button");
        $("#trivia-display").append(startButton);

        $("#start-button").on("click", function() {
            newQuestion(q1);
        })
    }

    //Checking the clicked response against the correct answer
    function checkAnswer(qValueSel, jsonQ) {

        $("#trivia-display").empty();
        if(qValueSel == jsonQ.answerPos) {
            $("#trivia-display").html("<h1>You are correct</h1>");
            console.log("correct");
        } else {
            console.log("incorrect");
            $("#trivia-display").html("<h1>You are incorrect</h1>");
            $("#trivia-display").append("The correct answer is " + jsonQ.choices[jsonQ.answerPos]);
        }
        setTimeout(function() {
            console.log("nxt q timeout");
            if(currentQuestionPos < questionList.length - 1) {
                currentQuestionPos ++;
                console.log("inside if statement current questionspos: " + currentQuestionPos)
                newQuestion(questionList[currentQuestionPos]);
            } else {

            }
        }, 5000);
    }

    //Delivers a new questions with the parameter or a JSON object containing quesiton properties
    function newQuestion(questionJSON) {

        //$("").empty();
        $("#trivia-display").empty();
        var qDiv = $("<div>").text(questionJSON.question);
        var choiceDiv = $("<div>").attr("class", "btn-group-vertical");
        choiceDiv.attr("role", "group");
        choiceDiv.attr("aria-label", "....");
        
        //First Choice
        var choiceButton = $("<button>").attr("type", "button");
        choiceButton.attr("class", "btn btn-default choice");
        choiceButton.attr("value", 0);
        choiceButton.text(questionJSON.choices[0]);
        choiceDiv.append(choiceButton); 

        //Second Choice
        var choiceButton = $("<button>").attr("type", "button");
        choiceButton.attr("class", "btn btn-default choice");
        choiceButton.attr("value", 1);
        choiceButton.text(questionJSON.choices[1]);
        choiceDiv.append(choiceButton); 

        //Third Choice
        var choiceButton = $("<button>").attr("type", "button");
        choiceButton.attr("class", "btn btn-default choice");
        choiceButton.attr("value", 2);
        choiceButton.text(questionJSON.choices[2]);
        choiceDiv.append(choiceButton); 

        //Fourth Choice
        var choiceButton = $("<button>").attr("type", "button");
        choiceButton.attr("class", "btn btn-default choice");
        choiceButton.attr("value", 3);
        choiceButton.text(questionJSON.choices[3]);
        choiceDiv.append(choiceButton); 

        $("#trivia-display").append(qDiv, choiceDiv);

        $(".choice").on("click", function(){ 
            console.log("The value is " + this.value);
            checkAnswer(this.value, questionJSON);
        });
    }

});