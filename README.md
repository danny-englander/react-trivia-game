# TriviaLand, an accessible React.js trivia game

TriviaLand is a `create-react-app` using React 18 that tests a user on their trivia knowledge through a series of 8 questions.

## Code methodology and overview
At the heart of this app is a global context file that implements React's `createContext` and  `useReducer` as a way of managing state globally and thus removing much of the business logic from components. `useState` is applied when needed within specific components.

The global context defines various reducer cases such as `SELECT_ANSWER`, `NEXT_QUESTION`, and `RESTART_GAME` via a wrapper called `GameProvider` which encases the game component and all its decedents.

These cases are then dispatched in various components when needed to pull in variables, state, and data.

For example, in `Game.jsx`, I define a variable called `onLockClick` which is a key part of the game functionality and adds to the accessibility features as well. Here you can see the reducer being dispatched using `payload` once a user has selected an answer and clicked "Lock in Answer."

```javascript
  const onLockClick = () => {
    // If no answer has been selected, set a form validation message.
    if (selectedAnswer === '') {
      setFormValidationMessage(
        'Please choose an answer from the choices above.',
      )
      return
    }
    // Otherwise, dispatch and show the correct answer once the answers are locked in.
    dispatch({ type: 'SELECT_ANSWER', payload: selectedAnswer })
  }
```
## Design
For the design, I wanted something fresh and modern looking so I went to Dribble for inspiration and found plenty. In addition, I downloaded some modern abstract images from Envato elements that I thought would fit in nicely.

## Styling / theming
For theming and styling, I use [React CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet) implemented via Sass and the newest version of React scripts for compiling along with a few global styles. I am also using [React icons](https://react-icons.github.io/react-icons/) which I really love!

CSS module classes are namespaced in JSX files with "style..." so that the classes are differentiated from variables, for example, `className={styleFormActions.warning}`. A CSS module file is imported like the example below, the sass is instantly compiled to CSS when during NPM runtime.

```javascript
import styleFormActions from '../assets/scss/components/formactions.module.scss'
```
## Running this app locally
If you'd like to run this app locally, follow the steps below:

1. clone the repo: `git clone git@github.com:danny-englander/react-trivia-game.git`
2. `cd react-trivia-game`
3. Ensure you are using node 16 by running `node -v` or if you have Node Version Manager installed, run `nvm use`
4. Run `npm install`
5. Finally, run `npm start` and that will open up the app in your browser.

## Demo
This app is deployed on [CodeSandbox](https://codesandbox.io/s/github/danny-englander/dannys-trivia-game) as well as on [Netlify](https://trivia-land.netlify.app/).

## Roadmap
* Fix tabbing bug so that the tabindex goes back to the beginning on the next screen or even better, to the beginning
of the form. probably React's `useRef` might come in handy for this.
* Allow for multiple answers to some questions
* Implement a splash screen to start off the game
* Make improvements based on peer feedback
* Keep track of a user's scores, add something like, "your highest score so far is..."
* Randomize questions
* Hook up a trivia API
