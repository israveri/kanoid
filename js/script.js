const CANVAS_WIDTH = 1000
const CANVAS_HEIGHT = 600

const PADDLE_WIDTH = 100
const PADDLE_HEIGHT = 15
const PADDLE_GUTTER = 30

let canvas, context

let ball = {
  x: 70,
  y: 70,
  xSpeed: 10,
  ySpeed: 7.5
}

let paddle = {
  width: PADDLE_WIDTH,
  height: PADDLE_HEIGHT,
  x: (CANVAS_WIDTH / 2) - (PADDLE_WIDTH / 2),
  y: CANVAS_HEIGHT - PADDLE_HEIGHT - PADDLE_GUTTER
}

function updatePaddlePosition(event) {
  let boundaries = canvas.getBoundingClientRect()
  let root = document.documentElement
  
  let pointerX = event.clientX - boundaries.left - root.scrollLeft

  paddle.x = pointerX
}

// Game setup
window.onload = function() {
  canvas = document.getElementById('canvas')
  canvas.width = CANVAS_WIDTH
  canvas.height = CANVAS_HEIGHT

  context = canvas.getContext('2d')

  let fps = 30
  setInterval(loop, 1000 / fps)

  canvas.addEventListener('mousemove', updatePaddlePosition)
}

// Game loop
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
  rectangle(paddle.x - paddle.width / 2,
            canvas.height - PADDLE_GUTTER,
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