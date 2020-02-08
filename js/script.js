const animatedClassName = "animated";
const ELEMENTS = document.querySelectorAll(".container_grid");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
	let addAnimation = false;
	element.addEventListener("mouseover", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
		if (addAnimation) element.classList.add(animatedClassName);
	});

	element.addEventListener("mouseout", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
	});
});

var c = document.getElementById("lineDraw");
window.addEventListener("resize", drawFunction);
drawFunction();



// var elems = document.querySelectorAll(".hvr-underline-from-center");
// [].forEach.call(elems, function(el) {
//     el.classList.remove("hvr-underline-from-center");
// });



function drawFunction() {
	var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	if (screenWidth < 950) {c.width  = 300; c.height = 670;}
					  else {c.width  = 790;c.height = 450;}
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.setLineDash([10, 15]);
	ctx.lineWidth = 5;
	ctx.lineCap = 'round';
	ctx.strokeStyle = "purple"; // OBJ - PICK
	if (screenWidth < 950) {
		ctx.moveTo(80, 10);
		ctx.bezierCurveTo(-20,100,0,300,270,400);
	} else {
		ctx.moveTo(70, 150);
		ctx.bezierCurveTo(280,200,200,500,450,290);
	}
	ctx.stroke();

	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.setLineDash([10, 15]);
	ctx.lineWidth = 5;
	ctx.strokeStyle = "purple"; // DEL - PICK
	if (screenWidth < 950) {
		ctx.moveTo(250, 170);
		ctx.bezierCurveTo(100,250,350,300,250,370);
	} else {
		ctx.moveTo(370, 50);
		ctx.bezierCurveTo(650,200,100,150,450,320);
	}
	ctx.stroke();

	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.setLineDash([10, 15]);
	ctx.lineWidth = 5;
	ctx.strokeStyle = "purple"; // SERV - PICK
	if (screenWidth < 950) {
		ctx.moveTo(250, 380);
		ctx.bezierCurveTo(50,400,100,480,120,570);
	} else {
		ctx.moveTo(720, 120); // SERV - PICK
		ctx.bezierCurveTo(520,400,500,270,450,350);
	}
	ctx.stroke();
}

document.getElementById("SendEmail").addEventListener("click", popUpEmail);
function popUpEmail () { window.open('mailto:rgsport66@gmail.com?subject=Online Objednavka&body='); }
