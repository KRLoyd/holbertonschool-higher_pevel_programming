#!/usr/bin/node
// Define Class Rectangle
module.exports = {Rectangle: Rectangle};

function Rectangle (w, h) {
  if (w > 0 && h > 0) {
    this.width = w;
    this.height = h;
  }
}

Rectangle.prototype.print = function () {
  for (let i = 0; i < this.height; i++) {
    console.log('X'.repeat(this.width));
  }
};

Rectangle.prototype.rotate = function () {
  let temp = this.width;
  this.width = this.height;
  this.height = temp;
};

Rectangle.prototype.double = function () {
  this.width *= 2;
  this.height *= 2;
};
