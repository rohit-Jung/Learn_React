# How was the blog app made?

## Creating the Vite app with tailwind

## Installing all the dependencies required for this project

```javascript
    "@reduxjs/toolkit": "^2.2.1",
    "@tinymce/tinymce-react": "^4.3.2",
    "appwrite": "^13.0.2",
    "html-react-parser": "^5.1.7",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.50.1",
    "react-redux": "^9.1.0",
    "react-router-dom": "^6.22.1"
```

## Configuring .env and appwrite services

- login to the appwrite and create a project
- create database, collection and fields, bucket, ensure the permissions are set
- set the .env file with the appwrite url, projectID, databaseID, collectionID, bucketID (IN THE ROOT DIRECTORY)
- create a conf object and conver these .env variables to string there and export the default object

## Building authentication system

- create a appwrite folder and a auth.service.js file
- build the authentication service according to the appwrite Documentation

### following are done to use the auth service easily (creating class and constructor)

- create a class and export it
- inside the class create a constructor and refer to client and account (this.Look in appwrite documentation)
- create async methods for creating account, login, logout and getUserProfile (methods are listed in appwrite documentation)
- don't forget to do it inside `try catch` block and use `async await`

## Configuring the database (creating post service)

- create a file to provide the post service configuration
- similar to above you can look all of the methods in appwrite documentation but creating a class and constructor would make it
- create a constructor refering the client database and storage accordingly
- create async methods for Create, Update, Delete, Read(getPost(slug) and getPosts) for post and upload and delete for file
- you also need to create one for previewing the specific file
- analyze and write the props according to the needs of frontend
- you can write `query` to getPosts which are only active ( Look in the documentation for more)
- all of the methods and their syntax are in appwrite documentation

## Configuring redux

- create and configure the store
- create a authslice to inform about the login and logout state
- create the reducers accordingly and export reducers and actions

### In App.jsx

- get the user account using the method created and according to the data obtained `dispatch` login and logout state(in finally set the loading to false)
- using a loading state is considered a good practice and according to it return the element(conditional rendering)?
- you can use `Outlet` here in between the `Header` and `Footer` component

## Creating Components

### Industry Practice: Creating different components for each work, Creating Containers

### Container:

- As the name suggests, container is a basic component that renders the childern as it is with some integrated css like w-full, flex, etc. This is done so that we don't have to worry about changing the style in thousand different places instead we could do it just in the container itself that will wrap up other components.

### Footer:

- Footer is just basic tailwind only with react router `Link`. there is no such logics there

### Header:

- Since for header we have to show the logout Button according to the user login or logout state so we make two components inside here
- `LogoutBtn.jsx` and `Header.jsx`
- In logoutBtn we make a button and dispatch the `logout reducer` if the `logout Service` from authService is successfully resolved if its clicked
- In `Header.jsx`
  - using `useNavigate` from the react-router-dom
    - we make an array of navItems with name, slug and active each as object for each item
    - in returning element we map over the array, return a button for each item if its active.
    - using item.name as key in li and a button inside it.
    - on the button click we navigate the user to the route (slug in our case)
    - the active is checked by the authStatus i.e. is the user logged in or not (from the store)
  - we check the authStatus(`useSelector`) from the redux store also to display the logoutBtn accordingly (using && operator to do so)

### Button:

- Since we will be using many buttons making a button component would be useful
- simply pass in the required props `className` especially and return the accepted children inside the button element
- you can also spread out other props incase someone passes them : like `{...props}` in the fnc and inside the element

### Input: (Concept of Forward Ref and useId)

- The input component is for the forms and the posts.
- props like label, className, type can be passed along with spread props `{...props}` if user wants to pass other properties
- props will be the first parameter
- Since we will be using forwardRef here, the second parameter would be `ref`
- use the `&&` operator to display the label if there is? use the `id` to sync up label and input field
- in the input element pass all the `props` along with ref and id(from useId) [id is used for optimization]
- **Why Forward Ref?**
  - component is on one file and the state used in it is on another. Hence to use that state efficiently and to access the child component DOM through the parent component
  - reference is passed to parent component to access DOM node of the child component
  - ref in React is like ids and classes in CSS/JS to access a DOM element
  - ref in general is also used to access the real DOM and its re-rendering

### Select

- select is basic component where select element is used with options array being mapped and each option displayed
- for optimization key is also set to option
- spreaded props, className, and `ref (forwardRef)` are used

### Login (a bit of useForm)

- useNavigate is used for navigation to root page after login
- useForm is used to register the details and handle submission [to use it refer the documentation of react-hook-from]
- conditional rendering of error is done using `&&` operator

- First the error is set to "" empty/ flushed out
- authService Login method returns a session on the basis of which we then getUserAccount
- we then dispatch the login and pass the userData in it
- The above loginHandler is called when the form submission is done

- In each component we register the information using register of react-hook-from [more details on the docs]
- `matchpattern` used for email and `required` and `validate`

