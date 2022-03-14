# Pizza Time

<p>Pizza Time, a pizza restaurant that offers online order services, is one of the biggest projects I am planning to implement. The goal of this project is to make this restaurant landing page look almost like an actual working bussiness. It should have all the interactivity usale-commerce websites have.  
</p>

# Goals

<p>The goal of this project is to learn React and become a bit closer to real life projects. Most of the projects I worked with are only small pieces that are not much useful on it's own. By doing this project I will have to think not only as a developer but as a business and a customer. I will be updating the project time to time and adding information on what I did, what I learned, change of the plans and etc. Let's dive into details of this project! </p>

# Plan

<p>When working on a big project it defininetly gets harder to have all the ideas and plans in your head. It helps a lot when you can simply write everything down and follow the to do list. In this section, I will be adding everything I want to be happening on the website, whether it's backend or frontend. Yes, eventually I will need backend as well.</p>

### User Story

As a user, I want to be able to make an order without registration. When navigating to the menu page, I want to see menu items that have pictures, name, ingredients, pricing.
I want to be able to sort the menu by categories, as well as be able to find something specific by writing it in the search bar. I want to be able to add items to cart, indicate the amount or delete the items from the cart. In cart sections, I want to be able to see how muhc I have to pay total and have the possibility to navigate to payments. Before paying, I want to add a special request to my order, like, "no spicy, please".

### To-do

#### Landing Page


1. <del>Create main landing page</del>
2. Carousel to header container
3. Animation effect on landing page for Services & Image Grid section
4. Interactivity to food categories on landing page - e.g. Pizza, Drinks, Burgers, Pasta
5. Contact Form validation on main page
6. Let the visitor scroll to the top of the page with one click
7. Email subscribtion section

#### Menu Page

1. Sortable by categories

- Pizza category
- Burgers category
- Drinks category
- Pasta category
- Sale category

2. Search input available
3. Menu items have

- Pricing
- Name
- Ingredients
- Categories
- Image
- Sizings (in case of pizza)
- Add to cart button
- Amount of items added

4. Cart Section

- Choose between delivery or takeaway
- Order button
- Total amount

5. <del>Menu side-cotainer</del>

#### Blog

1. Grid of blog posts
2. Each post contains

- Name
- Picture
- Description
- Date
- Author

2. Sortable by date

#### Contact

1. Contact form with validations

#### Other

1. Create sub-pages

- <del>Menu</del>
- Services
- Blog
- About
- Contact

2. Create database or simple object for Menu

## Progress

#### Day 1

- Created the landing page using some pizza restaurant template. Created everything from scratch as I also wan to keep practicing HTML and CSS. Installed the React and started my first project. It all doesn't seem very difficult because I already tried working with Vue and the process looks very similar.
- There are many new things I learned:

1. JSX - in React I cannot use simple HTML, I have to use JSX which stands for JavaScript XML. The JSX is translated by Babel (a JavaScript compiler), converted to plain JavaScript. There is no huge difference between JSX and HTML but there is still some. To make my life easier I just use online <a href="https://magic.reactjs.net/htmltojsx.htm">HTML to JSX Compiler</a>. I started my project with simple HTMl so I had to compile everything.
2. Just like in Vue, images and links work a bit differently. Maybe it also depends how I have everything organized, however src and href did not work for me as it usually does. Usually when using img src you write src="/images/myimg.png". To use an image in component I have to impoty the image first and then use it. I have to import MyImg from "../images/myimg.png" and then use src={MyImg}.
3. FontAwesome also works differently, you need to install library for that which you can read more about right <a href="https://fontawesome.com/v5/docs/web/use-with/react">here</a>.

## Useful Resources

- <a href="https://magic.reactjs.net/htmltojsx.htm">HTML to JSX</a> - a great tool to compile HTML to JSX.
- <a href="https://www.lipsum.com/feed/html">Lorem Ipsum</a> - dummy text generator, there no need to think of big articles on your own.
- <a href="https://react-leaflet.js.org/">Leaflet</a> - map API. It's a second project where I use it and I like it a lot. It's free and doesn't require any credit card info if you want to use it for some small projects.
- <a href="https://icons8.com/">Icons8</a> - very good collection of icons, in case you cannot find what you needed on FontAwesome.
