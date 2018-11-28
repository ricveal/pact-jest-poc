# Pact Example with Jest

## Pre-requisites

- Docker
- Node (tested with v8.11.1)

## Install

```bash
npm i
```

or

```bash
yarn
```

## Scripts

- "test:client": test client using jest and the pact (offline)
- "pact:publish": publish the pact in the Pact Broker
- "test:server": test server against published pacts (online)

## How to use it

Once you have installed the dependencies, you can check the client executing `test:client` script.

Then you need to run a Pact Broker. A Docker Compose file is provided to ease this task.

Then you can continue publishing the pact on the running Pact Broker (script `pact:publish`)

Finally, you can execute the server test against the Pact Broker to check implementation follows the pact.

## More Info / Technologies

- [Jest](https://jestjs.io/)
- [Express](https://expressjs.com/es/)
- [Pact-Node](https://github.com/pact-foundation/pact-node)
- [Docker Compose](https://docs.docker.com/compose/)
