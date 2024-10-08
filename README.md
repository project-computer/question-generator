# [Tauri](https://tauri.app) + [Solid](https://solidjs.com) + [Tailwind CSS](https://tailwindcss.com) + [TypeScript](https://typescriptlang.org) + [Vite](https://vitejs.dev) Starter

[//]:[![Stars](https://img.shields.io/github/stars/AR10Dev/tauri-solid-ts-tailwind-vite?style=social)](https://github.com/AR10Dev/tauri-solid-ts-tailwind-vite)
[![Rust](https://img.shields.io/badge/Rust-black?style=for-the-badge&logo=rust&logoColor=#E57324)](https://github.com/AR10Dev/tauri-solid-ts-tailwind-vite)
[![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://AR10Dev/tauri-solid-ts-tailwind-vite)

A starter template for [Tauri](https://tauri.app) + [Solid](https://solidjs.com) App that comes preconfigured with [Vite](https://vitejs.dev),
[TypeScript](https://typescriptlang.org), [Tailwind CSS](https://tailwindcss.com), [ESLint](https://eslint.org), [Prettier](https://prettier.io) and HMR.

## Features

- 🤩 [Tauri](https://tauri.app) - Build smaller, faster, and more secure desktop and mobile applications with a web frontend.

- ⚡️ [Solid](https://solidjs.com) & [Vite](https://vitejs.dev) - Simple and performant reactivity for building user interfaces.

- 🎨 [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework for rapid UI development.

- 💪 [TypeScript](https://typescriptlang.org) - it's JavaScript with syntax for types.

- 👌 [ESLint](https://eslint.org) + [Prettier](https://prettier.io) - ESLint find problems in your code and Prettier format your code for an easy life.



## Getting started

## Pre-requisites

For use Tauri you need to Setup your environment following this [guide](https://tauri.app/guides/getting-started/prerequisites)

- [Node.js](https://nodejs.org/) (version 18.19.0 or higher)
- [Bun](bun.sh) (optional, but recommended for faster dependency installation)
- [Rust](https://www.rust-lang.org/learn/get-started#installing-rust) (version 1.55.0 or higher)
- [C++ compiler](https://code.visualstudio.com/docs/cpp/config-mingw) (for Windows users)

## Checklist

When you use this template, follow the checklist to update your info properly

- [ ] Rename `name`, `version` and `author` field in `package.json`
- [ ] Rename `name`, `version`, `description`, `authors` and `repository` field in `src-tauri/Cargo.toml`
- [ ] Change the author name in `LICENSE`
- [ ] Clean up the READMEs
- [ ] Optional: Remove the `.github` folder which contains the github action for cross compilation
- [ ] Enjoy 😉

## Usage

### Development

```bash
bun run dev:tauri # or pnpm dev:tauri or yarn dev:tauri or bun dev:tauri
```

Runs the app in the development mode. 

The first time you run this command, it will take several minutes for the Rust package manager to download and build all the required packages. Since they are cached, subsequent builds will be much faster, as only your code will need rebuilding. \
If you make edits to the page in the webview should update automatically just like a browser will reload. \
When you make edits to the Rust files, they will be rebuilt automatically and your app will restart.

### Build

```bash
bun run build:tauri # or pnpm build:tauri or yarn build:tauri or bun build:tauri
```

Builds Solid to the `dist` folder and after will embed it into a single binary with your Rust code. 
The binary itself will be located in `src-tauri/target/release/[app name]`, and installers will be located in `src-tauri/target/release/bundle/`

Like the `dev:tauri` command, the first time you run this, it will take some time to collect the Rust crates and build everything - but on subsequent runs it will only need to rebuild your code, which is much quicker.

It correctly bundles Solid in production mode and optimizes the binary for the best performance.

🎉 Congratulations, your app is ready to be release!

## Custom App Icon

To generate your custom app icon you can follow this [guide](https://tauri.app/guides/features/icons).\
Your new app icons will be located in `src-tauri/icons/` and remeber to update the `icon` field in `src-tauri/tauri.conf.json` with all your new icon path name.

## Customize the tauri.conf.json

To modify and personalize your app, you need to modify `src-tauri/tauri.conf.json` by following this [guide](https://tauri.app/api/config)
