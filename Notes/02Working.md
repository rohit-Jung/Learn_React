# Working of React

React operates by transforming code written in JSX or JavaScript into objects with predefined syntax and properties. JSX, a JavaScript extension, allows developers to write HTML-like code within JavaScript files, simplifying the creation of UI components.

Behind the scenes, React uses a process called `reconciliation` to efficiently update the actual DOM based on changes in the virtual DOM.

Babel, a transpiler, converts JSX code into regular JavaScript code that browsers can understand. It translates JSX syntax and injects necessary transformations behind the scenes.

```javascript
// React creates an object to represent an element similar to the following
const reactElement = {
  type: "a",
  props: {
    href: "http://example.com",
    target: "_blank",
  },
  children: "click me",
};

// Then it uses its own customRender method to render these as HTML on the page
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (let prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const container = document.querySelector("#root");

customRender(reactElement, container);
```

Here's a simplified overview of React's workings:

1. Write code using JSX or JavaScript with React components.
2. Babel transpiler converts JSX code into regular JavaScript.
3. React reconciles changes in the virtual DOM and updates the actual DOM as needed.
4. The updated UI is rendered on the web page.

This streamlined process enables developers to create dynamic and interactive user interfaces efficiently with React.

## Components

- reusable JavaScript functions exported and utilized with JSX, a syntax extension that combines HTML-like syntax with JavaScript.

React uses a component-based architecture. UIs are built from reusable and independent components, each managing its own state. This approach simplifies development and maintenance of complex interfaces.


**PROPS** - In React, props are like parameters passed to components, similar to passing arguments to functions. 
- For instance, imagine you have an input component that you want to use across different parts of your website. However, you may want to customize its behavior or appearance depending on where it's used. This is where props come in handy. By passing props to the input component, you can dynamically change its attributes, such as its value or event handlers, to suit different requirements. This allows for flexible and reusable components throughout your application.


## Hooks

- used to update UI
- developer - hooks - react - UI

Hooks are functions provided by React that allow developers to use state and other React features in functional components. They enable developers to add stateful logic to functional components without converting them into class components.

There are different hooks available for different use cases which you can find in the react.dev page itself. 

- `useState`: Used to add state management to functional components. It allows components to maintain and update their own state.

- `useEffect`: Enables performing side effects in functional components. Common use cases include data fetching, DOM manipulation, and subscriptions.

- `useRef`: Provides a way to create a mutable reference that persists across renders. It's commonly used for accessing DOM elements or storing values between renders without causing re-renders.

- `useCallback`: Memoizes functions to prevent unnecessary re-renders caused by function recreations. It's useful for optimizing performance by ensuring that functions only change when their dependencies change.

- `useContext`: Allows accessing the value of a context provider in functional components. It's used to avoid prop drilling by passing data through multiple levels of components.

- `useParams`: This hook is typically associated with React Router and is used to access the parameters from the URL in functional components.

-`forwardRef`: When you want to use same component in different places, but you cannot use the state in the same component. Hence we use the state not in the component itself. For this we give reference using forwardRef



