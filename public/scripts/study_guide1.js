var questions = [
  {
    chinese: "猫",
    english: "cat",
    pic: "/css/pics1/cat.png"
  },
  {
    chinese: "狗",
    english: "dog",
    pic: "/css/pics1/dog.png"
  },
  {
    chinese: "兔子",
    english: "rabbit",
    pic: "/css/pics1/rabbit.png"
  },
  {
    chinese: "狮子",
    english: "lion",
    pic: "/css/pics1/lion.png"
  },
  {
    chinese: "蜘蛛",
    english: "spider",
    pic: "/css/pics1/spider.png"
  },
  {
    chinese: "熊猫",
    english: "panda",
    pic: "/css/pics1/panda.png"
  },
  {
    chinese: "鸟",
    english: "bird",
    pic: "/css/pics1/bird.png"
  },
  {
    chinese: "羊",
    english: "ram",
    pic: "/css/pics1/ram.png"
  },
  {
    chinese: "鸡",
    english: "chicken",
    pic: "/css/pics1/chicken.png"
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
		pic.src = "css/Picture.png";
	}, 100);
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

