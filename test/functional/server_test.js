const assert = require('chai').assert;
const request = require('request');

process.env.NODE_ENV = 'test';
process.env.PORT = 9999;

const app = require('../../server');

const URL = `http://localhost:${process.env.PORT}`;

before(function setup() {
  this.server = app;
});

describe('GET /', function() {
  before(function(done) {
    this.request = request.get({url: URL}, done);
  });

  it('should succeed', function() {
    assert.equal(200, this.request.response.statusCode);
  });

  it('should return the name of the app', function() {
    assert.equal('Toy Renderer', this.request.response.body);
  });
});

describe('GET /status', function() {
  before(function(done) {
    this.request = request.get({url: `${URL}/status`}, done);
  });

  it('should succeed', function() {
    assert.equal(200, this.request.response.statusCode);
  });


  it('should return the text "yesok"', function() {
    assert.equal('yesok', this.request.response.body);
  });
});

describe('POST /image', function() {
  before(function(done) {
    const body = { text: 'hello world!' };
    this.request = request.post({ url: `${URL}/image`, form: body }, done);
  });

  it('should succeed', function() {
    assert.equal(200, this.request.response.statusCode);
  });


  it('should return a base64-encoded image string', function() {
    const base64ImagePrefix = 'data:image/png;base64';
    assert.ok(this.request.response.body.match(base64ImagePrefix));
  });
});
