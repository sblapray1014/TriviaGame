var timeLeft = 46;
var counter;
var myQuestions = [
  {
    question: "Britney Spear's first hit song was?",
    answer: "Baby One More Time",
    possibleAnswers: [
      "Baby One More Time",
      "Toxic",
      "Sometimes",
      "You Drive Me Crazy"
    ]
  },
  {
    question: "Which hit cartoon featured a main character named Eliza?",
    answer: "The Wild Thornberry's",
    possibleAnswers: [
      "The Wild Thornberry's",
      "Hey Arnold!",
      "Rugrat's",
      "Rocco's Modern Life"
    ]
  },

  {
    question: "Who is the love interest of Cory from Boy Meets World?",
    answer: "Topanga",
    possibleAnswers: ["Topanga", "Jessica", "Angelica", "Michelle"]
  },

  {
    question: "What was the name of the Principal from Saved By The Bell?",
    answer: "Mr. Belding",
    possibleAnswers: ["Mr. Wilson", "Mr. Belding", "Ms. Bliss", "Mrs. Morris"]
  },

  {
    question: "What was Tommy's last name in 'Rugrat's'?",
    answer: "Pickles",
    possibleAnswers: ["Jensen", "DeVille", "Pickles", "Finster"]
  }
];

function startQuiz() {
  for (question of myQuestions) {
    addQuestion(question);
  }
  timeLeft = 46;
  counter = setInterval(timer, 1000);
}

function timer() {
  timeLeft--;
  $("#seconds").text(timeLeft);
  console.log(timeLeft);
  if (timeLeft <= 0) {
    clearInterval(counter);
    alert("Shoot, you ran out of time!");
  }
}
function stopTimer() {
  clearTimeout(counter);
}

function addQuestion(question) {
  var div = $("<div>");
  div.addClass("my-5");
  var form = $("<form>");
  var questionText = $("<h2>").text("Question: " + question.question);
  $(questionText).addClass("question-text");
  div.append(questionText);
  div.append(form);
  for (answer of question.possibleAnswers) {
    var radio = $(
      `<input type ="radio" name = "${question.answer}" value="${answer}" />`
    );
    var text = $("<span>").text(" " + answer + " ");
    $(text).addClass("answer-text");
    form.append(radio);
    form.append(text);
  }
  $("#quiz").append(div);
}

function newQuiz() {
  for (question of myQuestions) {
    addQuestion(question);
  }
  timeLeft = 46;
  counter = setInterval(timer, 1000);
}

window.onload = function(event) {
  $("#quiz").hide();
  $("#modal").hide();
  $("#results").hide();
  $("#submit").hide();
  $("#start").on("click", function(event) {
    startQuiz();
    $(this).hide();
    $("#quiz").show();
    $("#submit").show();
  });
};

$("#submit").on("click", function(event) {
  var correct = 0;
  var wrong = 0;
  $("input[type=radio]:checked").each(function() {
    console.log(this.name, this.value);
    if (this.value == this.name && this.checked == true) {
      correct++;
    } else {
      wrong++;
    }
  });
  alert(`
  Nice work! Here are your results!
  Correct: ${correct}
  Wrong: ${wrong}`);
  window.location.href = "https://sblapray1014.github.io/TriviaGame/";
  //   $("#correct").text("Correct: " + correct);
  //   $("#wrong").text("Wrong: " + wrong);
  stopTimer();
});

$("#new").on("click", function(event) {
  $("#start").clear();
  $("#modal")
    .hide()
    .clear();
  $("#quiz").clear();
  $("#submit").clear();
});
