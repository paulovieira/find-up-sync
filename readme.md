# find-up-sync

### Description 
Find a file by walking up parent directories (barebones implementation, no dependencies). 

Useful to automatically find the path to configuration files that should exist in a predefined directory. See example below.

### Install

```sh
npm install --save find-up-sync
```

### Example

Assume your filesystem has a structure like this:
```
/
└── home
    └── pvieira
        └── my-app
            ├── config
                └── email-key.txt
            └── xyz
                └── abc
                    └── find-key.js
```

We want to obtain the path to `config/email-key.txt` from any module in the application, without using relative paths or any other dependency specific to the application (such as a global `__rootDir` variable).

The `find-key.js` module will find the path:
```js
var FindUp = require('find-up-sync');
var path = FindUp('config/email-key.txt');

// path === '/home/pvieira/my-app/config/email-key.txt'
```

### Related modules

- `find-up` - https://www.npmjs.com/package/find-up
- `look-up` - https://www.npmjs.com/package/look-up
- `find-config` - https://www.npmjs.com/package/find-config

