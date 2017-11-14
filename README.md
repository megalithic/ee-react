# Eezy Editor

The react-based version of the Eezy Editor; to deprecate the web-components version we have now.

## Setup

#### Install OS pre-requisites

> `node` required: [8.x (latest LTS)](https://github.com/nodejs/Release#release-schedule) / `yarn` optional, but recommended

##### macOS

```sh
brew install node
brew install yarn
```

##### Debian/Ubuntu
```
- Installing node

```sh
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

- Installing yarn

```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

#### Install project dependencies

```sh
nvm use # assuming you are using `nvm` for version managing, otherwise, make sure you are using `node-8.x`
yarn # or `npm install` if you don't have `yarn` installed
```

## Development

#### Run the things

```sh
yarn start # fires up a handy dashboard for webpack stuff
```

Open http://localhost:3000 in your browser to run the thing

## Testing

We use [Jest](https://facebook.github.io/jest/docs/en/tutorial-react.html) for unit testing, and [Cypress](https://cypress.io) for integration testing.

#### Install testing dependencies

[Watchman](https://facebook.github.io/watchman/docs/install.html) - used for Jest and file watching

```sh
# macOS
brew install --HEAD watchman
```

#### Run the things

Integration Tests

```sh
yarn run cypress:open # gui test runner
yarn run cypress:run # cli test runner
```

Unit Tests

```sh
yarn test # Runs Jest in file watch mode
```
