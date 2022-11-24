# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## You can even start by building the project first, and then serve it on "localhost:3000"
### `npm run build`
### `npm install serve`
### `serve -s build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## What I have done:

### Architecture for the project: 
1. separated folders and methods by concerns (folders: API, Components, Conext, HOC, Pages, Utility; and methods by query and command), 
2. shortened import paths using index.ts in every folder, 
3. used descriptive programming by exposing functions over functionalities.
4. extracted functions out of the JSX code.
5. gathered all states in the App.tsx, to make components as controllable as possible.
6. Built HOC and pass to it prop to be rendered, and made it compound.
7. Wrote throttle function, to stop users from overdoing search requests.
8. Used ConextApi just to pass the Console message prop to all children components.
9. All styles are embedded into folders of components they are affecting to.
10. Sass naming BEM is implemented in almost all components for easier orientation into sass files and to prevent double styles from occurring.
11. Data for the new View-Page is always taken while opening that page, to prevent the app from crashing while opened from another source through the link.
12. All data is typed.
13. Commented out StrictMode to stop double rendering of components.
14. Made the app responsive. 
15. Loading while waiting for data implemented and animated, check it offline.

### Other than that, the specs are completed:
1. Every component console out his name.
2. Routes "/posts" and "/post:{id}" are working correctly.
3. Every post leads to the detail page where all comments related to the post are listed.
4. Every comment has name bounded and printed. 
5. You can filter all 100 posts by typing the title of the post into the search input. 
6. Components are reusable.
7. Style is provided.
8. TypeScript used.
9. HOC, render prop, Compound component implemented 

### Avoided:
1. 3rd party state management. 
2. 3rd party UI component libraries







