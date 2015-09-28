$(document).ready(function(){
	$(".answer").hide();

	$("#one").click(function(){
			$("#1").toggle(400,document.getElementById('one').innerHTML="(+) 1. Hi, I'm {Name}.")
		}
	);
	
	$("#two").click(function(){
		$("#2").toggle(400,document.getElementById('two').innerHTML="(+) 2. So are you a student?")
	});
	
	$("#three").click(function(){
		$("#3").toggle(400,document.getElementById('three').innerHTML="(+) 3. Wow, you must be crazy smart!")
	});
	
	$("#four").click(function(){
		$("#4").toggle(400,document.getElementById('four').innerHTML="(+) 4. So what are your plans for the future?")
	});
	
	$("#five").click(function(){
		$("#5").toggle(400,document.getElementById('five').innerHTML="(+) 5. Isn't that impossible?")
	});
});

function do_the_thing (url) {
	$("#foo").load("url");
	//blank paragraph now holds the url's content
	var num = foo.links.length;
	document.getElementById('foo').innerHTML=num;
}