const CANVAS_WIDTH = 1000
const CANVAS_HEIGHT = 600

let canvas, context

let ball = {
  x: 70,
  y: 70,
  xSpeed: 10,
  ySpeed: 7.5
}

let paddle = {
  width: 100,
  height: 15
}

window.onload = function() {
  canvas = document.getElementById('canvas')
  canvas.width = CANVAS_WIDTH
  canvas.height = CANVAS_HEIGHT

  context = canvas.getContext('2d')

  let fps = 30
  setInterval(loop, 1000 / fps)
}

function loop() {
  move()
  draw()
}

function move() {
  ball.x += ball.xSpeed
  ball.y += ball.ySpeed
  
  if (ball.x > canvas.width || ball.x < 0) {
    ball.xSpeed *= -1
  }
  if (ball.y > canvas.height || ball.y < 0) {
    ball.ySpeed *= -1
  }
}

function draw() {
  // Canvas space
  rectangle(0, 0, canvas.width, canvas.height, 'black')
  
  // Ball
  circle(ball.x, ball.y, 10, 'red')

  // Paddle
  rectangle(canvas.width / 2 - (paddle.width / 2),
            canvas.height - 50,
            paddle.width,
            paddle.height,
            'blue')
}

function rectangle(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  context.fillStyle = fillColor
  context.fillRect(topLeftX, topLeftY, boxWidth, boxHeight)
}

function circle(centerX, centerY, radius, fillColor) {
  context.fillStyle = fillColor
  context.beginPath()
  context.arc(centerX, centerY, radius, 0, Math.PI * 2, true)
  context.fill()
}