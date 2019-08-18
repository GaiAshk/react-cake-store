// import React, {Component} from 'react';
//
// class ReadmeHtml extends Component {
//    render() {
//       return (
//          <div className="container">
//              <div className="row">
//                  <div className="col">
//                      <h1 className="m-5">Gai Ashkenazy - 204459127 - readme.html</h1>
//                      <ol>
//                          <li className="m-5"> Special Cakes</li>
//                          <li className="m-5"> Selling Special cakes and regular cakes</li>
//                          <li className="m-5">
//                          <h2>Additional pages:</h2>
//                              <ul>
//                                  <li className="m-3"> recipe page: you can search new recipes, see their details
//                                      ingredients etc. It is operated by the search box and buttons</li>
//                                  <li className="m-3"> make your own recipe: you can make, edit, delete and add your own
//                                      recipes. it is operated by buttons and an accordion</li>
//                                  <li className="m-3"> Game of life page: you can play and pass the time with this classic
//                                      computer science game. It is operated by the buttons</li>
//                              </ul>
//                              <h5 className="m-5">The new pages were very difficult, we spend about a week on creating
//                                  them, connecting them to the full project and backend</h5>
//                              <h5 className="m-5"> the most difficult parts were: connecting to a different API, editing
//                                  and adding new recipes in synchronization with the DB, and converting the game login
//                                  into code </h5>
//                          </li>
//                          <li className="m-5">my partner is Barak Dimand id????. We started by doing everything together,
//                              then tried working separately for few days Gai: on front end and Barak on backend. It didnt
//                              work very well then we continues working together. Because we were both very interested
//                             in this subject we all the time wanted to be updated with what the other partner learned </li>
//                          <li className="m-5">
//                              <h5> We have 12 different routes: </h5>
//                              <ul>
//                                  <li>readme file- this file</li>
//                                  <li>Login - where you can register and login</li>
//                                  <li>Navigation Bar - with the bar we can navigate to all routes (only admin can navigate to Admin)</li>
//                                  <li>Products - all the products we sell</li>
//                                  <li>Details - the details of each product</li>
//                                  <li>Cart - where you can checkout, change quantity, and see the total prices</li>
//                                  <li>Recipes - where you can look up, search and find many recipes including cake recipes</li>
//                                  <li>My Recipes- where you can save, edit, make, and delete your own recipes</li>
//                                  <li>Game - you can play the classic game of life to pass the time</li>
//                                  <li>Admin - where only the admin can see details about the users who logged in, cart, recipes and searches they made</li>
//                                  <li>Session Expired - if the 5 minutes of the cookie past the user is show this screen where he can redirect to the log in page </li>
//                                  <li>Default - if the user typed a wrong url, he will be shown this page to tell him he typed a wrong url</li>
//                              </ul>
//                          </li>
//                          <li className="m-5"> <h5> we used many ways to protect our site:</h5>
//                             <ul>
//                                 <li>DDOS and DOS attackes - we added an npm package that limits the number of response any computer will receive,
//                                 there is more specifics in this in the app.js in the backend file</li>
//                                 <li>Helmet - this makes the backend avoid requests with known malicious headers </li>
//                                 <li> CSRF - we are using JWT tokens with expiration of 5 minutes, also in every click the user is making
//                                 the token is verified and replaced with a new token, which make CSRF attacks very unlikely</li>
//                                 <li>Our software and dependencies are updated</li>
//                                 <li>We limited text ares, they can only receive a maximum amount of characters, and no symbols are allowed (only digits and numbers) </li>
//                                 <li> We are handling errors and error messages are limited with no information</li>
//                                 <li>Validation is required in every click</li>
//                                 <li> of curse the site is password protected, also passwords are encrypted before entered to DB</li>
//                                 <li>Some other web-site security tools </li>
//                             </ul>
//                          </li>
//                          <li>We used and learned reactJS, this was a great choice, although when we started we didnt know
//                           anything about react, we went through the tutorials and learned it, and with it the development was much easier</li>
//                      </ol>
//                  </div>
//              </div>
//
//              <div className="row">
//                  <div className="col">
//                      <h1 className="m-5"> Barak Dimand </h1>
//                      <ol>
//                          <li className="m-5"> Special Cakes</li>
//                          <li className="m-5"> Selling Special cakes and regular cakes</li>
//                          <li className="m-5">
//                              <h2>Additional pages:</h2>
//                              <ul>
//                                  <li className="m-3"> recipe page: you can search new recipes, see their details
//                                      ingredients etc. It is operated by the search box and buttons</li>
//                                  <li className="m-3"> make your own recipe: you can make, edit, delete and add your own
//                                      recipes. it is operated by buttons and an accordion</li>
//                                  <li className="m-3"> Game of life page: you can play and pass the time with this classic
//                                      computer science game. It is operated by the buttons</li>
//                              </ul>
//                              <h5 className="m-5">The new pages were very difficult, we spend about a week on creating
//                                  them, connecting them to the full project and backend</h5>
//                              <h5 className="m-5"> the most difficult parts were: connecting to a different API, editing
//                                  and adding new recipes in synchronization with the DB, and converting the game login
//                                  into code </h5>
//                          </li>
//                          <li className="m-5">my partner is Barak Dimand id????. We started by doing everything together,
//                              then tried working separately for few days Gai: on front end and Barak on backend. It didnt
//                              work very well then we continues working together. Because we were both very interested
//                              in this subject we all the time wanted to be updated with what the other partner learned </li>
//                          <li className="m-5">
//                              <h5> We have 12 different routes: </h5>
//                              <ul>
//                                  <li>readme file- this file</li>
//                                  <li>Login - where you can register and login</li>
//                                  <li>Navigation Bar - with the bar we can navigate to all routes (only admin can navigate to Admin)</li>
//                                  <li>Products - all the products we sell</li>
//                                  <li>Details - the details of each product</li>
//                                  <li>Cart - where you can checkout, change quantity, and see the total prices</li>
//                                  <li>Recipes - where you can look up, search and find many recipes including cake recipes</li>
//                                  <li>My Recipes- where you can save, edit, make, and delete your own recipes</li>
//                                  <li>Game - you can play the classic game of life to pass the time</li>
//                                  <li>Admin - where only the admin can see details about the users who logged in, cart, recipes and searches they made</li>
//                                  <li>Session Expired - if the 5 minutes of the cookie past the user is show this screen where he can redirect to the log in page </li>
//                                  <li>Default - if the user typed a wrong url, he will be shown this page to tell him he typed a wrong url</li>
//                              </ul>
//                          </li>
//                          <li className="m-5"> <h5> we used many ways to protect our site:</h5>
//                              <ul>
//                                  <li>DDOS and DOS attackes - we added an npm package that limits the number of response any computer will receive,
//                                      there is more specifics in this in the app.js in the backend file</li>
//                                  <li>Helmet - this makes the backend avoid requests with known malicious headers </li>
//                                  <li> CSRF - we are using JWT tokens with expiration of 5 minutes, also in every click the user is making
//                                      the token is verified and replaced with a new token, which make CSRF attacks very unlikely</li>
//                                  <li>Our software and dependencies are updated</li>
//                                  <li>We limited text ares, they can only receive a maximum amount of characters, and no symbols are allowed (only digits and numbers) </li>
//                                  <li> We are handling errors and error messages are limited with no information</li>
//                                  <li>Validation is required in every click</li>
//                                  <li> of curse the site is password protected, also passwords are encrypted before entered to DB</li>
//                                  <li>Some other web-site security tools </li>
//                              </ul>
//                          </li>
//                          <li>We used and learned reactJS, this was a great choice, although when we started we didnt know
//                              anything about react, we went through the tutorials and learned it, and with it the development was much easier</li>
//                      </ol>
//                  </div>
//              </div>
//          </div>
//       );
//    }
// }
//
// export default ReadmeHtml;

