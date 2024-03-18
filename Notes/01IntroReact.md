# Introduction to REACT

## What is React?

React is a JavaScript library created by Facebook (now Meta) for building user interfaces.

### History

Initially, Facebook engineers noticed that websites would reload entirely, even for small changes, causing slowness. This problem worsened with many notifications or bulk updates. To address this, they developed React.

React introduced the `Virtual DOM` concept. Instead of directly modifying the web page, React first updates a lightweight representation of the DOM called the Virtual DOM. It then `compares` this with the previous version to identify necessary changes, minimizing DOM manipulations and making the app faster. It makes such many copies of `Virtual DOM`

### Fibre

Fibre is an improved version of the Virtual DOM in React. While it's not specifically designed to send bulk state updates at once, Fibre is a re-implementation of the React core algorithm with additional features aimed at improving performance and concurrency. Fibre introduces features like pausing and resuming updates, assigning priorities to updates, and reusing code work to enhance performance. It can also abort unnecessary work to optimize resource usage.

### Reconciliation

Reconciliation is the behind-the-scenes differentiation algorithm used by Fibre. It determines what changes need to be made to the Virtual DOM to synchronize it with the actual DOM efficiently. In simple terms, reconciliation ensures that React updates the UI in the most optimized way possible by identifying and applying only the necessary changes.

### Hydration

Hydration is like powering up a device after assembling it. It's the process of making a server-rendered page interactive by attaching event listeners and other interactive features once the client-side JavaScript loads. This ensures that the page becomes fully functional and responsive, enhancing the user experience by making it feel faster and smoother.

### Single Page Applications (SPA)

Single Page Applications (SPAs) are web applications that load a single HTML page and dynamically update that page as the user interacts with the application. SPAs provide a smoother user experience by avoiding full page reloads and offering faster navigation between different sections of the application. React promotes SPA's using `routing`

### Routing

Switching pages without reloading the whole application

- Dynamic routing
  - where the routes (URL's) are dynamic- changes according to data served?

### Vite

Vite is a modern build tool for frontend development, designed to be fast and efficient.Its like a bundler that bundles up all the necessary files for react (or any other app) and provide it with some boilerplate code too.

### Frameworks vs Libraries

- Frameworks are structured with strict rules and style of working while libraries allow us to modify and do things with more flexibility and freedom.
- For example, imagine you're building a website and you need a way to handle user interactions. If you use a framework like Angular, it provides a set way of doing things, which can make development faster but limits your flexibility. But if you use a library like React, you have more freedom to choose how you want to handle user interactions, which gives you more control but also requires more decision-making.
