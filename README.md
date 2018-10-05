# ob-api

[![Greenkeeper badge](https://badges.greenkeeper.io/insanity54/ob-api.svg)](https://greenkeeper.io/)

## Installation

`npm install ob-api`

## Usage

```js
var ob = require('ob-api');`
```

## API

**profile**

* profile.get()
```js
ob.profile.get({
  guid: 'f641cbceeda04171ad447d5889e11301a0df6932' // Optional
}, function(err, result) {
  console.log(result);
});
```

* profile.update()
```js
ob.profile.update({
  name: 'Jordan\`s Market',
  location: country_code, // TODO: Format?
  handle: '@Jordonias',
  about: 'This is my full description',
  short_description: 'This is my full description',
  nsfw: true,
  vendor: true,
  moderator: false,
  website: 'http://www.jordonias.com',
  email: 'jordan@jordonias.com',
  primary_color: '#128092',
  secondary_color: '#007088',
  background_color: '#03334e',
  text_color: '#ffffff',
  avatar: 'b3c8925456832a26e3973ad0e7bfd4c2b654b1a6',
  header: 'dfb794a82b1095377a8efce58ab1814913e52f6f',
  pgp_key: pgp_key // TODO
}, function(err, result) {

});
```


**listings**

* listings.get()
```js
```


**followers**

* followers.get()
```js
```


**following**

* following.get()
```js
```

* following.add()
```js
```

* following.remove()
```js
```


**social_accounts**

* social_accounts.add()
```js
```

* social_accounts.remove()
```js
```


**contracts**

* contracts.get()
```js
```

* contracts.create()
```js
```

* contracts.delete()
```js
```

* contracts.purchase()
```js
```


**shutdown**

* shutdown()
```js
```


**moderator**

* moderator.add()
```js
```

* moderator.remove()
```js
```


**order**

* order.get()
```js
```

* order.confirm()
```js
```

* order.complete()
```js
```


**settings**

* settings.get()
```js
```

* settings.update()
```js
```


**peers**

* peers.get()
```js
```


**routing_table**

* routing_table.get()
```js
```


**notifications**

* notifications.get()
```js
```


**notification**
// TODO: Combine with nofifications?

* notification.mark_as_read()
```js
```


**conversations**

* conversations.get()
```js
```


**messages**

* messages.get()
```js
```


**message**
// TODO: Combine with messages?

* message.mark_as_read()
```js
```


**sales**

* sales.get()
```js
```


**purchases**

* purchases.get()
```js
```


**payments**

* payments.check()
```js
```


**image**

* image.get()
```js
```

* image.upload()
```js
```
