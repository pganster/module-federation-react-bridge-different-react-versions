# React Bridge with different React versions
This is a reproduction repository for showcasing [this issue](https://github.com/module-federation/core/issues/3771) using the
Module Federation Bridge.

## Setup
- Call `npm install` in `producer/react/react19` and `consumer/react/react18`

## Reproduction
1. Call `npm run start` in `producer/react/react19` and `consumer/react/react18`
2. Open `localhost:4001`
3. See the error `Error loading remote component` instead of the actual component from the producer
