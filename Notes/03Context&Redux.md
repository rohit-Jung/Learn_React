# React State Management Evolution

## History

Previously, class-based components were predominantly used in React applications. However, they have been deprecated in favor of functional components due to their simplicity and performance benefits.

## Context API in React

Before the introduction of the Context API in React, passing props to deeply nested components required a process called "prop drilling." This meant passing props through intermediate components, even if those components didn't directly use the props.

The Context API addressed this issue by providing a mechanism for creating global variables or states that could be accessed by all components within a certain scope. This meant that values could be provided at the top of a component tree and accessed by any nested component without the need for explicit prop passing.

By wrapping components with a provider, values could be made available to all descendants, effectively eliminating the need for prop drilling. This simplified component composition and made code cleaner and more maintainable.

### Context API Limitation

One limitation of the Context API is that updating shared state often involves shallow copying the entire state object, that we previously did in todo app using spread operator[... ]. This can lead to performance issues, especially for large state objects.

## Redux

To solve the limitations of the Context API, Redux was introduced. Redux provided a centralized store for state management, allowing changes to be made through reducers, which are functions responsible for updating the state based on dispatched actions.

- **Centralized Store**: Redux offered a single store for all application state, simplifying management and tracking of changes. `SINGLE SOURCE OF TRUTH`

- **Predictable State Changes**: With Redux, state updates followed a strict pattern through `reducers`, ensuring predictability and facilitating debugging.

- **Performance Optimization**: Redux enabled performance optimization through techniques like `immutable` data structures, enhancing application efficiency.

While the Context API resolved prop drilling, Redux provided a comprehensive approach to state management, `helped  preserve the state`, addressing not only prop drilling but also offering features for predictable state updates and performance enhancement.

### Flux

Before Redux and the Context API, Facebook developed Flux, but it had a weak data flow model compared to Redux.

### React-Redux

React-Redux serves as a bridge between Redux and React, allowing Redux to be integrated seamlessly into React applications.

## Redux Toolkit (RTK)

Redux Toolkit (RTK) emerged as a solution to streamline Redux development by providing a set of utilities, including a store setup, simplified reducers, and built-in middleware.

### Store

RTK promotes the concept of a single source of truth, where all application state is stored in a single Redux store.

### Reducers

Reducers in RTK enforce changes to be made through functions/methods, ensuring a predictable state mutation.

### Slice
A function/method combining reducer logic, actions and selector. A kind of reducer in itself

### `useSelector` and `useDispatch`

`useSelector` and `useDispatch` are hooks provided by React-Redux to simplify state management in functional components.

- `useSelector`: Allows components to select specific pieces of state from the Redux store.
- `useDispatch`: Provides access to the `dispatch` function, enabling components to dispatch actions to the Redux store.

Example usage:

```javascript
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions"; // Assuming `increment` is an action creator

const MyComponent = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
```

## Steps to follow for the app:

1. **Create Store** - Single Source of Truth

   - Use `configureStore` to create the Redux store.

2. **Create Slice (Reducers)**

   - Use `createSlice` method.
   - A slice consists of:
     - `name`: Name of the slice.
     - `initialState`: Initial state value.
     - `reducers`: Object containing functions that describe state changes.
   - Access `state` and `action`:
     - `state`: Current state value in the store.
     - `action`: Action payload.
       - `action.type` determines the action type.
       - Access `action.payload` for state updates.
   - Export individual functionalities and the main source export.

3. **Add Todo** - Dispatching Actions

   - Use `useDispatch` to dispatch actions.
   - Example: `dispatch(addTodo())` to add a todo.

4. **Retrieve Values** - Accessing State
   - Use `useSelector` hook to access state values.
   - Example: `useSelector((state) => state.todos)` to retrieve todos from the state.
