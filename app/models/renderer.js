'use strict';

const Canvas = require('canvas');

// const Image = Canvas.Image;

class Renderer {
  constructor(options) {
    this.width = options.width || 200;
    this.height = options.height || 200;

    if (options.text) {
      this.text = options.text || 'my sample text!';
      this.font = options.font || '14px Helvetica';
    } else if (options.image) {
      this.image = options.image;
      this.x = options.x || 0;
      this.y = options.y || 0;
    }

    this.canvas = new Canvas(this.width, this.height);
    this.context = this.canvas.getContext('2d');
  }

  drawImage() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  drawText() {
    this.context.font = this.font;
    const textDimensions = this.context.measureText(this.text);
    this.context.fillText(this.text, ((this.width - textDimensions.width) / 2), this.height / 2);
  }

  draw() {
    if (this.text) {
      this.drawText();
    } else if (this.image) {
      this.drawImage();
    }
  }

  toString() {
    this.draw();
    return this.canvas.toDataURL();
  }
}

module.exports = Renderer;
