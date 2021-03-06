function Paddle(options) {
  this.x = options.x || (options.canvas.width-120)/2
  this.y = options.y-45 || options.canvas.height-15
  this.height = options.height || 15
  this.width = options.width || 120
  this.context = options.context
  this.canvas = options.canvas
  this.leftPressed = options.lP
  this.rightPressed = options.rP
}

Paddle.prototype.draw = function() {
  this.context.beginPath()
  //start the drawing here
  this.context.moveTo(this.x, this.y-20)
  this.context.lineTo(this.x+15, this.y+30)
  this.context.lineTo(this.x+30, this.y-10)
  this.context.lineTo(this.x+45, this.y+10)
  this.context.lineTo(this.x+60, this.y-10)
  this.context.lineTo(this.x+75, this.y+10)
  this.context.lineTo(this.x+90, this.y-10)
  this.context.lineTo(this.x+105,this.y+30)
  this.context.lineTo(this.x+120,this.y-20)
  this.context.lineTo(this.x+60,this.y-40)
  this.context.fill()

  this.context.beginPath()
  this.context.fillStyle = '#ff6b00'
  //start the drawing here
  this.context.moveTo(this.x+2, this.y-18)  //1
  this.context.lineTo(this.x+15, this.y+24) //2
  this.context.lineTo(this.x+30, this.y-14) //3
  this.context.lineTo(this.x+45, this.y+8)  //4
  this.context.lineTo(this.x+60, this.y-12) //5
  this.context.lineTo(this.x+75, this.y+8)  //6
  this.context.lineTo(this.x+90, this.y-14) //7
  this.context.lineTo(this.x+105,this.y+24) //8
  this.context.lineTo(this.x+118,this.y-18) //9
  this.context.lineTo(this.x+60,this.y-38)  //10
  this.context.fill()
}

Paddle.prototype.move = function() {
  if (this.rightPressed && this.x < this.canvas.width-this.width) {
    this.x += 10
  } else if (this.leftPressed && this.x > 0) {
    this.x -= 10
  }
}

module.exports = Paddle
