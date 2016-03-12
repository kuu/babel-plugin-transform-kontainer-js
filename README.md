# babel-plugin-transform-kontainer-js
Turn JSX into [kontainer-js](https://www.npmjs.com/package/kontainer-js) function calls

##Installation
```
$ npm install babel-plugin-transform-kontainer-js
```

##Usage
###Via .babelrc (Recommended)
####.babelrc
```js
{
  "plugins": ["transform-kontainer-js"]
}
```

###Via CLI
```
$ babel --plugins transform-kontainer-js script.js
```

###Via Node API
```js
require("babel-core").transform("code", {
  plugins: ["transform-kontainer-js"]
});
```


