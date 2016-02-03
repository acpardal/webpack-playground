# webpack-playground
Webpack features playground

#webpack-basic
````
1. npm i
2. npm run build
It will generate bundle.js
Double-click index.html file
````

#webpack-dev-server
````
1. npm i
2. npm run dev
Open browser http://localhost:8080 or http://localhost:8080/webpack-dev-server/
````
This setup has the feature Hot Module Replacement enabled. Detects changed modules and inject them into the running app.
- webpack-dev-server - Starts a little node.js Express server to serve webpack bundle.
- `--devtool inline-sourcemap` - Serves bundle with inline sourcemap for debugging with original js files.
- `--progress` - Outputs bundling details to console.
- `--colors` - Terminal colors.
- `--inline --hot` - Enables Hot Module Replacement feature. It's equivalent to adding
  `'webpack/hot/dev-server',
  'webpack-dev-server/client?http://localhost:8080'` to `entry` field in `webpack.config.js`
- `--content-base build` - Points to the build folder for browser file requests.

#webpack-babel-eslint
````
1. npm i
2. npm run build
It will generate bundle.js
Double-click index.html file
2. npm run build:watch - For automatically bundle updated files.
````
Setup with:
- [Babel](http://babeljs.io/) compiler to transpile ECMAScript 6/ES6/ES2015 code to ECMAScript 5/ES5
- [Eslint](http://eslint.org/) for code linting (linting is the process of running a program that will analyse code for potential errors.)

#webpack-babel-eslint-assets
````
1. npm i
2. npm run build
It will generate bundle.js with css and 1 inline img and 1 img file.
Double-click index.html file
2. npm run build:watch - For automatically bundle updated files.
````
Setup with:
- style-loader and css-loader for bundling css files.
- url-loader and file-loader for bundling/generating images
