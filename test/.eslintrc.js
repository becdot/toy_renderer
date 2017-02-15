module.exports = {
    "extends": "airbnb-base",
    "globals": {
      "after": false,
      "before": false,
      "describe": false,
      "http": false,
      "it": false,
    },
    "parserOptions": {
      "sourceType": "module"
    },
    "plugins": [
        "import"
    ],
    "rules": {
      "func-names": 0,
      "import/no-extraneous-dependencies": 0,
      "no-param-reassign": 0,
      "object-curly-spacing": 0,
      "prefer-arrow-callback": 0,
      "space-before-function-paren": 0,
      "strict": 0
    }
};
