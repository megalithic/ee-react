# Eezy Editor

The react-based version of the Eezy Editor; to deprecate the web-components version we have now.

## The Stack

- [react](https://reactjs.org/)
- [redux (we're using redux-thunks)](https://redux.js.org/)
- [react-redux-router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)
- [css modules](https://github.com/css-modules/css-modules)
- konvaJS or fabricJS - TBD
- [jest (unit tests)](https://facebook.github.io/jest/)
- [enzyme (react matchers and test helpers)](https://github.com/airbnb/enzyme)
- [cypress (integration tests)](https://www.cypress.io/)

## Setup

### 1.)  Install OS pre-requisites

> `node` [8.x (latest LTS)](https://github.com/nodejs/Release#release-schedule) **required**.
>
> `yarn` *optional*, but recommended.
>
> You can always check the included `.node-version` for the required `node` version for this and other node-based projects.

#### macOS

```sh
brew install node
brew install yarn
```

#### Debian/Ubuntu

Install `node`

```sh
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Install `yarn`

```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

### 2.)  Install project dependencies

```sh
nvm use # assuming you are using `nvm` for version managing, otherwise, make sure you are using `node-8.x`
yarn # or `npm install` if you don't have `yarn` installed
```

## Development

Application files all live under `./src/`.

#### Run the things

```sh
yarn start # fires up a handy dashboard for webpack stuff
```

Open http://localhost:3000 in your browser to view the thing

## Testing

We use [Jest](https://facebook.github.io/jest/docs/en/tutorial-react.html) for unit testing, and [Cypress](https://cypress.io) for integration testing. Integration test files live under `./cypress/integration`, and the unit test files live along side the implementations in `./src/`.

#### Install testing dependencies

[Watchman](https://facebook.github.io/watchman/docs/install.html) - used for Jest and file watching

```sh
# macOS
brew install --HEAD watchman
```

#### Run the things

Integration Tests (*note:* the app must be running as well)

```sh
yarn run cypress:open # gui test runner
yarn run cypress:run # cli test runner
```

Unit Tests

```sh
yarn test
yarn test -- path/to/test.js # runs a single test file
yarn test:watch # Runs Jest in file watch mode
yarn test:coverage # Runs Jest test coverage metrics
```

#### For the (neo)vim fam

If you use [vim-test](https://github.com/janko-m/vim-test), have a look at the included `.vimrc`. It provides an easy way to run integration or unit tests. You'll need to have your `~/.vimrc` or `~/.config/nvim/init.vim` setup to support per project `.vimrc` settings.

To do that, simply add the following to your (neo)vim config:

```viml
set exrc
set secure
```

## Build / Deployment

Coming soon...

## TODO

[] add in `prettier` for auto-linting as a git-hook
[] specify the build/deployment process
[] tie in circle-ci build status (tests, coverage, etc)
[] make determination of using FabricJS or KonvaJS
[] build out higher order components for level of inheritance to flip between types of editors
[] add basic tests for actions and reducers
[] start work on wiki to document the structure and general idioms for this app

