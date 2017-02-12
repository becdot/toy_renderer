'use strict';

const Canvas = require('canvas');

// const Image = Canvas.Image;

class TextRenderer {
  constructor(options) {
    this.text = options.text || 'my sample text!';
    this.font = options.font || '14px Helvetica';
    this.width = options.width || 200;
    this.height = options.height || 200;

    this.canvas = new Canvas(this.width, this.height);
    this.context = this.canvas.getContext('2d');
  }

  draw() {
    this.context.font = this.font;
    this.context.fillText(this.text, 50, 100);

    const te = this.context.measureText(this.text);
    this.context.strokeStyle = 'rgba(0,0,0,0.5)';
    this.context.beginPath();
    this.context.lineTo(50, 102);
    this.context.lineTo(50 + te.width, 102);
    this.context.stroke();
  }

  toString() {
    this.draw();
    return this.canvas.toDataURL();
  }
}

module.exports = TextRenderer;
