# React Bridge with different React versions

## Setup
- Call `npm install` in `producer/react/react19` and `consumer/react/react18`

## Reproduction
1. Call `npm run start` in `producer/react/react19` and `consumer/react/react18`
2. Open `localhost:4001`
3. See the error `Error loading remote component` instead of the actual component from the producer
