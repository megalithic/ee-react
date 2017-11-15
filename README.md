# Eezy Editor

The react-based version of the Eezy Editor; to deprecate the web-components version we have now.

## The Stack

- [react](https://reactjs.org/)
- [redux](https://redux.js.org/) (using [redux-thunk](https://github.com/gaearon/redux-thunk))
- [react-redux-router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)
- [css modules](https://github.com/css-modules/css-modules)
- TBD - [konvaJS](https://konvajs.github.io/) or [fabricJS](http://fabricjs.com/)
- [jest](https://facebook.github.io/jest/) (unit tests)
- [enzyme](https://github.com/airbnb/enzyme) (react matchers and test helpers)
- [cypress](https://www.cypress.io/) (integration tests)
- [sentry](https://sentry.io) (logging/exceptions)

## Setup and Usage

All documentation for setup, usage, code stuffs, etc, is **[now on the wiki](https://github.com/megalithic/ee-react/wiki)**.

## TODO

- [ ] add in `prettier` for auto-linting as a git-hook
- [ ] set up ENV variables for each type of environment: development, staging, production (dotenv?)
- [ ] specify the build/deployment process
- [ ] tie in circle-ci build status (tests, coverage, etc)
- [ ] make determination of using FabricJS or KonvaJS
- [ ] build out higher order components for level of inheritance to flip between types of editors
- [ ] add basic tests for actions and reducers
- [ ] start work on wiki to document the structure and general idioms for this app

