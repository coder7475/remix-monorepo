# Remix Monorepo

A Monorepo with PNPM workspaces and speed it up with Nx! This is a **App Centric Repositories**

## Setting up the Monorepo structure

The structure of a monorepo might vary depending on what you plan to use it for. There are generally two kinds of monorepo:

### Package-centric repositories

- Used for developing and publishing a cohesive set of reusable packages
- Common setup in the open source world (e.g. Angular, React, Vue)
- Typically have a `packages` folder
- Packages are commonly published to public registries like NPM

### App-centric repositories

- Used mainly for developing applications and products
- Common setup in companies
- Characterized by:
  - `apps` folder containing buildable and deployable applications
  - `packages` or `libs` folder containing libraries specific to one or multiple applications
  - Option to publish some libraries to public registries

### References

1. [Official Nx Blog](https://nx.dev/blog/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx)
2. [Setup PNPM Workspace](https://dev.to/vinomanick/create-a-monorepo-using-pnpm-workspace-1ebn)
