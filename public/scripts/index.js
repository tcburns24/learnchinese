var banner = document.getElementsByTagName('header')[0];
var animals = document.getElementById('animals');
var colors = document.getElementById('colors');
var sports = document.getElementById('sports');
var careers = document.getElementById('careers');

var topics = [
	{
		chinese: "动物",
		english: "Animals"
	},
	{
		chinese: "颜色",
		english: "Colors"
	},
	{
		chinese: "运动",
		english: "Sports"
	},
	{
		chinese: "事业",
		english: "Careers"
	}
];

function thinBanner() {
	if (document.body.scrollTop > 43) {
		banner.style.height = "70px";
		banner.style.paddingTop = "7px";
		banner.style.fontSize = "24px";
	} else {
		banner.style.height = "200px";
		banner.style.paddingTop = "50px";
		banner.style.fontSize = "44px";
	}
}

function animalPop() {
	if (document.body.scrollTop > 220 &&
			document.body.scrollTop < 340) {
		animals.style.marginLeft = "80px";
		animals.style.marginBottom = "195px";
		animals.style.color = "black";
		animals.style.fontSize = "46px";
	} else if (document.body.scrollTop > 340 ||
						document.body.scrollTop < 220) {
		animals.style.marginLeft = "0px";
		animals.style.marginBottom = "48px";
		animals.style.color = "darkgrey";
		animals.style.fontSize = "30px";
	}
}

function colorPop() {
	if (document.body.scrollTop > 341 &&
			document.body.scrollTop < 460) {
		colors.style.marginLeft = "80px";
		colors.style.marginBottom = "195px";
		colors.style.color = "black";
		colors.style.fontSize = "46px";
	} else if (document.body.scrollTop > 460 ||
						document.body.scrollTop < 341) {
		colors.style.marginLeft = "0px";
		colors.style.marginBottom = "48px";
		colors.style.color = "darkgrey";
		colors.style.fontSize = "30px";
	}
}

function sportPop() {
	if (document.body.scrollTop > 461 &&
			document.body.scrollTop < 580) {
		sports.style.marginLeft = "80px";
		sports.style.marginBottom = "195px";
		sports.style.color = "black";
		sports.style.fontSize = "46px";
	} else if (document.body.scrollTop > 580 ||
						document.body.scrollTop < 461) {
		sports.style.marginLeft = "0px";
		sports.style.marginBottom = "48px";
		sports.style.color = "darkgrey";
		sports.style.fontSize = "30px";
	}
};

function careerPop() {
	if (document.body.scrollTop > 580 &&
			document.body.scrollTop < 680) {
		careers.style.marginLeft = "80px";
		careers.style.marginBottom = "195px";
		careers.style.color = "black";
		careers.style.fontSize = "46px";
	} else if (document.body.scrollTop > 690 ||
						document.body.scrollTop < 620) {
		careers.style.marginLeft = "0px";
		careers.style.marginBottom = "48px";
		careers.style.color = "darkgrey";
		careers.style.fontSize = "30px";
	}
};

window.onscroll = function() {
	thinBanner();
	animalPop();
	colorPop();
	sportPop();
	careerPop();
};


