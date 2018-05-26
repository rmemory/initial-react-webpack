npm init

npm i react react-dom

npm i --save-dev webpack webpack-dev-server webpack-cli

npm i --save-dev babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin

create webpack.config.js

create .babelrc


==== Questions

This is still a work in progress. Here is the current error.

$ npm start

> webpack-react@1.0.0 start /home/rmemory/www/react/webpack-react
> webpack-dev-server --mode development --open --hot

/home/rmemory/www/react/webpack-react/webpack.config.js:30
                                        loader: babel-loader
                                                ^

ReferenceError: babel is not defined
    at Object.<anonymous> (/home/rmemory/www/react/webpack-react/webpack.config.js:30:14)
    at Module._compile (module.js:643:30)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
    at Module.require (module.js:587:17)
    at require (internal/module.js:11:18)
    at WEBPACK_OPTIONS (/home/rmemory/www/react/webpack-react/node_modules/webpack-cli/bin/convert-argv.js:133:13)
    at requireConfig (/home/rmemory/www/react/webpack-react/node_modules/webpack-cli/bin/convert-argv.js:135:6)
npm ERR! code ELIFECYCLE


In any case, here are my questions.

I vaguely (generally) understand that Babel is a transpilier, responsible for taking all of the newest features of JavaScript, and "compiling" it into a version of Java Script that can be used with "older browsers".

I get the concept. There are details I have questions on.

1) I vaguely understand that a Babel "preset" is Babel's term for how it is extended to handle different language features, such a JSX, etc. I don't fully understand the difference between a "Babel plugin" and a "Babel preset". I suspect they are related.

2) In this project, I have installed two presets: babel-preset-env and babel-preset-react. I understand that the react preset is to handle JSX, which seems clear enough. 

I don't understand the "env" preset. I've seen docs that describe it as a mechanism that magically figures out what level of Java Script your browser is capable of, and just doing whatever transpiling is necessary.

I am guessing this implies I somehow need to inform "env" preset which browsers (and versions) I am targeting, probably via some configuration of some kind, probably in .babelrc. I guess it likely has some default browsers it supports without configuration. 

On a related topic, I've also seen, where the env preset is babel's latest way to replace yearly releases of Java Script. Presumably this implies the env preset is the magical way it handles whatever new version of Java Script the developer wishes to use, and translates it into whatever browsers the developer is targeting. 

3) I have seen in some projects, where babel configuration is performed in files such as package.json. In my case, I am using .babelrc. Is this typical? 

4) For development purposes, I am guessing it is sometimes desirable to watch babel do its thing on a file by file basis?

5) I totally do not get the purpose of the babel-loading plugin or module or preset (whatever its called). I've googled around and haven't found any description of its purpose.

6) I am still not totally clear on the differences between a dev and production. I mean, I get that in dev you want certain settings, and in production you want different settings. However, I don't yet fully understand the ramifications of --save-dev, or even webpack.config.js vs webpack.config.dev.js.

7) If you see anything else you