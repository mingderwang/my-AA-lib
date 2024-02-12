# bun starter

## Getting Started

Click the [Use this template](https://github.com/wobsoriano/bun-lib-starter/generate) button to create a new repository with the contents starter.

OR

Run `bun create wobsoriano/bun-lib-starter ./my-lib`.

## Setup

```bash
# install dependencies
bun install

# test the app
bun test

# build the app, available under dist
bun run build
```

## License

MIT

## Local Network

### install Foundry

```bash
curl -L https://foundry.paradigm.xyz | bash
```

### fork a mainnet running on local

```bash
anvil --fork-url https://mainnet.chainnodes.org/42ed77c3-38d5-45d3-8ae4-56256670ae8b --fork-block-number 17480237 --fork-chain-id 1 --chain-id 1
```
