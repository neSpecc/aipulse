# AI Pulse

A demonstration of the **Auto Bugfix** feature of [Hawk Error Tracker](https://hawk-tracker.ru/).

[![License](https://img.shields.io/npm/l/@codexteam/typescript-lib-template?style=flat-square)](https://www.npmjs.com/package/@codexteam/typescript-lib-template)

## About

This repository showcases the capabilities of **Hawk Error Tracker's Auto Bugfix** feature - an AI-powered solution that automatically suggests fixes for common errors in your applications.

**Author:** 

- [https://t.me/peter_codex](https://t.me/peter_codex) 
- [https://x.com/neSpecc](https://x.com/neSpecc)

### Hawk Error Tracker

[Hawk](https://hawk-tracker.ru/) is an advanced error tracking service that helps developers:
- Monitor application errors in real-time
- Analyze error patterns and trends
- Get AI-powered automatic bug fix suggestions
- Improve code quality and reduce debugging time

## Demo Application

This project includes a demo Vue application built with:

- **[CodeX UI](https://www.npmjs.com/package/@codexteam/ui)** - Modern Vue 3 component library with theming support
- **[CodeX TypeScript Library Template](https://github.com/codex-team/typescript-lib-template)** - Foundation for the project structure
- **Vue 3** - Latest version of the progressive JavaScript framework
- **Vite** - Next generation frontend build tool

### Requirements

- **Node.js** ≥ 22 (see [.nvmrc](.nvmrc))
- **Yarn** 4 (package manager is enforced)

### Environment variables

The demo uses [Hawk Error Tracker](https://hawk-tracker.ru/) and needs an integration token.

1. Go to **packages/demo/** and create `.env` from the example:
   ```bash
   cp packages/demo/.env.example packages/demo/.env
   ```
2. Get the integration token in [Hawk](https://hawk-tracker.ru/) → your project → Settings.
3. Set it in **packages/demo/.env**:
   ```
   VITE_HAWK_TOKEN=your_integration_token_here
   ```

Do not commit `.env` — it is ignored by git. Use `.env.example` as a template.

### Running the Demo

From the repository root:

```bash
# Install dependencies
yarn install

# Run the demo in development mode
yarn dev

# Build the demo for production
yarn build

# Preview the production build
yarn preview
```

To run scripts from the demo package only:

```bash
cd packages/demo
yarn dev    # or: yarn build, yarn preview
```

The demo showcases CodeX UI components including:
- Navbar with custom branding
- Tabbar for navigation links
- PageBlock layout component
- Pure base theme with Violet accent colors

## Features 

- 💄 Yarn 4
- 🛍️ Yarn Workspaces
- 💎 ESLint 9 with [eslint-config-codex](http://github.com/codex-team/eslint-config/)
- 🥃 Typescript 5
- 🥊 npx only-allow yarn
- 🌶️ Tests with [Vitest](https://vitest.dev)
- 🍀 GitHub Actions for test/lint/build/publish purposes
- 🎨 Vue 3 with CodeX UI components


# About CodeX

<img align="right" width="120" height="120" src="https://codex.so/public/app/img/codex-logo.svg" hspace="50">

CodeX is a team of digital specialists around the world interested in building high-quality open source products on a global market. We are [open](https://codex.so/join) for young people who want to constantly improve their skills and grow professionally with experiments in cutting-edge technologies.

| 🌐 | Join  👋  | Twitter | Instagram |
| -- | -- | -- | -- |
| [codex.so](https://codex.so) | [codex.so/join](https://codex.so/join) |[@codex_team](http://twitter.com/codex_team) | [@codex_team](http://instagram.com/codex_team/) |

