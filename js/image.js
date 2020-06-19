var canvas = document.getElementById("canvasId");
var ctx = canvas.getContext("2d");

var image = new Image();
	image.onload = function () { 
	setInterval(move, 100); // интервал для запуска анимации
};

image.src = 'images/image_1.png';
var x = 10; // 
var y = 10;
function move() { 
	if(x < canvas.width) {
		x += 5;
	}
	else {
		x = 1;
		if (y < 200){
			y += 50;
		}
		else {
			y = 10;
		}
		
	} 
	ctx.clearRect(0, 0, canvas.width, canvas.height); 
	ctx.drawImage(image, x, y, 80, 80);
}