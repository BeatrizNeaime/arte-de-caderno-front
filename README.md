# Arte de Caderno

Frontend application for 'Arte de Caderno'

## How to run locally

1. Clone the repository - `git clone`
2. Install nodejs (latest version)
3. Install de packages - `npm i`
4. Run using `npm start`

## How it was built

### Styles

At first, I started using simple CSS files. During the process I decided to change to [TailwindCSS](https://tailwindcss.com), as a try to turn the styling easier. After a few months I noticed the code was too long due code repetitions, then I decided to change the styling completely by using [Styled Components](https://styled-components.com). The main components can be found at `styles/sharedStyles.jsx`.
If the component need some changes, the new version will be at the file which the changes were needed. If, by need, there's a need to a new different component but not used as much as main, it can be found at `Components/[component_name]`. All the CSS constants, like colors and fonts, are at `Components/UI/constants.js`.

### Responsibility

To check the window size, the dev can use a function from `Material UI` named `useMediaQuery`. The usage is simple:

```js
const desktop = useMediaQuery("(min-width: 768px)"); //parenthesis needed
```

and the function will return `true` if the window width is above `768px` (tablet size) or `false`if its below.

### Routing

The Front Routing was made by using [React Router Dom](https://reactrouter.com/en/main). The routes can be found at `hooks/Routes.jsx`

### Contexts

To share data through components I created a context, named `userContext`. Basically all pages have access to user data.

## To do (front-end side)

- [x] Finish singup pages
- [ ] Make sure all pages are correctly integrated with backend server
- [x] Finish student dash
- [ ] Develop judges functions
  - [ ] Distribute draws through judges
  - [ ] Screen showing all draws waiting for a note (per judge)
  - [ ] Screen to teach how to attribute a note to a draw
  - [ ] Autosort by note
  - [ ] Screen showing the final
