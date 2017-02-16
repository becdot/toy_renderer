const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const express = require('express');
const mustache = require('mustache');
const upload = require('multer')();

const TextRenderer = require('./models/renderer');

const PORT = process.env.PORT || 3000;
const NAME = 'Toy Renderer';

const app = express();
const router = express.Router();

app.engine('html', consolidate.mustache);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'html');

const loggingMiddleware = (req, res, next) => {
  console.log(`received request at ${req.method} ${req.path}`);
  next();
};

router.use(loggingMiddleware);
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.render('index', { name: NAME });
});

router.get('/status', (req, res) => {
  res.send('yesok');
});

router.get('/image', upload.array(), (req, res) => {
  const renderer = new TextRenderer({ text: 'hello world!', width: 200, height: 200 });
  const imageData = {
    src: renderer.toString(),
    width: renderer.width,
    height: renderer.height
  };
  res.render('index', { name: NAME, image: imageData });
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`${NAME} listening on port ${PORT}!`);
});

module.exports = app;
