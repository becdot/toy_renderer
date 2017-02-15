const assert = require('chai').assert;

const Renderer = require('../../text_renderer');

describe('TextRenderer', function() {
  before(function() {
    this.options = {
      text: 'This is an image',
      font: '24px Ariel',
      width: 50,
      height: 100
    };
    this.renderer = new Renderer(this.options);
  });

  describe('#constructor', function() {
    it('should set the text', function() {
      assert.equal(this.options.text, this.renderer.text);
    });

    it('should set the font', function() {
      assert.equal(this.options.font, this.renderer.font);
    });

    it('should set the width', function() {
      assert.equal(this.options.width, this.renderer.width);
      assert.equal(this.options.width, this.renderer.canvas.width);
    });

    it('should set the height', function() {
      assert.equal(this.options.height, this.renderer.height);
      assert.equal(this.options.height, this.renderer.canvas.height);
    });
  });

  describe('#draw', function() {
    before(function() {
      this.renderer.draw();
    });

    it('should set the font', function() {
      assert.equal(this.options.font, this.renderer.context.font);
    });
  });

  describe('#toString', function() {
    before(function() {
      this.data = this.renderer.toString();
    });

    it('should set the font', function() {
      const base64String = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABkCAYAAADE6GNbAAAABmJLR0QA/wD/AP+gvaeTAAAAKUlEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAPBiToQAAXDFK0cAAAAASUVORK5CYII=';
      assert.equal(base64String, this.data);
    });
  });
});
