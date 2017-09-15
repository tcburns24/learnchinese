var themeColors = [
	"#436681",  // light
	"#284c74",  // medium-light
	"#232e67",  // medium
	"#231d65",  // medium-dark
	"#260f45"   // dark
];


var questions = [
  {
    chinese: "医生",
    english: "doctor",
    pic: "/css/pics4/doctor.png"
  },
  {
    chinese: "律师",
    english: "lawyer",
    pic: "/css/pics4/lawyer.png"
  },
  { 
    chinese: "演员",
    english: "actor",
    pic: "/css/pics4/actor.png"
  },
  {
    chinese: "警官",
    english: "police officer",
    pic: "/css/pics4/police_officer.png"
  },
  {
    chinese: "老师",
    english: "teacher",
    pic: "/css/pics4/teacher.png"
  },
  {
    chinese: "校长",
    english: "principal",
    pic: "/css/pics4/principal.png"
  },
  {
    chinese: "黑手党成员",
    english: "mobster",
    pic: "/css/pics4/mobster.png"
  },
  { 
    chinese: "酒保",
    english: "bartender",
    pic: "/css/pics4/bartender.png"
  },
  {
    chinese: "教师",
    english: "professor",
    pic: "/css/pics4/professor.png"
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

