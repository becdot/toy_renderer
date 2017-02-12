const express = require('express');
const bodyParser = require('body-parser');
const upload = require('multer')();

const PORT = process.env.PORT || 3000;
const NAME = 'Toy Renderer';

const app = express();
const router = express.Router();

const loggingMiddleware = (req, res, next) => {
  console.log(`received req at ${req.method} ${req.path}`);
  next();
};

router.use(loggingMiddleware);
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.send(NAME);
});

router.get('/status', (req, res) => {
  res.send('yesok');
});

router.post('/image', upload.array(), (req, res) => {
  console.log('req', req.body);
  res.json(req.body);
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`${NAME} listening on port ${PORT}!`);
});
