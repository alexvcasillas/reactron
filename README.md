### Reactron

_sidenode: still working on a cool logo_

**What is Reactron?**

Reactron is the starting point for your new desktop application.

**Why would I need this?**

It will save you the time of mixing together _Electron_ and _React_ and you can start coding your dekstop application in matter of seconds.

**How do I get started with Reactron?**

It's quite simple, just do the following:

1. `git clone https://github.com/alexvcasillas/reactron.git && cd reactron`
2. `yarn` _sidenote: electron-bundler works better with `yarnpkg` than `npm`_
3. `yarn dev`
4. Develop you application
5. `yarn parcel-build`
6. `yarn pack`

**Development**

The development is easy, you will code you application with _React_ from the entry point located at `/src`. Your application should be located there so _Parcel_ knows where to start building things for you.

You won't need to configure enything since _Parcel_ will do all of this for you. Zero conf _React_ development with everything you need.

**Production**

When it comes to production is also very easy. First you will se a `config.js` file at the root of your application that contains the following structure:

```
const environment = 'DEVELOPMENT';

module.exports = {
  environment,
};
```

Simply replace the `DEVELOPMENT` literal with the `PRODUCTION` and you're ready to run `yarn parcel-build` and then `yarn pack` to distribute your app in production mode.


**Contributing**

Contributions are always welcome, if you find something that could be improved and would make a difference, go ahead, open an issue then PR your proposals. I'll be glad to check it with you and add it to the codebase.
