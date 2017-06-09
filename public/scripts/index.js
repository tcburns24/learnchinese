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
]

function thinBanner() {
	if (document.body.scrollTop > 43)  {
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
	if (document.body.scrollTop > 290 &&
			document.body.scrollTop < 400) {
		animals.style.marginLeft = "80px";
		animals.style.marginBottom = "195px";
		animals.style.color = "black";
		animals.style.fontSize = "46px";
	} else if (document.body.scrollTop > 400 ||
						document.body.scrollTop < 290) {
		animals.style.marginLeft = "0px";
		animals.style.marginBottom = "48px";
		animals.style.color = "darkgrey";
		animals.style.fontSize = "30px";
	}
}

function colorPop() {
	if (document.body.scrollTop > 400 &&
			document.body.scrollTop < 510) {
		colors.style.marginLeft = "80px";
		colors.style.marginBottom = "195px";
		colors.style.color = "black";
		colors.style.fontSize = "46px";
	} else if (document.body.scrollTop > 510 ||
						document.body.scrollTop < 400) {
		colors.style.marginLeft = "0px";
		colors.style.marginBottom = "48px";
		colors.style.color = "darkgrey";
		colors.style.fontSize = "30px";
	}
}

function sportPop() {
	if (document.body.scrollTop > 510 &&
			document.body.scrollTop < 620) {
		sports.style.marginLeft = "80px";
		sports.style.marginBottom = "195px";
		sports.style.color = "black";
		sports.style.fontSize = "46px";
	} else if (document.body.scrollTop > 620 ||
						document.body.scrollTop < 510) {
		sports.style.marginLeft = "0px";
		sports.style.marginBottom = "48px";
		sports.style.color = "darkgrey";
		sports.style.fontSize = "30px";
	}
}

function careerPop() {
	if (document.body.scrollTop > 620 &&
			document.body.scrollTop < 730) {
		careers.style.marginLeft = "80px";
		careers.style.marginBottom = "195px";
		careers.style.color = "black";
		careers.style.fontSize = "46px";
	} else if (document.body.scrollTop > 730 ||
						document.body.scrollTop < 620) {
		careers.style.marginLeft = "0px";
		careers.style.marginBottom = "48px";
		careers.style.color = "darkgrey";
		careers.style.fontSize = "30px";
	}
}

window.onscroll = function() {
	thinBanner();
	animalPop();
	colorPop();
	sportPop();
	careerPop();
}


