
var slideIndex = 0;
// Tells which slide it's on
var currentSlideIndex = 0;
// An Array to hold all the slides
var slideArray = [];

function Slide(title, subtitle, background, link ) {
	this.title = title;
	this.subtitle = subtitle;
	this.background = background;
	this.link = link;

	this.id = "slide" + slideIndex;
	slideIndex++;
	slideArray.push(this);
}


var walkingDead = new Slide(
	"White House says its not responsable for recent missile attacks on Iran", 
	"", 
	"https://source.unsplash.com/dbc9DGSJzKo", 
	"#"
);

var bigBang = new Slide(
	"Trump launches 2024 bid for presidency", 
	"", 
	"https://source.unsplash.com/O7e-kL4o3RA", 
	"#"
);

var LastMan = new Slide(
	"Years of major renovations at the capitol are complete", 
	"", 
	"https://source.unsplash.com/E94nZORR5qc", 
	"#"
);

function buildSlider(){
	var myHTML;
	

	for(var i = 0; i < slideArray.length; i++) {
		
		myHTML += "<div id='" + slideArray[i].id + 
		"' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" + 
		"<div class='slideOverlay'>" + 
		"<h1>" + slideArray[i].title + "</h1>" +
		"<h4>" + slideArray[i].subtitle + "</h4>" +
		"<a href='" + slideArray[i].link + "' target='_blank'>Open Article</a>" +
		"</div>" +
		"</div>";	
		
	}
	

	document.getElementById("mySlider").innerHTML = myHTML;
		
	document.getElementById("slide" + currentSlideIndex).style.left = 0;

}

buildSlider();



function prevSlide(){

	var nextSlideIndex;
	if (currentSlideIndex === 0 ) {
		nextSlideIndex = slideArray.length - 1;
	} else {
		nextSlideIndex = currentSlideIndex - 1;
	}	
	

	document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;

	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");

	currentSlideIndex = nextSlideIndex;
}


function nextSlide(){

	var nextSlideIndex;

	if (currentSlideIndex === (slideArray.length - 1) ) {
		nextSlideIndex = 0;
	} else {

		nextSlideIndex = currentSlideIndex + 1;
	}	
	

	document.getElementById("slide" + nextSlideIndex).style.left = "100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	

	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");

	currentSlideIndex = nextSlideIndex;
}