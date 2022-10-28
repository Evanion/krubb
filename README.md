# Next.js 13 docker repo

This repo contains two next.js 13 apps, one (docs) runs the regular `pages` folder, the other (web) runs the new `appDir` folder.

## How to run

1. Clone the repo
2. Run `yarn install` in the root folder
3. Run `yarn dev` or `yarn build && yarn start` in the root folder
4. Browse to `http://localhost:3000` and `http://localhost:3001`

Both sites works as expected

## How to run in docker

1. Clone the repo
2. Run `yarn docker:build && yarn docker:up` in the root folder
3. Browse to `http://localhost:3000` and `http://localhost:3001`

`http://localhost:3001` works as expected, `http://localhost:3000` returns a 404
