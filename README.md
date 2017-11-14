# Eezy Editor (React-stack)

The React-based stack version of the Eezy Editor; to deprecate the web-components version we have now.

### Setup

##### Install dependencies

```sh
nvm use # assuming you are using `nvm`
yarn # or `npm install` if you don't have `yarn` installed
```

### Development

##### Run the things

```sh
yarn start # fires up a handy dashboard for webpack stuff
# open http://localhost:3000 in your browser
```

### Testing

We use [Jest](https://facebook.github.io/jest/docs/en/tutorial-react.html) for unit testing, and [Cypress](https://cypress.io) for integration testing.

##### Install dependencies

```sh
# [Watchman](https://facebook.github.io/watchman/docs/install.html) - used for Jest and file watching
# macOS
brew install --HEAD watchman
```

##### Run the things

Integration Tests

```sh
yarn run cypress:open # gui test runner
yarn run cypress:run # cli test runner
```

Unit Tests

```sh
yarn test # Runs Jest in file watch mode
```

##### Coming Soon
