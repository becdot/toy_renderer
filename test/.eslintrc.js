module.exports = {
    "extends": "airbnb-base",
    "globals": {
      "after": false,
      "before": false,
      "describe": false,
      "http": false,
      "Image": false,
      "it": false,
    },
    "parserOptions": {
      "sourceType": "module"
    },
    "plugins": [
        "import"
    ],
    "rules": {
      "comma-dangle": 0,
      "func-names": 0,
      "import/no-extraneous-dependencies": 0,
      "no-param-reassign": 0,
      "object-curly-spacing": 0,
      "prefer-arrow-callback": 0,
      "space-before-function-paren": 0,
      "strict": 0
    }
};
