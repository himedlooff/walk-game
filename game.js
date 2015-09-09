var canvasEl = document.getElementById('canvas');
var canvas = canvasEl.getContext('2d');

var fill = 'green';

canvasEl.addEventListener('keydown', function() {
fill = 'red';
});

canvas.fillStyle = fill;
canvas.fillRect(10, 10, 100, 100);
