var themeColors = [
	"#436681",  // light
	"#284c74",  // medium-light
	"#232e67",  // medium
	"#231d65",  // medium-dark
	"#260f45"   // dark
];


var questions = [
  {
    chinese: "红",
    english: "red",
    pic: "/css/pics2/red.png"
  },
  {
    chinese: "蓝",
    english: "blue",
    pic: "/css/pics2/blue.png"
  },
  { 
    chinese: "黑",
    english: "black",
    pic: "/css/pics2/black.png"
  },
  {
    chinese: "紫",
    english: "purple",
    pic: "/css/pics2/purple.png"
  },
  {
    chinese: "白",
    english: "white",
    pic: "/css/pics2/white.png"
  },
  {
    chinese: "黄",
    english: "yellow",
    pic: "/css/pics2/yellow.png"
  },
  {
    chinese: "咖啡",
    english: "brown",
    pic: "/css/pics2/brown.png"
  },
  { 
    chinese: "灰",
    english: "grey",
    pic: "/css/pics2/grey.jpg"
  },
  {
    chinese: "绿",
    english: "green",
    pic: "/css/pics2/green.png"
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


// TO-DO:
// 1) Assign theme colors to an array
// 2) Refactor transitions in CSS so you can control transitions.
// 3) Create level 2 study guide page. 

