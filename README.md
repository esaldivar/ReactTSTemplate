# React Typescript Frontend Template

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


# Table of Contents

* [Local Development](#local-development)
* [Production Build](#production-build)
* [Testing ](#testing)
* [Contributing](#contributing)
* [Continuous Integration](#continuous-integration)
* [Component based design](#component-based-design)
* [Styling](#styling)
* [Strong typing](#strong-typing)
* [Languages And Tools](#languages-and-tools)

### Local Development

Clone the project and install it using the command below.  

`yarn install`

Run the project by using the command below.

`yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Production Build 

`yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Testing 

`yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Contributing

This application makes it easy to write clean code by formatting and linting using [Husky](https://typicode.github.io/husky/#/).  On commits, which are initiated using the git command `git cz` Husky runs a pre-commit script.  It formats and lints the code to the AirBnb standard to ensure code quality.  On push, Husky runs the pre-push script to update the CHANGELOG.md, listing all conventional commits, bumping the version and pushing.

### Continuous Integration

I created a github action when a pull request is made to the main branch, the application is built and tested.  Ideally there would be multiple CI yml files to protect branches and ensure there is a smooth pipeline from local development to production.


### Component based design

The application was built with compoment based design.  The idea is to reuse components where possible and to make the pages respond to the properties passed into them.  

The idea was to only create the necessary amount of components and to pass state around when needed.  Context stores were not created to reduce complexity due to the small scope of the project.

### Styling

Styling was achieved with CSS.  MUI was used as a component library to bootstrap components such as buttons, textfields, and pagination. 

### Strong typing

While not a requirement, I utilized typescript to understand the shape of properties that components are consuming.  During development this allowed me to understand errors and using intellisense, I was able to predict what was necessary when building portions of the application.

### Languages and Tools:

This application was built using HTML, CSS, React (Typescript).

<p align="left"> 
    <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a><a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a><a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/><a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
  </p>


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
