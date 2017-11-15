# Eezy Editor

The react-based version of the Eezy Editor; to deprecate the web-components version we have now.

## The Stack

- [react](https://reactjs.org/)
- [redux (we're using redux-thunks)](https://redux.js.org/)
- [react-redux-router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)
- [css modules](https://github.com/css-modules/css-modules)
- [konvaJS](https://konvajs.github.io/) or [ fabricJS ](http://fabricjs.com/) - TBD
- [jest (unit tests)](https://facebook.github.io/jest/)
- [enzyme (react matchers and test helpers)](https://github.com/airbnb/enzyme)
- [cypress (integration tests)](https://www.cypress.io/)

## Setup and Usage

All documentation for setup, usage, code stuffs is now on our **[ wiki ](wiki)**

## TODO

- [ ] add in `prettier` for auto-linting as a git-hook
- [ ] specify the build/deployment process
- [ ] tie in circle-ci build status (tests, coverage, etc)
- [ ] make determination of using FabricJS or KonvaJS
- [ ] build out higher order components for level of inheritance to flip between types of editors
- [ ] add basic tests for actions and reducers
- [ ] start work on wiki to document the structure and general idioms for this app

