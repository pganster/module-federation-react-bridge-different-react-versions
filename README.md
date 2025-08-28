# React Bridge with different React versions
This is a reproduction repository for showcasing [this issue](https://github.com/module-federation/core/issues/3771) using the
Module Federation Bridge.

## Setup
- Call `npm install` in 
  - `consumer/react/react18` 
  - `producer/react/react18`
  - `producer/react/react19`
  - `producer/react/react19_2`

## Reproduction
1. Call `npm run start` in
   - `consumer/react/react18`
   - `producer/react/react18`
   - `producer/react/react19`
   - `producer/react/react19_2`
2. Open `localhost:4001`
3. See the error `Error loading remote component` for both React 19 apps
