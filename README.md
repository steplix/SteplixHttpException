# Steplix Http Exception

Steplix Http Exception.

## Index

* [Download & Install][install].
* [How is it used?][how_is_it_used].
* [Tests][tests].

## Download & Install

### NPM
```bash
$ npm install steplix-http-exception
```

### Source code
```bash
$ git clone https://github.com/steplix/SteplixHttpException.git
$ cd SteplixHttpException
$ npm install
```

## How is it used?

```js
'use strict';

const { Errors } = require('steplix-http-exception');
// ...
throw new Errors.NotFound();
```

```js
// All HTTP Status Code are an Exception
const e = new Errors.NotFound('My custom message', {hello: 'world'});
// ...
console.log(e.toJson());
// { "error": 'My custom message', "code": 404, "extra": { "hello": "world" } }
```


## Tests

In order to see more concrete examples, **I INVITE YOU TO LOOK AT THE TESTS :)**

### Run the unit tests
```sh
npm test
```

### Run an application (server) with a more formal example.
```sh
npm run test-app
```

<!-- deep links -->
[install]: #download--install
[how_is_it_used]: #how-is-it-used
[tests]: #tests
