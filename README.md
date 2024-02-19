# Next.js + Jest

This example shows how to configure Jest to work with Next.js.

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript. This example also shows how to use Jest with the App Router and React Server Components.

> **Note:** Since tests can be co-located alongside other files inside the App Router, we have placed those tests in `app/` to demonstrate this behavior (which is different than `pages/`). You can still place all tests in `__tests__` if you prefer.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-jest&project-name=with-jest&repository-name=with-jest)

## How to Use

Quickly get started using [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app#readme)!

In your terminal, run the following command with `npx` or `yarn`:

```bash
npx create-next-app --example with-jest with-jest-app
```

## Run the Dev Server

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Run in Production Mode

```bash
npm start
```

## Running Tests

```bash
npm test
```

# UI Architecture

## Page Setup

To make a new page publicly accessible, add it to the `app` directory. For example, to create a new page at the path `/about`, create a new file at `pages/page.tsx`. This will automatically create a new route. You can also create nested routes by creating a new file at `app/nested/page.tsx` for the path `/nested/page`.
