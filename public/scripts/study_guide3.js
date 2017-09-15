var themeColors = [
	"#436681",  // light
	"#284c74",  // medium-light
	"#232e67",  // medium
	"#231d65",  // medium-dark
	"#260f45"   // dark
];


var questions = [
  {
    chinese: "网球",
    english: "tennis",
    pic: "/css/pics3/tennis.png"
  },
  {
    chinese: "棒球",
    english: "baseball",
    pic: "/css/pics3/baseball.png"
  },
  { 
    chinese: "游泳",
    english: "swimming",
    pic: "/css/pics3/swimming.png"
  },
  {
    chinese: "冰球",
    english: "hockey",
    pic: "/css/pics3/hockey.png"
  },
  {
    chinese: "篮球",
    english: "basketball",
    pic: "/css/pics3/basketball.png"
  },
  {
    chinese: "橄榄球",
    english: "football",
    pic: "/css/pics3/football.png"
  },
  {
    chinese: "足球",
    english: "soccer",
    pic: "/css/pics3/soccer.png"
  },
  { 
    chinese: "乒乓球",
    english: "ping pong",
    pic: "/css/pics3/pingpong.png"
  },
  {
    chinese: "长曲棍球",
    english: "lacrosse",
    pic: "/css/pics3/lacrosse.png"
  }
];

var next = document.getElementById('next');
var previous = document.getElementById('previous');
var chinese = document.getElementById('chinese');
var english = document.getElementById('english');
var pic = document.getElementById('pic');
var counter = document.getElementById('counter');
var count = (-1);


next.addEventListener('click', function() {
	if (count == 8) {
		count = -1;
	}
	count += 1;
	
	this.value = "Next";
	this.style.backgroundColor = "#57a0ed";
	
	previous.style.display = "inline";
	
	setTimeout(function() {
		counter.textContent = (count+1)+'/'+(questions.length);
	}, 100);
	chinese.textContent = "";
	english.textContent = "";
	pic.src = "";
	
	setTimeout(function() {
		chinese.textContent = questions[count].chinese;
	}, 100);
	
	setTimeout(function() {
		english.textContent = "meaning";
	}, 100);
	
	setTimeout(function() {
		pic.src = "/css/Picture.png";
	}, 10);
});

previous.addEventListener('click', function() {
	if (count == 0) {
		count = 9;
	}
	count -= 1;
	counter.textContent = (count+1)+'/'+(questions.length);
	chinese.textContent = "";
	
	setTimeout(function() {
		chinese.textContent = questions[count].chinese;
	}, 100);
});

english.addEventListener('mouseover', function() {
	this.textContent = questions[count].english;
	this.style.color = "black";
});
english.addEventListener('mouseout', function() {
	this.textContent = "meaning";
	this.style.color = "lightgrey";
});

pic.addEventListener('mouseover', function() {
	this.src = questions[count].pic;
});
pic.addEventListener('mouseout', function() {
	this.src = "/css/Picture.png";
});

