var questions = [
  {
    chinese: "猫",
    english: "cat",
    hint: "meow"
  },
  {
    chinese: "狗",
    english: "dog",
    hint: "woof"
  },
  {
    chinese: "兔子",
    english: "rabbit",
    hint: "I eat carrots"
  },
  {
    chinese: "狮子",
    english: "lion",
    hint: "king of the jungle"
  },
  {
    chinese: "蜘蛛",
    english: "spider",
    hint: "I have 8 legs"
  },
  {
    chinese: "熊猫",
    english: "panda",
    hint: "I eat bamboo"
  },
  {
    chinese: "鸟",
    english: "bird",
    hint: "I can fly"
  },
  {
    chinese: "羊",
    english: "ram",
    hint: "LA's NFL team"
  },
  {
    chinese: "鸡",
    english: "chicken",
    hint: "tastes like ___"
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
      this.parentElement.style.backgroundColor = "springgreen";
			document.getElementsByClassName('answer_response')[questionId].style.content = "url(/css/correct.png)";
    } else {
      this.parentElement.style.backgroundColor = "indianred";
			document.getElementsByClassName('answer_response')[questionId].style.content = "url(/css/incorrect.png)";
    }
  });
}

submitbtn.addEventListener('click', function() {
  if (
    (cards[0].style.backgroundColor == "springgreen") &&
    (cards[1].style.backgroundColor == "springgreen") &&
    (cards[2].style.backgroundColor == "springgreen") &&
    (cards[3].style.backgroundColor == "springgreen") &&
    (cards[4].style.backgroundColor == "springgreen") &&
    (cards[5].style.backgroundColor == "springgreen") &&
    (cards[6].style.backgroundColor == "springgreen") &&
    (cards[7].style.backgroundColor == "springgreen") &&
    (cards[8].style.backgroundColor == "springgreen") 
  ) {
    document.getElementById('correct_submit').style.display = "inline";
		document.getElementById('table').style.opacity = "0.3";
  } else if (
		(cards[0].style.backgroundColor != "springgreen") ||
    (cards[1].style.backgroundColor != "springgreen") ||
    (cards[2].style.backgroundColor != "springgreen") ||
    (cards[3].style.backgroundColor != "springgreen") ||
    (cards[4].style.backgroundColor != "springgreen") ||
    (cards[5].style.backgroundColor != "springgreen") ||
    (cards[6].style.backgroundColor != "springgreen") ||
    (cards[7].style.backgroundColor != "springgreen") ||
    (cards[8].style.backgroundColor != "springgreen") 
	) {
		document.getElementById('incorrect_submit').style.display = "inline";
		document.getElementById('table').style.opacity = "0.3";
	}
});

document.getElementById('back_to_test').addEventListener('click', function() {
	this.parentElement.style.display = "none";
	document.getElementById('table').style.opacity = "1.0";
});