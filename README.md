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
3. `yarn start`
4. Develop you application
5. `yarn run parcel-production`
6. `yarn run package`

**Development**

The development is easy, you will code you application with _React_ from the entry point located at `/src`. Your application should be located there so _Parcel_ knows where to start building things for you.

You won't need to configure enything since _Parcel_ will do all of this for you. Zero conf _React_ development with everything you need.

You may have noticed that there are _two html_ files at the root of your project. The html file named `index.html` is your development entry point for _Parcel_, you can add here whatever you need for development.

**Production**

When it comes to production is also very easy. First you will se a `config.js` file at the root of your application that contains the following structure:

```
const environment = 'DEVELOPMENT';

module.exports = {
  environment,
};
```

Simply replace the `DEVELOPMENT` literal with the `PRODUCTION` literal and keep reading the next paragraph.

After that small change, you need to execute the command `yarn run parcel-production` to let parcel do all the bundling and optimizations that should be needed and then just execute `yarn run package` to bundle your electron app.

**TODOs**

* [ ] Find a way to remove the need of two html files.

**Contributing**

Contributions are always welcome, if you find something that could be improved and would make a difference, go ahead, open an issue then PR your proposals. I'll be glad to check it with you and add it to the codebase.
