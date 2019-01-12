### acedia

[![npm version](https://badge.fury.io/js/acedia.svg)](https://badge.fury.io/js/acedia)

`a simple save canvas to image`

#### install

```
npm i acedia
```

#### usage

```
const acedia = require("acedia");

.......


let data = canvas.toDataURL();

acedia({
  data,
  dir: path.resolve(__dirname, "./test.jpeg")
});

```

MIT
