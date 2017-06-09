var questions = [
  {
    chinese: "网球",
    english: "tennis",
    hint: "Roger Federer"
  },
  {
    chinese: "棒球",
    english: "baseball",
    hint: "Mookie Betts"
  },
  { 
    chinese: "游泳",
    english: "swimming",
    hint: "Michael Phelps"
  },
  {
    chinese: "冰球",
    english: "hockey",
    hint: "Wayne Gretzky"
  },
  {
    chinese: "篮球",
    english: "basketball",
    hint: "Steph Curry"
  },
  {
    chinese: "橄榄球",
    english: "football",
    hint: "Tom Brady"
  },
  {
    chinese: "足球",
    english: "soccer",
    hint: "Lionel Messi"
  },
  { 
    chinese: "乒乓球",
    english: "ping pong",
    hint: "Rhymes with 'sing song'"
  },
  {
    chinese: "长曲棍球",
    english: "lacrosse",
    hint: "Gary Gait"
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
      this.parentElement.style.backgroundColor = "aquamarine";
			document.getElementsByClassName('answer_response')[questionId].style.content = "url(css/correct.png)";
    } else {
      this.parentElement.style.backgroundColor = "indianred";
			document.getElementsByClassName('answer_response')[questionId].style.content = "url(css/incorrect.png)";
    }
  });
}

submitbtn.addEventListener('click', function() {
  if (
    (cards[0].style.backgroundColor == "aquamarine") &&
    (cards[1].style.backgroundColor == "aquamarine") &&
    (cards[2].style.backgroundColor == "aquamarine") &&
    (cards[3].style.backgroundColor == "aquamarine") &&
    (cards[4].style.backgroundColor == "aquamarine") &&
    (cards[5].style.backgroundColor == "aquamarine") &&
    (cards[6].style.backgroundColor == "aquamarine") &&
    (cards[7].style.backgroundColor == "aquamarine") &&
    (cards[8].style.backgroundColor == "aquamarine") 
  ) {
    document.getElementById('correct_submit').style.display = "inline";
		document.getElementById('table').style.opacity = "0.3";
  } else if (
		(cards[0].style.backgroundColor != "aquamarine") ||
    (cards[1].style.backgroundColor != "aquamarine") ||
    (cards[2].style.backgroundColor != "aquamarine") ||
    (cards[3].style.backgroundColor != "aquamarine") ||
    (cards[4].style.backgroundColor != "aquamarine") ||
    (cards[5].style.backgroundColor != "aquamarine") ||
    (cards[6].style.backgroundColor != "aquamarine") ||
    (cards[7].style.backgroundColor != "aquamarine") ||
    (cards[8].style.backgroundColor != "aquamarine") 
	) {
		document.getElementById('incorrect_submit').style.display = "inline";
		document.getElementById('table').style.opacity = "0.3";
	}
});

document.getElementById('back_to_test').addEventListener('click', function() {
	this.parentElement.style.display = "none";
	document.getElementById('table').style.opacity = "1.0";
});