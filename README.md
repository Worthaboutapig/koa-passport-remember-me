# Koa-Passport-Remember Me

[Koa-Passport](https://github.com/rkusa/koa-passport) strategy for authenticating based on a
remember me cookie.

This module lets you authenticate using a remember me cookie (aka persistent
login) in your Node.js applications.  By plugging into Passport, remember me
authentication can be easily and unobtrusively integrated into any application
or framework that supports [Connect](http://www.senchalabs.org/connect/)-style
middleware and fix cookies section of [passport-remember-me](https://github.com/jaredhanson/passport-remember-me).

## Install

    $ npm install koa-passport-remember-me


## Examples

For a complete, working example for koa 2, refer to the [koa passport example](https://github.com/ApelSYN/koa-passport-example).

## Tests

    $ npm install
    $ make test
    
## History

  * v0.1.3 - Use ES6 Object.assign to options merging. Since it is assumed that the one who uses Koa, uses the latest versions of nodejs :)
  * v0.1.2 - Fixed a crazy bug with cookie expiration.

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)
  - [Oleg Cherniy](https://github.com/ApelSYN)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
Patch for koa-passport by Oleg Cherniy (oleg.cherniy (at) gmail.com)   
