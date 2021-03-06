var questions = [
  {
    chinese: "医生",
    english: "doctor",
    hint: "Hi everybody!"
  },
  {
    chinese: "律师",
    english: "lawyer",
    hint: "Objection!"
  },
  { 
    chinese: "演员",
    english: "actor",
    hint: "Brad Pitt"
  },
  {
    chinese: "警官",
    english: "police officer",
    hint: "donut lover"
  },
  {
    chinese: "老师",
    english: "teacher",
    hint: "low salaries"
  },
  {
    chinese: "校长",
    english: "principal",
    hint: "superintendent's punching bag"
  },
  {
    chinese: "黑手党成员",
    english: "mobster",
    hint: "The Godfather"
  },
  { 
    chinese: "酒保",
    english: "bartender",
    hint: "'a shot & a brew'"
  },
  {
    chinese: "教授",
    english: "professor",
    hint: "college teacher"
  }
];

var cards = document.getElementsByClassName('card');
var characters = document.getElementsByClassName('character');
var count = 0;
var inputs = document.getElementsByClassName('input');
var buttons = document.getElementsByClassName('checkbtn');
var checkbox = document.getElementById('checkbox');
var submitbtn = document.getElementById('submitbtn');

for (var x=0; x<questions.length; x++) {
  characters[x].dataset.question = x;
  characters[x].innerHTML = questions[x].chinese;
  
  characters[x].addEventListener('mouseover', function() {
    var questionId = this.dataset.question;
    if (checkbox.checked === true) {
			this.style.fontSize = "24px";
      this.innerHTML = questions[questionId].hint;
    }
  });
  
  characters[x].addEventListener('mouseleave', function() {
		this.style.fontSize = "32px";
    var questionId = this.dataset.question;
    this.innerHTML = questions[questionId].chinese;
  });
}

for (var x=0; x<questions.length; x++) {
  buttons[x].dataset.question = x;
  buttons[x].addEventListener('click', function() {
    var questionId = this.dataset.question;
    if (inputs[questionId].value.toLowerCase() == questions[questionId].english.toLowerCase()) {
      this.parentElement.style.backgroundColor = "aqua";
			document.getElementsByClassName('answer_response')[questionId].style.content = "url(/css/correct.png)";
    } else {
      this.parentElement.style.backgroundColor = "indianred";
			document.getElementsByClassName('answer_response')[questionId].style.content = "url(/css/incorrect.png)";
    }
  });
}

submitbtn.addEventListener('click', function() {
  if (
    (cards[0].style.backgroundColor == "aqua") &&
    (cards[1].style.backgroundColor == "aqua") &&
    (cards[2].style.backgroundColor == "aqua") &&
    (cards[3].style.backgroundColor == "aqua") &&
    (cards[4].style.backgroundColor == "aqua") &&
    (cards[5].style.backgroundColor == "aqua") &&
    (cards[6].style.backgroundColor == "aqua") &&
    (cards[7].style.backgroundColor == "aqua") &&
    (cards[8].style.backgroundColor == "aqua") 
  ) {
    document.getElementById('correct_submit').style.display = "inline";
		document.getElementById('table').style.opacity = "0.3";
  } else if (
		(cards[0].style.backgroundColor != "aqua") ||
    (cards[1].style.backgroundColor != "aqua") ||
    (cards[2].style.backgroundColor != "aqua") ||
    (cards[3].style.backgroundColor != "aqua") ||
    (cards[4].style.backgroundColor != "aqua") ||
    (cards[5].style.backgroundColor != "aqua") ||
    (cards[6].style.backgroundColor != "aqua") ||
    (cards[7].style.backgroundColor != "aqua") ||
    (cards[8].style.backgroundColor != "aqua") 
	) {
		document.getElementById('incorrect_submit').style.display = "inline";
		document.getElementById('table').style.opacity = "0.3";
	}
});

document.getElementById('back_to_test').addEventListener('click', function() {
	this.parentElement.style.display = "none";
	document.getElementById('table').style.opacity = "1.0";
});