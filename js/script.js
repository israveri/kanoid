const CANVAS_WIDTH = 1000
const CANVAS_HEIGHT = 600

let canvas, context

window.onload = function() {
  canvas = document.getElementById('canvas')
  canvas.width = CANVAS_WIDTH
  canvas.height = CANVAS_HEIGHT

  context = canvas.getContext('2d')

  rectangle(0, 0, canvas.width, canvas.height, 'black')

  circle(100, 100, 10, 'red')
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