# Aqua Teen Hunger Force Memory Clicky Game!
___

In this project, we were asked to create a clicky/memory match game using React.  Other technologies used for the site were JavaScript, jQuery, Node JS and a GitHub repository.  The basis of the game was themed after the tv show "Aqua Teen Hunger Force", and shows 12 different characters on the screen.  When the user clicks on each character, a point is added to their score and the characters shuffle on the screen, then however, when they click on the same character again, the game is over.  If the user is able to beat the top score, then the top score will be updated with their new score.  A screenshot to the game is provided below:
___
![ATHF-clicky-game](/src/images/ATHF-clicky-game.jpg)
___

Laying out the project was fairly simple using our past activities, and with a little help from Bryan with the Bootstrap grid layout.  The page was designed using Bootstrap components, and has twelve character images in a 4 X 3 layout, and the entire project is ran through one page.  The components brought into the App.js file were through the 'CharacterCard', which contained the styling and HTML which brought in the necessary props from the 'characters.json' file, and then the Jumbotron, Title and Wrapper components that filled out the rest of the styling and layout of the game page.  The bugs then came with coding the interactivity of the components into the main App.js page, and writing the 'imageClick' action.  This was caused because after looking at past exercises and similar projects and snippits online, there was a mix-up where after a character was clicked, there was a few ways to code where the arrays and game would go from there.  One of the ways was to remove the clicked character from the original characters array, but problems arose then when coding the if/else statement to concatinate the 'original' and 'clickedCharacter' arrays.  After sitting with a colleague though, he helped with simplifying the process and bringing the entire character object in on the click action, and then toggeling the 'clicked' boolean of each character from 'false' to 'true'.  That way it was easier to write the if/else statements later on by setting the parameters to change the clicked state for each character.
___
![ATHF-clicky-lose](/src/images/ATHF-clicky-lose.jpg)
___

After that, updating the top score did give a slight bug with the top score being one point behind the user score with each click.  But then by adding a 'componentDidUpdate' function and moving the 'if/else score' statement into there ended up fixing that issue.  From there, the additions to the game was adding more CSS styling and cleaning up the front end so that it was a bit more aesthetically pleasing for the user.
___
![ATHF-clicky-deployed-to-Git](/src/images/ATHF-clicky-deployed-to-Git.jpg)
___

The last aspect added for the game was deploying the react app to GitHub pages using the link and instructions provided in class, so that the application could be ran by letting the user access a site address rather than starting it through Node.

## Built With

* [HTML5]
* [CSS3]
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [JavaScript]
* [jQuery]
* [Node JS]

## Authors

* **Matt Williams** - *Initial work* - [M Williams Portfolio](https://mattwills09.github.io/portfolio.html)
