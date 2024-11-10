# Getting Started with Speedy

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

# Requirements:

1. Key Metrics:

- Total Users - <span style="color:green"> A card displaying total new user, percent increase from
  last month </span>
- Active Users - <span style="color:green"> A card displaying total active user, percent increase
  from last month </span>
- Total Streams - <span style="color:green"> A card displaying total song streamed, percent increase
  from last month </span>
- Revenue - <span style="color:green">A card displaying total revenue, percent increase from last
  month </span>
- Top Artist - <span style="color:green">A card displaying top artist of the month along with its
  information </span>

2. Data Visualization:

- User Growth Chart - <span style="color:green"> Done </span>
- Revenue Distribution - <span style="color:green"> Done </span>
- Top 5 Streamed Songs- <span style="color:green"> Done </span> Rather than creating a chart I
  created a list of top 5 songs played

3. Song Table - <span style="color:green"> Done </span>

## User Interaction:

- Sorting and Filtering - <span style="color:green"> Done </span> Work when we integrate with api.
  We can see the params in console.
- Chart Interactions - <span style="color:green"> Done </span>
- Responsive - <span style="color:green"> Done </span>

## Performance

#### Lighthouse Performance Test

 <img width="1426" alt="image" src="https://github.com/user-attachments/assets/b7cbcc3b-f227-4013-a37b-f9763991fe55">

### Small css and js chunk size

<img width="1440" alt="image" src="https://github.com/user-attachments/assets/413cf9a4-3462-4092-9be4-0658a88de297">
<img width="812" alt="image" src="https://github.com/user-attachments/assets/21e4a021-57ac-4e42-8960-7f910309716c">

## Things intensionally left out

- No navigation menu as we only have one page

### Behind the scene

- zustand for store
- @tanstack/react-query and axios for api call
- @tanstack/react-table for table
- recharts for charts
- husky, lint-staged, eslint and prettier

### Thought Process

Lets connect to discuss this further in details.
