# Rock Paper Scissors game

## Description

This is my take on coding a classic game of Rock Paper Scissors. My game works as follows: the user selects to play either with rock, paper, or scissors (by clicking on one of the options). After that the user sees what the opponent (the program) chose and who wins. Then the user can push a button to play again.
The logic is as usual: rock beats scissors, scissors beat paper and paper beats rock. The program picks randomly among the choices.

## Stack
React 18 (functional programming) and SCSS. 
I used the design from a [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH), but I changed it a bit by recreating and amending it in Figma.

## Features
At the top of the page, there is a score count that keeps track of how many rounds were won by the user and how many by the opponent.
At the bottom, there is a button that will open a popup with explanation how to play the game.

## Challenges and what I’ve learned
This was the first time I built a React app on my own (before I was just following a React tutorial), so I learned a lot about how to use state and useEffect. For example, I had an issue where the program chose e.g. scissors, but the icon that was connected to it didn’t show up and instead the icon for the previous choice was shown. I solved this by moving the function setPCChoice from the function game to the function userPicked, which is triggered by the user clicking on one of the three options.

I also think I could have divided the project into more components, that’s something to keep in mind for the future.

Overall, I’m happy to have chosen this project as my first React app, since it is complex enough to test my skills and teach me something new, but not too complex to overwhelm me. But I intend to build more complex apps in the future and develop this one by adding more features.

I also used SCSS/SASS for the first time, which was fairly easy as I know CSS well, but it took me a while to get used to mixins. I also think that next time, I can use more of the advanced functions that SCSS provides.

## License 
Feel free to use parts of this code as you want, even commercially. 

