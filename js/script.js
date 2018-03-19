//alert("Javescript is loaded in");
//console.log("Javescript is loaded in")

/*
	Multi line comment out
	Can use as many lines as you want between the two tags
*/

/*JavaScript
document.getElementById('id')
jQuery
$("#id")*/

$(document).ready(function(){
/* Selecting Things
	$("div") //all divs
	$(".box") //all of that class
	$("#box1") //all of that id
	$("div#box1") //find div with id box1
	$("ul li")
*/

/* Common Events
	click() click
	dblclick() double click
	mouseover() mouse is over it
	mouseleave() mouse leaves it
	hover() a mix of over and leave
	mousedown() when we click down
	mouseup() lift your finger up
	keydown() when you press a key
	keyup() when you left your finger
	focus() when you enter into a form element
	blur() when you leave the form element
	submit() when you submit a form
	ready()
*/

/* Common Effects [changes elements]
	event.preventDefault() do not do the normal

*/

	$("#myform").submit(function(){
		event.preventDefault();
		console.log("do this instead");
	});

	$("#box1").click(function(){
		console.log("test");
	});

	//$("#box1").click(function(){
		//$("#box2").hide();
		//$("#box2").show();
		//$("#box2").toggle(5000);
		//$("#box2").fadeOut(5000);
		//$("#box2").fadeIn(5000);
		//$("#box2").addClass("wider");
		//$("#box2").removeClass("wider");
		//$("#box2").toggleClass("wider");
		//$("#box2").css("background-color", "yellow");
		//$("#box2").css({"background-color":"pink","width":"1000px"});
	//})

	/*$("#box1").click(function(){
		$("#box1").toggleClass("higher");
	});

	$("#box2").click(function(){
		$("#box2").toggleClass("higher");
	});*/

	/*$(".box").click(function(){
		$(this).toggleClass("higher");
	});*/

	$("#button").click(function(){
		//$("#paragraph").append(" This text adds to the end.");
		//$("#paragraph").prepend("This text adds to the front");
		//$("#paragraph").empty();
		//$("#paragraph").remove();
		// $("#paragraph").text("Overide the text");
		// $("#paragraph").empty();
		$("#list").append("<li class='listColor'>This is a list item</li>");
		$("body").append("<div class='box blue'></div>")
	});
});
