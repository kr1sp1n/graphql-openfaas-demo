# GraphQL-OpenFAAS Demo

The idea is to run a generic GraphQL server configured with a schema file/URL and proxy any request to a function provided by OpenFAAS.

## CLI
```bash
brew install faas-cli
```

## Local Setup

```bash
docker swarm init
yarn deploy:local
```
