# Pizza Time

<img src="https://github.com/catherineisonline/pizza-time-with-react/blob/main/src/images/project-preview.png?raw=true" ></img>

<p>Pizza Time, a pizza restaurant that offers online order services, is one of the most interesting projects I am planning to implement. The goal of this project is to make this restaurant landing page look almost like an actual working bussiness. It should have all the interactivity usual e-commerce websites have. 
</p>

<!-- GETTING STARTED -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Used Dependencies

- [React Icons](https://www.npmjs.com/package/react-icons)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [React Alice Carousel](https://www.npmjs.com/package/react-alice-carousel)
- [Leaflet Maps](https://react-leaflet.js.org/docs/start-installation/)

# Goals

<p>The goal of this project is to learn React and become a bit closer to real life projects. Most of the projects I worked with are only small pieces that are not much useful on it's own. By doing this project I will have to think not only as a developer but as a business and a customer. I will be updating the project time to time and adding information on what I did, what I learned, change of the plans and etc. Let's dive into details of this project! </p>

# Plan

<p>When working on a big project it defininetly gets harder to have all the ideas and plans in your head. It helps a lot when you can simply write everything down and follow the to do list. In this section, I will be adding everything I want to be happening on the website, whether it's backend or frontend. Yes, eventually I will need backend as well.</p>

### User Story

As a user, I want to be able to add items to cart even if I am not logged in/registered. When navigating to the menu page, I want to see menu items that have pictures, name, ingredients, pricing.
I want to be able to sort the menu by categories, as well as be able to find something specific by writing it in the search bar. I want to be able to add items to cart, indicate the amount or delete the items from the cart. In the cart section, I want to be able to see how much I have to pay total and have the possibility to navigate to payments. Before paying, I want to add a special request to my order, like, "no spicy, please".

### To-Do

#### Landing Page

1. [x] Create main landing page
2. [x] Carousel to header container
3. [x] Animation effect on landing page for Services & Image Grid section
4. [x] Interactivity to food categories on landing page - e.g. Pizza, Drinks, Burgers, Pasta
5. [x] Contact Form validation on main page
6. [x] Let the visitor scroll to the top of the page with one click
7. [x] Email subscribtion section
8. [x] Add accepted payments
9. [ ] Smooth component loading animation
10. [x] Email Form validation on main page
11. [x] Modal window for login button

#### Login Modal

- [x] Email & password input
- [x] Forgot password option
- [x] Link to registration form

#### Menu Page

1. [x] Sortable by categories - category navigation on the side

- [x] Pizza category
- [x] Sushi category
- [x] Drinks category
- [x] Pasta category
- [x] Sale category

2. [x] Search input available
       Menu items have:

- [x] Pricing
- [x] Name
- [x] Ingredients
- [x] Image
- [x] Sizings (in case of pizza)
- [x] Add to cart button

5. [ ] Add pagination
6. [x] Menu side-cotainer

#### A single item page

- [x] A single menu item page
      A single menu item page should include:
- [x] An image
- [x] Name
- [x] Ingredients
- [x] Price
- [x] Ability to choose size (in case of pizza)

#### Cart

- [x] Cart page
- [x] Empty cart page
      Cart page should include:
- [x] Added item
- [x] Amount of unique items (if the same item is added several, it shouldn't repeat)
- [x] Disable ability to change item attributes
- [x] Ability to add/remove items
- [x] Ability to remove all items
- [x] Total amount of items
- [x] Total price
- [x] Tax amount
- [x] Buttons to menu/order page

#### Order page

- [x] Choice between order and takeaway
- [x] Promo code input

#### Blog

1. [x] Grid of blog posts
2. [x] Each post contains

- [x] Name
- [x] Picture
- [x] Description
- [x] Date
- [x] Author

2. [ ] Add pagination

#### Contact

1. [x] Contact form with validations

#### Other

1. [x] Create sub-pages:

- [x] Menu
- [x] Blog
- [x] About
- [x] Contact
- [x] Cart
- [x] Registration page
- [x] Forgot Password page

2. [x] Create database or simple object for Menu
3. [x] Scroll to top when navigating to another page
4. [x] Update meta title depending on the current page
5. [x] Responsive layout

## Version 1.0

This is the first version of the project which was last updated in March 8

#### Day 1

- Created the landing page using some pizza restaurant template. Created everything from scratch as I also wan to keep practicing HTML and CSS. Installed the React and started my first project. It all doesn't seem very difficult because I already tried working with Vue and the process looks very similar.
- There are many new things I learned:

1. JSX - in React I cannot use simple HTML, I have to use JSX which stands for JavaScript XML. The JSX is translated by Babel (a JavaScript compiler), converted to plain JavaScript. There is no huge difference between JSX and HTML but there is still some. To make my life easier I just use online <a href="https://magic.reactjs.net/htmltojsx.htm">HTML to JSX Compiler</a>. I started my project with simple HTMl so I had to compile everything.
2. Just like in Vue, images and links work a bit differently. Maybe it also depends how I have everything organized, however src and href did not work for me as it usually does. Usually when using img src you write src="/images/myimg.png". To use an image in component I have to impoty the image first and then use it. I have to import MyImg from "../images/myimg.png" and then use src={MyImg}.
3. FontAwesome also works differently, you need to install library for that which you can read more about right <a href="https://fontawesome.com/v5/docs/web/use-with/react">here</a>.

#### Day 2

- Finally made the navigation menu work, specifically links! It's still not 100% clear however it is the first time I heard about Routers and Link tags. I had navigation inside header which caused me a problem so if it's your first time working with React, it's much easier to have navigation menu component separately.
- Instead of JS I used TypeScript for navigation. I am not sure exactly why it wasn't working with JS and the tutorial I used was also based on TypeScript, so I decided to try it out.
- I started working with Menu page now and created an object of menu items. Working with objects is also a little but more different and it's wasn't as easy to take out the values. The best method I found is using a map method. Still have to look into this more.

#### Day 3

- Today I finally finished most of the clickable links. Now you are able to move to another page where only two components remain consistant - header and footer navigation. I also added functionality - everytime you move to another page you will end up at the top of the page. So, if you click on any link in footer, next page will start at the top. Previously it would start at the bottom.

- I also added a lot of new items to menu categories. I decided not to spend too much time on content(even though I am having fun with it) and duplicated it 2x times in order to I have a lot of items on the menu. So if you see some items repeating, it was made on purpose.

- I also had an issue with importing function as simply as I can with image, for instance. If I declared some function with const SomeFunction, for example and imported it, it didn't work. I decided to go easy way and repeat the function in several components instead. I will definitely get back to this.

- I also moved main page components into one file. I do love having everything as separate as possible so I can understand the workflow better, however I ended up having too many files and it got messy. The components did remain separate however they are just located in the same file now.

- Added a very easy piece of code that changes the title tag depending on the page I am on. There are more advance ways like React Helmet or React meta tags however I don't need it right now, works perfect as it is now.

#### Day 4

- I added slider to the header section. I was planning to make it with good old JavaScript however I learned about awesome React component called React Alice Carousel. React Alice Carousel is a React component for building content galleries, content rotators and any React carousels. I didn't have spend a lot of time and code to create the carousel and it is something I will definitely will use a lot from now on. It's very easy to install and use. Feel free to check it out <a href="https://www.npmjs.com/package/react-alice-carousel">here</a> and other awesome resources at the end of this file

#### Day 5

- Today I decided to finish off some small components. I added email subscribtion section on the landing page and decided to remove about me part, it didn't look very nice with other components. I aded some information to both Contact and About me pages. I also finally added scroll to top botton on landing and menu page. Very convenient when the page is long.
- I finally managed to deploy the website! I had issue deploying it for several days because I have filed in src folder and GitHub was showing my README file instead. I used many different ways but nothing helped me right away, had to make some changes manually. Not all the guides cover neccecary information sometimes or miss out some import details, so you have to keep searching. Very funny example - when I first started learning git and github I was trying to push changes to GitHub repo right from my computer and not manually. I had to go through several articles only to find out that I missed out one detail, "git init". Not all the guides mentioned it or not all the guides mentioned that I needed to cd (change directory) in the terminal and be in the correct folder first.
  Here is what I did to make it work:

1. Installed <a href="https://www.npmjs.com/package/gh-pages">gh-pages</a> (npm install gh-pages --save-dev)
2. Then I created a new repository myself called gh-pages (for some reason I expected the package to create it on it's own but it didn't). I am not I remmeber how I did it, I am still learning.
3. I made sure that my package.json files have these lines in scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build" and separate line "homepage": "/pizza-time-with-react". Now this is where I made a misrake at first. I read that either you need to add the whole URL like https://github.com/catherineisonline/pizza-time-with-react. However it didn't work. Then I read you need to write "homepage": "." or "homepage": "/" and it didn't help either. Finally I simply wrote the name only and it helped. So it should be "homepage": "name of the repository not including (https://github.com/yourgithubusername)".
4. I deleted .cache file in node modules folder but I am not 100% sure if that helped.
5. Then also make sure that you need to change setting in your repository. Go to Settings > Pages > and under Source select branch called gh-pages (the one I created manually).

- After I deployed the website, I noticed that the images were sometimes loading with slight delay. Having some experience with SEO I realized I missed the image optimization part. I have a lot of images and it's still messy with too specific names and different formats. However I still compressed some images on the landing pages and the difference was very noticable. So make sure to always compress images and much better if you do it beforehand.

- I also added posts to blog section and used an interested library for <a href="https://www.npmjs.com/package/react-lazy-load-image-component">lazy load</a>. This one is a bit old but working fine. There are many posts and images, that's why it was loading with delay. I did compress it however seems like it was not enough.

#### Day 6

- Today I fixed some small issues on the landing page like responsiveness and resizing of images. I added some small animations to icons.
- I also learned how to use functions inside components and added validation for newsletter and contact form on the landing page. Functions in React are very similar to Vue and when I first started Vue some time ago, it was really hard. Once, I was trying to implement some function for like 3 days, I think. Happy to see that it paid of.
- Added some responsiveness to all the pages however I am not done and probably once I finish everything I will work mostly on perfecting responsiveness as well as try to learn some basic of UX/UI design.

#### Day 7

- I check the website on my phone via Chrome and also Safari. I have had this issue before where Safari does not support something specific. There were some small changes I needed to make to fix it. I also had to convert all pictures from avif format to jpeg. I never really worked with avif before however the images I had happened to be avif. Turned out Safari doesn't support it yet. I also compressed blog images one mroe time however for some reason it's being slow. On menu, where there are more images it's working fine. Still unsure what is causing it and I don't have much experience to test it.
- Started working on the order process including things like cart, registration/login form, adding/ removing items from cart.

#### Day 8

- Today I fixed some small details and styles. Started working on registration and forgot password pages. I was trying to create an array of year dates and push them to the HTML however it wasn't working properly. At the end I decided to hardcode the dates however I definitely would love to try it again.

#### Day 9

- Did some changes to responsiveness and updated some css once again. Found it more useful to check the code in Safari first as many things look fine in Chrome but not in Safari. For now, I decided to slow down on this project as my other tasks are more high level and I need more time to spend on it. I am going to use this project in my portfolio so I will get back to it time to time and improve it using my new knowledge. This is my first React project and it was definitely amazing experience.

## Version 2.0

This is the second version of the project which I started on May 20, almost 2 month after the Version 1. I am getting back to this project to remake and improve it after spending these 2 months on React.
First, I will change everything to CLASS COMPONENTS because I have been mostly working on classes instead of functions and would like to keep it that way until I move on to function components.
Secondly, I will add more interactivity this time, like adding items to the cart and removing it. I had a very hard time doing it last time, let's see how my learning paid off!

#### Day 1

I created a separate file for all menu items and categories which saved me tons of space. Instead of having separate data for each category, I created just one and added the possibility to filter each of them by category. This helped me to get rid of 10 extra components! I do not want to do this now however I would gladly also make a GraphQL for this data. Now, I do not have to load different components every time I change a category. I simply render different data. This was remade to make the add to cart function and separate menu item page easier to create.
Started cart interactivity by adding add to cart option on the menu page along with the attributes. This time, I added size attributes only to the pizza. The customer shouldn't be able to add items to cart until they chose size option and should be able to add products to cart if there are no attributes. Now, you can also see cart item count on navigation cart icon.

#### Day 2

Now I have a fully functional menu that enables the customer to add products to cart and check them on a separate cart page. They can now see a message once they add the item and it's possible to do it via menu page or separate product page. On the cart page, I disabled the option to change pizza size however you add or remove the product stacked by chosen size. You can also see the total amount of the items and how much you have to pay. Due to the websier design, I decided to skip the cart overlay and made only cart page. As long as I do not have any backend, I am not going to implement too many details of real life e-commerce website.

#### Day 3

Had some issues with adding items to cart in the cart page. Interesting thing to remember! Always add a key value to components that are repeatable. For example, if you are rendering the componentsof blog post, you need to add a unique key value to this repeating blog post component, so React can understand they are actually different blog posts. Otherwise you will end up having random issues!! I also added checkout page and fixed some minor css.

#### Day 4

I have a lot of images on the website and I didn't think in advance when choosing them. Not all of them have similar dimensions which makes my life harder to first of all, design and second huge sizes makes images weight more and as a result delay the loading time. So, I decided to change or resize the images. Would also be perfect to have different sizes for mobile and desktop, however I decided not to hassle to much right now.

## Useful Resources

- <a href="https://magic.reactjs.net/htmltojsx.htm">HTML to JSX</a> - a great tool to compile HTML to JSX.
- <a href="https://www.lipsum.com/feed/html">Lorem Ipsum</a> - dummy text generator, there no need to think of big articles on your own.
- <a href="https://react-leaflet.js.org/">Leaflet</a> - map API. It's a second project where I use it and I like it a lot. It's free and doesn't require any credit card info if you want to use it for some small projects.
- <a href="https://icons8.com/">Icons8</a> - very good collection of icons, in case you cannot find what you needed on FontAwesome.
- <a href="https://www.npmjs.com/package/react-alice-carousel">React Alice Carousel</a> - React Alice Carousel is a React component for building content galleries, content rotators and any React carousels.
- <a href="https://tinypng.com/">TinyPNG</a> - smart lossy compression techniques to reduce the file size of your WEBP, JPEG and PNG files.
- <a href="https://www.npmjs.com/package/react-lazy-load-image-component">React Lazy Load Image Component</a> - React Component to lazy load images and other components/elements.
- <a href="https://react-icons.github.io/react-icons">React Icons</a> - Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
