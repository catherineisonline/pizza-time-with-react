# Pizza Time

![Pizza Time preview](https://github.com/catherineisonline/pizza-time-with-react/blob/main/src/assets/images/project-preview.png?raw=true)

I designed and built a full-stack food ordering platform for the gastronomy industry using React, Express.js, and Turso (libSQL).

[![GitHub license](https://img.shields.io/badge/license-Non--Commercial-blue)](https://github.com/catherineisonline/pizza-time-with-react/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/catherineisonline/pizza-time-with-react)](https://github.com/catherineisonline/pizza-time-with-react/issues)
[![GitHub stars](https://img.shields.io/github/stars/catherineisonline/pizza-time-with-react)](https://github.com/catherineisonline/pizza-time-with-react/stargazers)

Live Version: [Pizza Time](https://pizza-time-with-react.vercel.app/)

- Dynamic UI: Features a fictional restaurant with pizzas, sushi, and pasta. Built with React Router, Carousels, and Framer Motion for smooth navigation and animations.

- Fast & Clean Browsing: Used React Paginate and Lazy Load for faster menu browsing and performance.

- Secure & Scalable: Managed user data and menu items with UUID and Turso (SQLite).

- Cart + Auth System: Express.js backend handles user login/register with hashed password, profile updates, and reCAPTCHA-protected contact & registration form, JWT based sessions.

## Contents

- [Getting Started](#gettingStarted)
- [Instructions](#instructions)
- [Database](#database)
- [Goals](#goals)
- [User Story](#userStory)
- [Project Decisions](#projectD)
- [Used Dependencies](#dependencies)
- [Useful Resources](#resources)
- [Contribution](#contribution)
- [License](#license)

## Getting Started <a id="gettingStarted"></a>

To get started you need to:

1. Clone the project
2. pnpm install
3. Install listed dependencies
4. Use available scripts, like pnpm dev

## Instructions <a id="instructions"></a>

- When you fork or download the project install node modules using `pnpm install` and then any additional dependencies you don't have from <a id="dependencies">Dependencies</a> list

- Next, you need to create the file named `.env` located outside the src file

- I am using several variables (make sure to add them to .env and add .env to the .gitignore to avoid exposing sensitive info):

1. `.env` (in the backend folder)

- TURSO_DB_URL, TURSO_DB_TOKEN - these variables contain information that will connect you to the Turso database. You can use the following [documentation](https://docs.turso.tech/sdk/ts/quickstart). If you use any other database you need to use the corresponding information to connect to that database. The token can be created after registration.
  Note that the table for users in my case is named "users" and contains the following data: id | email | password | fullname | address | number.
- JWT_SECRET, JWT_EXPIRES_IN - a secret keyword to verify token and expiration value, in my case, 1 day.
- CAPTCHA_SECRET - can be found once you create an account for reCaptcha at https://www.google.com/recaptcha/about/. Please use their documentation for better understanding.

2. `.env` (in the src folder)

- VITE_USERS_URL, VITE_LOGIN_URL, VITE_AUTH_URL, VITE_LOGOUT_URL, VITE_UPDATE_URL, VITE_CAPTCHA_URL - routes for Express server. First, it's better to run the project locally and only then switch to whatever you want. If you want to run the server locally the value of this variable should be similar to http://localhost:3000/users(VITE_USERS_URL). In this project I set up backend using Vercel. You can google "How to Deploy Your Node.js Backend Project to Vercel" and set up your own backend.
- VITE_CAPTCHA_KEY - can be found once you create an account for reCaptcha at https://www.google.com/recaptcha/about/. Please use their documentation for better understanding.

Once you set up the variables, you can run the server on one port if you use local server and the website on another port.

‼️ NOTE: Please, do ignore `shortener` route. It's not used in this project but this backend is shared with a different project! Thank you.

## Database <a id="database"></a>

To use the registration functionality for your own project, you need to use your own database. You can use any SQL database you wish and adapt it to this project. I am using [Turso](https://turso.tech/) database. To have your own database you need to register and set it up by provided information. I recommend you to use their [documentation](https://docs.turso.tech/sdk/ts/quickstart). You can find the way to connect to Turso in `backend/config`.

## Goals <a id="goals"></a>

The main goal of this project is to get better at React and experience what it's like to work on something that feels more like a real project. In the past, I've mostly worked on small pieces of code that didn't do much on their own. With this project, I want to step into different shoes, not just as a coder, but as someone who's building something useful and someone who's going to use it. As you notice, I update this project very often because I often improve, change or test new technologies and methods.

## User Story <a id="userStory"></a>

As a user, I want to be able to add items to cart even if I am not logged in/registered. When navigating to the menu page, I want to see menu items that have pictures, name, ingredients, pricing.
I want to be able to sort the menu by categories, as well as be able to find something specific by writing it in the search bar. I want to be able to add items to cart, indicate the amount or delete the items from the cart. In the cart section, I want to be able to see how much I have to pay total and have the possibility to navigate to payments. Before paying, I want to add a special request to my order, like, "no spicy, please".

## Project Decisions <a id="projectD"></a>

- **React**: I chose React for learning purposes as my first JavaScript library. There wasn't a specific technical requirement, but during my research, I found it very popular and beginner-friendly.
- **Framer Motion**: I enjoy using Framer Motion, especially with React, because it offers easy setup, good documentation, and impressive animation capabilities. The downside is that it's not very lightweight, but as the project grew, I wanted to include it to keep learning.
- **CSS**: My go-to is always plain CSS because I believe that mastering CSS makes other libraries or preprocessors easier to learn. It also gives me more control while I'm learning and experimenting.
- **Turso**: Even though backend isn't my specialty, I needed a fully functional website and wanted something easy to use without deep knowledge. Turso also provides an interface to view tables, making database interaction simpler.
- **Express**: To build a more complete backend, I'm currently learning and improving it as I go. I chose Express because it works well with React and is easy to use since it's based on JavaScript.
- **Feature-based folder structure**: I haven't experimented much with folder structures before, but I recently switched to a partially feature-based structure. I don't have a strong argument for why I chose it, but I liked the idea and wanted to try it out.

## Used Dependencies <a id="dependencies"></a>

### Dependencies:

- [@libsql/client](https://docs.turso.tech/sdk/ts/quickstart)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [Express rate limit](https://express-rate-limit.mintlify.app/quickstart/usage)
- [Framer Motion](https://www.framer.com/motion/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Leaflet Maps](https://react-leaflet.js.org/docs/start-installation/)
- [React](https://react.dev/learn/build-a-react-app-from-scratch)
- [React Alice Carousel](https://www.npmjs.com/package/react-alice-carousel)
- [React DOM](https://www.npmjs.com/package/react-dom)
- [React Google Recaptcha](https://www.npmjs.com/package/react-google-recaptcha)
- [React Lazy Load](https://www.npmjs.com/package/react-lazy-load-image-component)
- [React Leaflet](https://react-leaflet.js.org/)
- [React Paginate](https://www.npmjs.com/package/react-paginate)
- [Tilt](https://micku7zu.github.io/vanilla-tilt.js/)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [uuid - Random id generator](https://www.npmjs.com/package/uuid)

- [libsql](https://www.npmjs.com/package/@libsql/client)

### devDependencies:

- [npm-check](https://www.npmjs.com/package/npm-check)
- [Vite](https://vite.dev/guide/)
- [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

## Resources <a id="resources"></a>

- [HTML to JSX](https://magic.reactjs.net/htmltojsx.htm) - a great tool to compile HTML to JSX.
- [Lorem Ipsum](https://www.lipsum.com/feed/html) - dummy text generator, there is no need to think of big articles on your own.
- [Leaflet](https://react-leaflet.js.org/) - map API. It's a second project where I use it and I like it a lot. It's free and doesn't require any credit card info if you want to use it for some small projects.
- [Icons8](https://icons8.com/) - very good collection of icons, in case you cannot find what you needed on FontAwesome.
- [React Alice Carousel](https://www.npmjs.com/package/react-alice-carousel) - React Alice Carousel is a React component for building content galleries, content rotators and any React carousels.
- [TinyPNG](https://tinypng.com/) - smart lossy compression techniques to reduce the file size of your WEBP, JPEG and PNG files.
- [React Lazy Load Image Component](https://www.npmjs.com/package/react-lazy-load-image-component) - React Component to lazy load images and other components/elements.
- [React Icons](https://react-icons.github.io/react-icons) - Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.

## Contribution <a id="contribution"></a>

This project serves as a personal portfolio website to show off my personal skills. I do not accept any contributions like pull requests to this project however if you have any suggestions or ideas feel free to message me or submit an idea in the [discussions](https://github.com/catherineisonline/pizza-time-with-react/discussions). Otherwise, you are free to fork this project and change it for your own purposes.

## License <a id="license"></a>

This project is released under the MIT [LICENSE](https://github.com/catherineisonline/pizza-time-with-react/blob/main/LICENSE). You can find the specific terms and conditions outlined in the LICENSE file. This means you're free to utilize, modify, and distribute the project according to the terms of the MIT License.

#### Build Your Portfolio:

Feel free to incorporate this project into your personal portfolio! Showcase your skills and creativity by featuring your adaptations or implementations of this project. Just make sure to follow the guidelines of the MIT License while doing so. At the same time, I do not recommend copy pasting this project into your portfolio and claiming it as your own until you read the code and understand the logic or rewrite it.

Happy coding!
