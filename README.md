<h1>Typescript Exercies</h1>

This exercise was introduced in an article on my blog called ["Reusable Media Queries with styled-components"](https://daggala.com//reusable-media-queries-with-styled-components/) and the solution can be found there.

The idea is to take this code here and define its types so that the compiler stops complaining, without changing the typescript config

```javascript
const breakpoints = {
  sm: 20,
  md: 30,
  lg: 45,
  xl: 60
};

export const mediaQueries = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = style => `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
  return acc;
}, {});
```

<a href="hint">Below there are hints</a> (typescript compiler errors)

<h1>Create React app Readme notes</h1>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

<h1 id="hint">Hint</h1>

There are three type definitions to be made = in total three typescript compiler errors that you will probably encounter. Each time you modify the code and test it you'll have to kill the program and rerun it (so that it compiles again)

![error1](./assets/error1.png)

![error1](./assets/error1.png)

![error1](./assets/error1.png)

[This link](https://basarat.gitbook.io/typescript/type-system/index-signatures) could also be of some help
