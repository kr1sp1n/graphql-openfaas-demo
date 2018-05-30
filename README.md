# GraphQL-OpenFAAS Demo

The idea is to run a generic GraphQL server configured with a schema file/URL and proxy any request to a specific function provided by OpenFAAS.

## CLI

```bash
brew install faas-cli
```

## Setup local OpenFAAS

```bash
docker swarm init
yarn deploy:local
```

## Build functions

```bash
faas-cli build
```

## Deploy functions

```bash
faas-cli deploy
```

## Demo

```bash
yarn start
```

Goto http://localhost:4000/ and send a query to the GraphQL server:
```gql
query {
  greet(name: "OpenFAAS")
}
```

Goto http://127.0.0.1:8080/ui/ to see the OpenFAAS dashboard.