import React, { Component } from "react";

class ReadmeHtml extends Component {
    render() {
        return (
           <div className="container">
               <div className="row">
                   <div className="col">
                       <h1 className="m-5">Gai Ashkenazy - 204459127 - readme.html</h1>
                       <ol>
                           <li className="m-5"> <u> Special Cakes </u></li>
                           <li className="m-5"> <u>Selling Special cakes and regular cakes </u></li>
                           <li className="m-5">
                               <u> Additional pages: </u>
                               <ul>
                                   <li className="m-3">
                                       Recipe page: you can search new recipes, see their details,
                                       ingredients etc. It is operated by the search box,
                                       buttons and additional urls
                                   </li>
                                   <li className="m-3">
                                       Make your own recipe: you can make, edit, delete and add
                                       your own recipes. it is operated by buttons and an accordion menu
                                   </li>
                                   <li className="m-3">
                                       Game of life page: you can play and pass the time with this
                                       classic computer science game. It is operated by the buttons on the top of the screen
                                   </li>
                               </ul>
                               <h5 className="m-5">
                                   The new pages were very difficult, we spend about a week on
                                   creating them, connecting them to the full project, backend and update their content in
                                   the DB for the admin screen
                               </h5>
                               <h5 className="m-5">
                                   The most difficult parts were: connecting to a different API in the recipe page,
                                   editing and adding new recipes in synchronization with the DB,
                                   and converting the game login into code
                               </h5>
                           </li>
                           <li className="m-5">
                               My partner is Barak Dimand id: 329951131. We started by doing
                               everything together, then tried working separately for few days
                               Gai: on front end and Barak on backend. It didnt work very well
                               then we continued working together. Because we were both very
                               interested in this subject we all the time wanted to be updated
                               with what the other partner learned, This project was a big jump for as with no experience,
                               but we learned tons of tons of new stuff. (In this course I learned the most practical stuff
                               in the degree so far).
                           </li>
                           <li className="m-5">
                               <u> We have 12 different routes: </u>
                               <ul>
                                   <li>readme file- this file</li>
                                   <li>Login - where you can register and login</li>
                                   <li>
                                       Navigation Bar - with the bar we can navigate to all routes
                                       (only admin can navigate to Admin)
                                   </li>
                                   <li>Products - all the products we sell</li>
                                   <li>Details - the details of each product</li>
                                   <li>
                                       Cart - where you can checkout, change quantity, and see the
                                       total prices
                                   </li>
                                   <li>
                                       Recipes - where you can look up, search and find many
                                       recipes including cake recipes
                                   </li>
                                   <li>
                                       My Recipes- where you can save, edit, make, and delete your
                                       own recipes
                                   </li>
                                   <li>
                                       Game - you can play the classic game of life to pass the
                                       time
                                   </li>
                                   <li>
                                       Admin - where only the admin can see details about the users
                                       who logged in, cart, recipes and searches they made
                                   </li>
                                   <li>
                                       Session Expired - if the 5 minutes of the cookie past the
                                       user is show this screen where he can redirect to the log in
                                       page{" "}
                                   </li>
                                   <li>
                                       Default - if the user typed a wrong url, he will be shown
                                       this page to tell him he typed a wrong url
                                   </li>
                               </ul>
                           </li>
                           <li className="m-5">
                               {" "}
                               <u> we used many ways to protect our site:</u>
                               <ul>
                                   <li>
                                       DDOS and DOS attackes - we added an npm package that limits
                                       the number of response any computer will receive, there is
                                       more specifics in this in the app.js in the backend file
                                   </li>
                                   <li>
                                       Helmet - this makes the backend avoid requests with known
                                       malicious headers{" "}
                                   </li>
                                   <li>
                                       {" "}
                                       CSRF - we are using JWT tokens with expiration of 5 minutes,
                                       also in every click the user is making the token is verified
                                       and replaced with a new token, which make CSRF attacks very
                                       unlikely
                                   </li>
                                   <li>Our software and dependencies are updated</li>
                                   <li>
                                       We limited text ares, they can only receive a maximum amount
                                       of characters, and no symbols are allowed (only digits and
                                       numbers){" "}
                                   </li>
                                   <li>
                                       {" "}
                                       We are handling errors and error messages are limited with
                                       no information
                                   </li>
                                   <li>Validation is required in every click</li>
                                   <li>
                                       {" "}
                                       of curse the site is password protected, also passwords are
                                       encrypted before entered to DB
                                   </li>
                                   <li>Some other web-site security tools </li>
                               </ul>
                           </li>
                           <li>
                               We used and learned reactJS, this was a great choice, although
                               when we started we didnt know anything about react, we went
                               through the tutorials and learned it, and with it the
                               development was much easier
                           </li>
                       </ol>

                       <h1> I have to add a few words:</h1>
                       <h1> This project was a big jump for the water for me, we both have no experience in this field, nothing!
                       I worked on the project for about two months, and in the final mount I worked on it every day for about
                       10-18 hours a day (I swear it is true). I learned a lot mostly by doing and from the internet.
                       I feel like the project is still not perfect but I am going to be an exchange student so I dont have anymore time to
                       work on it, and I am sure it is in extremely high standards, with respect to the class.</h1>
                       <h1>For when I am writing this Ohad, didnt answer to my mails for a long time, so I hope I will be able
                       to present this to him, because I fell that there is so much work in this project that it will not be possible
                       to go over it by him self. If I will be in US in few days, but I will be happy to arrange a Skype call to go over it and get feedback </h1>
                   </div>
               </div>

               <div className="row">
                   <div className="col">
                       <h1 className="m-5"> Barak Dimand - 329951131 - readme.html </h1>
                       <ol>
                           <li className="m-5"> Special Cakes</li>
                           <li className="m-5"> Selling Special cakes and regular cakes</li>
                           <li className="m-5">
                               <h2>Additional pages:</h2>
                               <ul>
                                   <li className="m-3">
                                       {" "}
                                       recipe page: any user can search new recipes and see their
                                       required detailed ingredients. This functionality is made
                                       easy to use for the user by using the user friendly search
                                       box and buttons on the recipe search page.
                                   </li>
                                   <li className="m-3">
                                       {" "}
                                       make your own recipe: you can make, edit, delete and add
                                       your own recipes. it is operated by buttons and an accordion
                                   </li>
                                   <li className="m-3">
                                       {" "}
                                       Game of life page: you can play and enjoy your time with
                                       this classic computer science game. It is operated by user
                                       friendly buttons.
                                   </li>
                               </ul>
                               <h5 className="m-5">
                                   The new pages were very difficult and required a lot of time.
                                   We spent about a week on creating them and then learning how
                                   to connect them to both the front and backend of the already
                                   existing project.
                               </h5>
                               <h5 className="m-5">
                                   {" "}
                                   The hardest parts for me included understanding how to connect
                                   the project frontend we had created to the backend exress
                                   project. After a lot of time reading, researching, and
                                   watching tutorials, once the concept was clearer in my head,
                                   it just took some playing around with the code until it was
                                   connected and up and running. Also something that was really
                                   hard for me included understanding all the dependencies in the
                                   project required for connecting a component to the already
                                   exisitng project and routes etc.{" "}
                               </h5>
                           </li>
                           <li className="m-5">
                               My partner Gai id: 204459127 and we worked together throughout
                               almost the entire project. Overall, I spent more time on getting
                               the backend up and running and connecting the project to the
                               backend. Also, I spent the first week or so planning how the
                               website should look and coming up with possible ideas to
                               incorporate in the website. Some of the ideas we did not end up
                               using, but overall we both learned a lot from this project and
                               also learned how to work together as a team to create a fully
                               functional project. My partner Gai worked hard on many tasks,
                               some of which included creating the react components and
                               managing a few of the security details we added to the site.{" "}
                           </li>
                           <li className="m-5">
                               <h5> We have 12 different routes: </h5>
                               <ul>
                                   <li>readme file- this file</li>
                                   <li>
                                       Login - where a user can register and login through our
                                       authentication process
                                   </li>
                                   <li>
                                       Navigation Bar - Through this Navigation bar, users can
                                       navigate to all routes in the application. (only admin can
                                       navigate to Admin)
                                   </li>
                                   <li>
                                       Products - This page displays all the available products
                                       Special Cakes offers.
                                   </li>
                                   <li>
                                       Details - A detailed description page of any certain prodct.
                                   </li>
                                   <li>
                                       Cart - The cart page allows a user to view their current
                                       in-cart products, change the quantity of any product, and
                                       see the total prices of the current order.
                                   </li>
                                   <li>
                                       Recipes - A recipes page that allows users to search and
                                       find new and interesting recipes, including recipes for
                                       cakes and cupcakes.
                                   </li>
                                   <li>
                                       My Recipes- A page that allows users to save, edit, make,
                                       and delete any of their desired recipes. This also creates a
                                       personalization experience when using our website.
                                   </li>
                                   <li>
                                       Game - you can play the classic game of life to enjoy the
                                       time spent on our website
                                   </li>
                                   <li>
                                       Admin - This admin page allows the admin to see details
                                       about the users who logged in, carts, recipes and searches
                                       they made while using the website.
                                   </li>
                                   <li>
                                       Session Expired - If the 5 minute cookie expires, the user
                                       is redirected to this screen where he can redirect to the
                                       log in page.{" "}
                                   </li>
                                   <li>
                                       Default - If the user typs a wrong url, he/she will be
                                       presented this page to let him know he typed a wrong url.
                                   </li>
                               </ul>
                           </li>
                           <li className="m-5">
                               {" "}
                               <h5> we used many ways to protect our site:</h5>
                               <ul>
                                   <li>
                                       DDOS and DOS attackes - we added an npm package that limits
                                       the number of responses any computer will receive, there is
                                       more relevant details in the app.js in the backend file
                                   </li>
                                   <li>
                                       Helmet - this makes the backend avoid requests with known
                                       malicious headers{" "}
                                   </li>
                                   <li>
                                       {" "}
                                       CSRF - we are using JWT tokens with expiration of 5 minutes,
                                       also in every click the user is making the token is verified
                                       and replaced with a new token, which make CSRF attacks very
                                       unlikely
                                   </li>
                                   <li>Our software and dependencies are updated</li>
                                   <li>
                                       We limited text areas, they can receive a maximum amount of
                                       characters, and no symbols are allowed (only digits and
                                       numbers){" "}
                                   </li>
                                   <li>
                                       {" "}
                                       We are handling errors and error messages are limited with
                                       no information
                                   </li>
                                   <li>Validation is required in every click</li>
                                   <li>
                                       {" "}
                                       Obviously the site is password protected, and so also the
                                       passwords are encrypted before entered to DB.
                                   </li>
                                   <li>Some other web-site security tools </li>
                               </ul>
                           </li>
                           <li>
                               REACT: We used and learned reactJS, this was a great choice,
                               although when we started we didnt know anything about react, we
                               went through the tutorials and learned it, and using React made
                               the development much easier and more enjoyable.
                           </li>
                       </ol>
                   </div>
               </div>
           </div>
        );
    }
}

export default ReadmeHtml;
