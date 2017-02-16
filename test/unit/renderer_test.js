const assert = require('chai').assert;

const Renderer = require('../../app/models/renderer');

describe('Renderer', function() {
  describe('text', function() {
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

    describe('#drawText', function() {
      before(function() {
        this.renderer.drawText();
      });

      it('should set the font', function() {
        assert.equal(this.options.font, this.renderer.context.font);
      });
    });

    describe('#toString', function() {
      before(function() {
        this.data = this.renderer.toString();
      });

      it('should return a base64 string', function() {
        const base64ImagePrefix = 'data:image/png;base64';
        assert.ok(this.data.match(base64ImagePrefix));
      });
    });
  });
});
