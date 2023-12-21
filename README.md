# MVST Code Challenge

- This project is done for MVST's code challenge.
- The web app used for retrieving specified user's repositories and applying search filters.

## Deployment

The project is deployed to Netlify.
- Netlify is chosen since this is an only frontend project.

[Deployed here](https://main--mvst-coding-challenge-sudeozer.netlify.app/user/sudeozer)

## Setup

Before starting the project, local .env file should be updated since Github API is used in the project.

Steps
- In your Github, click profile photo on the upper-right corner and select Settings.
- In the left-side bar, choose Developer Settings.
- Again in the left-side bar, click Personal Access Token.
- Generate a new token using the Generate New Token (classic) option
- Select "read:user" permission only and generate the token.
- The last step is saving the token in .env file, use REACT_APP_GITHUB_TOKEN as naming.

```js
REACT_APP_GITHUB_TOKEN = 'YOUR TOKEN GOES HERE'
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
Tests for util functions are added.

### `npm run storybook`

Launches the storybook where UI components and pages can be examined.

## Future Improvements

- UI can be improved with the help of ThemeProvider.
- Pagination can be added to Github API requests.
- Testing can be improved to test pages and individual components.
