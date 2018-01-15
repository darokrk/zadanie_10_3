//funkcja do poruszenia karuzeli

$(function(){
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 3000);

	function changeSlide(){

		carouselList.animate({'marginLeft':-400}, 2000, moveFirstSlide);

	}

	function moveFirstSlide(){

//znajdzie w liście pierwszy i ostatni element (metoda find)

		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

//doda za ostatnim elementem pierwszy element (metoda after)

		lastItem.after(firstItem);

//zresetuje lewy margines z powrotem na wartość 0 (metoda css)

		carouselList.css({marginLeft:0});
	}

});

//-------------------------------------------------------------