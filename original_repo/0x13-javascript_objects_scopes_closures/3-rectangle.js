#!/usr/bin/node
// Define Class Rectangle
module.exports = {Rectangle: Rectangle};

function Rectangle (w, h) {
  if (w > 0 && h > 0) {
    this.width = w;
    this.height = h;
  }
  this.print = function () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  };
}