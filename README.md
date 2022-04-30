## Cryptospace

An application that allowed users to examine cryptocurrency rates and news, built with React, Redux, Tailwind, and ChartJS.

## Project Status

This project is currently in development.

## Project Screen Shot(s)

#### Example:

![Layout]()

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

## Reflection

This was a 3 week long project built during pendamic breakout and military coup. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally I wanted to build an application that allowed users to look over crypto prices and news. I started this process by using the `create-react-app` boilerplate, then adding `antd`, `redux`,`redux toolkit`,`axios`,`chart.js`,`html-react-parser`,`millify`,`moment` and `react-chartjs-2`.

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, Chart, Data, and a significant amount of JSX and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes.