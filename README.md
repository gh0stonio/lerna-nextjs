<h3 align="center">
  lerna-nextjs
</h3>

<p align="center">
  Monorepo for next.js app manage with Lerna
</p>

## Contribute

In order to contribute, the very first time just run `yarn install` in order to install the gloabl dependencies.

Then run `yarn bootstrap` to link all the packages from the monorepo and theirs own depencies finally run `yarn dev`.

You should be able to access the app [here](localhost:3000)

## Packages

This repository is a monorepo that we manage using [Lerna](https://github.com/lerna/lerna). That means that we actually publish [several packages](/packages) to npm from the same codebase, including:

| Package                        | Description                   |
| ------------------------------ | ----------------------------- |
| [`app`](/packages/app)         | Next.js app                   |
| [`core`](/packages/core)       | Core of app for shared code   |
| [`example`](/packages/example) | Example of a package codebase |

## Testing

In each packages, the testing rule is quite simple. All files within specific folders need to be tested with a 100% coverage.

The folders are `redux`, `sagas`, `selectors` and `utils`.

You can run the tests with the following command `yarn test:unit` and in order to check the coverage `yarn test:unit:coverage`.

## Typing

All the files need to be typed. We use <b>Flow</b> in this project.
