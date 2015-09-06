var canvasEl = document.getElementById('canvas');
var canvas = canvasEl.getContext('2d');

canvas.fillStyle = 'green';
canvas.fillRect(10, 10, 100, 100);

canvasEl.addEventListener('keydown', function() {
    canvas.fillStyle = 'red';           canvas.fillRect(10, 10, 100, 100);
});
