# Interview Take Home Exercise - Developer Dashboard

This project is a simple NextJS UI application for displaying useful information on deployed services. The intended audience is application developers working at ABC corporation.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-typescript)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript&project-name=with-typescript&repository-name=with-typescript)

## Requirements

NodeJS version 12 or greater

## Installation

Install modules with this command:

```bash
npm install
```

## Running in Development

To run the dev server use this command:

```bash
npm run dev
```

## Running Typecheck

To execute the typecheck for TypeScript run this command:

```bash
npm run type-check
```

## Running Linting & Formatting

You can automatically format the code with this command:

```bash
npm run format
```

Linting rules can be checked with the command:

```bash
npm run lint
```

## Development Notes

Here is where I'll put my notes while developing the application during the take home exercise.

- I decided to go with a NextJS app which is overall a great React based framework for data-intensive application development
- I am using Server Side Rendering (SSR) on the pages which need to fetch dynamic data (e.g. Services) so that they are re-fetched at runtime to keep up to date
  - This is in opposition to SSG, which is build time - we want dynamic data when the user makes a request, not stale data from the time of the build
  - An even more advanced approach would be to refetch the data on the clientside using polling or websockets to pull fresh data in realtime as pods spin up and deployments tick over
- I decided to add more details around source control and CI/CD pipelines to the Service details page, which I felt was useful
- I chose to pull in the D3 library for data visualization - I thought it would be useful to display a graph of the service dependencies. You can see the status of the dependencies via the color, and you can click the nodes to navigate to those services.
- I decided to keep the UI styling extremely minimal and focus on wiring up the data and getting all the relevant information on the screen. Before launching this to internal stakeholders, I would rework the UI and clean it up, moving to more tabular data structures and probably utilizing a UI component library of some kind (Material-UI is a default choice for me, or whatever my company happens to use).