### Signup

- Similar to login component useNavigate and useForm are used with conditional rendering of error
- authService createAccount method is used this time to establish session and according to it we get userData from getUserAccount method
- we then dispatch the login reducer with the userData obtained and then navigate the user to home

- similarly registering of each component's data is done and a form is made with required fields and a submit button

### Real Time Editor ( use of tinymce [word like enviorment])

- Editor from tinymce is imported along with controller of React Hook Form
- props like control, label, name are passed in the component fnc
- Inside controller rendering of element is done whenever there is change on the Editor
- render gives a callback fnc (`render: ({field: {onchange}}) => {})
- The Editor components wraps up all of the rest requirements like the `apiKey init toolbar content_style`
- finally a func is called whenever the Editor's content is changed (`onEditorChnage = {onChange}`)

### Post Form ( use of react-hook-form and RealTimeEditor component [Real time slug-Transform])

- useNavigate and useSelector- to get userData from the store
- extract all of this from the userForm `register, handleSubmit, getValues, watch, control, setValue`
- pass on the default values of title, slug, content and style from the post passed as a prop in the functional component

#### Uploading and updating the post

- make a method to handle submission of form -**First case: if post already exists**
  - on submit the `async` submit handler will get all the data if the `post` has been passed
  - from then it will extract the image and upload it to the database using appwriteService method and delete the previous featuredImage from the database
  - then it will update the post using `post.$id` in update Method of appwriteService
  - it will also send the data as it is (...data) and then the file/image $id in the featuredImage attribute/field
  - then navigate accordingly if the post has been updated in the database -**Second case: if post doesn't exists**
  - upload the image file similar to above
  - then use createPost method of appwriteService passing all of the (...data) along with featuredImage
  - navigate the user to the post $id accordingly

#### Slug transform feature

- define a function using `useCallback` and if the value exists and is string replace the space with `-` using replace method (you can also trim and lowerCase the value)
- using `useEffect` Hook and setValue property of HookForm, set the value(`setValue`) of slug accordingly using the function defined above
- to do this on real time `watch` was used
- the unsubscribe helps optimizing the code

```javascript
useEffect(() => {
  const subscription = watch((value, { name }) => {
    if (name === "title") {
      setValue("slug", slugTransform(value.title), { shouldValidate: true });
    }
  });

  return () => subscription.unsubscribe();
}, [watch, setValue, slugTransform]);
```

#### Setting up elements

- Form handled by `handleSubmit` along with `Input` component for title slug And Image, `Select` for status and `RealtimeEditor` for content
- register fields as usual for react hook form as {...register()}
- `onInput` in slug field is used for proper formatting incase the user edits the slug field manually
  -set the value of slug according to `slugTransform` method and pass the value of event
- `getValues` is used to get the value of content in the RealTimeEditor as the default value
- `control` used to give control of RealTimeEditor
- Rest of the props are passed according to the need

### Protected Layout

- Authentication is checked here according to authStatus from the store and the authentication parameter passed (optional)
- user is `navigated` accordingly, `useEffect` and a loader state is used to optimize more
- logic used here: **(if (authenticated && authStatus != authenticated))else !authenticated**
- This component acts as a authorization layer for components that needs login to access - such as `Add Post` `CreatePost`
- Used while setting up browser router

### Logo

- returning a simple logo img with a custom width as parameter

## Creating Pages

### Signup - Import the signup component and use it inside a div

### Login - Import the login component and use it inside a div

### AddPost - Import the Container and PostForm and use the postFrom inside the container

### Home

- create an array of posts as state
- set it with documents of post using getPosts of appwriteService
- check for posts using length and render the message according to the authStatus(login or logout)
- map the posts with key as its $id and spread each post inside it {...post}

### AllPost

- do similar to the `Home` above

### EditPost

- make post state, get the slug from params, useNavigate
- using useEffect to check for the slug [slug and navigate as dependencies]
- get the post from appwrite by passing the slug on the method
- update the post state if we get the post from the service else `navigate` to home
- conditional render the post inside the Container component using the PostForm(post = {post})

### Post

- similar to editpost make post state, get the slug from params, useNavigate
- get the user data from the store using useSelector
- check for author using userID in post and userData if post exists
- similar to above useEffect according to the slug update the post else `navigate` to home
- make a method to delete the post from the appwrite using post.$id
- delete the file too if the post deletion is successful using the method in appwrite and parameter as (post.featuredImage)
- display the img using appwrite `previewFile` method
- According to author available display the delete and edit button :

  - on edit take the user to the edit page (using `Link` of react-router-dom)
  - on delete button give the referance of above delete fnc created

- display the title and content of the post using dot
- parse the content using `parse` from html-react-parser

## Setting up the router

- set up the create Browser context inside of which set App component as the main router and others as children
- apply the protected layout in router where needed and apply the props authenticated as required.
