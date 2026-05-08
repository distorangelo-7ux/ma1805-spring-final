# ma1805-spring-final
Angelo's final Spring project for Royal Holloway's MA1805 module

[Github Repo.](https://github.com/distorangelo-7ux/ma1805-spring-final) [Live site](https://distorangelo-7ux.github.io/ma1805-spring-final/)

# CRAWLER.
A short game where you figure out how to pilot a rustic, half-working mechsuit.

To reach the end of this mysterious labyrinth, you must use every piece of equipment from your mechsuit appropriately. The limited camera feed means you'll have to rely on your compass and map to navigate. Every obstacle along the way requires not only the right ammunition, but pixel-perfect accuracy as well.

Knowing when to turn off your mechsuit will come in handy when there's creatures nearby...

# HOW TO PLAY
Turn on your mechsuit by clicking on the switch to the top-left of the yellow lever.

The mechsuit can only move forward at a given direction. Moving forward can be done by pulling the left lever forward.
The direction can be manipulated by turning the crank lever counter-clockwise once. You can see the direction the mechsuit is currently facing using the direction indicator to the bottom-left of the yellow lever.

The map shows a grid representation of your position and nearby surroundings. Your mechsuit is represented by the red square, open paths are represented by white squares, obstacles are represented by gray squares and the remaining black squares are areas you cannot access.

When faced with an obstacle, we will first need to find out what ammunition is required.
Begin by pulling down on the white rectangle above the camera screen to open your aiming device. The colour ammunition needed is displayed on the top-left rectangle. Put away the aiming device by clicking on the same white rectangle you used to pull down.

We must now load the cannon.
Click on the left rectangle to switch to the cannon of your mechsuit. From there, drag the corresponding bullet (from the shelf with the same colour as what was shown on the aiming device earlier) and drop it into the middle of the chamber on the top-left. If done correctly, you should hear a metal sliding sound and the chamber door should be closed.

Go back to the cockpit view by clicking on the rectangle on your right.
Now that the mechsuit is loaded, pull down on your aiming device again and use the arrow keys to get the white square to the position of the red square, this is the weak spot. Once everything is aligned, press on the middle button to fire. Keep in mind you'll have to turn your mechsuit again everytime you fire.

If done right, you should see the obstacle in front of you gone. You can keep moving as normal. Don't forget to eject the used bullet by going back to the cannon view and pressing the red button.

Turn off your mechsuit as soon as you hear a screeching sound. Don't turn your mechsuit on until you hear the sound of wings. Moving or turning before letting the creature pass will lead to a game over.

Alternatively, you can watch this video [walkthrough](https://youtu.be/5Cp6nJrYwtA?si=gkldzkHPeKUjbNIr)

# INSPIRATION
This project spawned from my interest in giant robots and mecha anime. I wanted to use my programming skills to envision what it would feel like to pilot a mecha with unconventional and clunky controls.

By extension, taking a step back and having the technology be more tactile and inconvenient was an opportunity to explore our relationship with the devices we have. When technology becomes too convenient, we have to consider the truth it's showing us - whether we should take it for granted or with a grain of salt. One such way I've applied this was through the blue-tinted screen, as the reality being shown by this technology is far from what it really looks like outside of the mechsuit.

One of my biggest inspirations for this project was Patlabor 2. While the world of the film featured giant robots, the main conflict arose from an over-reliance on the world being shown to us by technology. Misunderstandings leading to the climax of the film were rooted in placing full trust in the version of reality displayed in the electronic devices being used.

Having a tactile and inconvenient control set also played into the anxiety-inducing atmosphere of the game, I find. Tension is created when every action you have to make is deliberate.

# PROGRAMMING CHALLENGES
This project I find was a culmination of everything I had learned and practiced before: I've had to master for-loops to create a working grid that was indicative of player position for example, and I also had to use Object-Oriented-Programming for the bullets system and to re-introduce timers into the project.

One unexpected programming challenge I had to deal with was checking for collisions, granted a lot of pulling, pressing and holding is needed to use the mechsuit. The most challenging interaction to code was the crank lever: I had to use vectors to measure the angle between the origin point and the mouse, and use the values recorded to make sure the mouse was moving in a circular motion.

Getting used to scaling was another challenge I had to overcome, as it was essential to make sure everything was in place and consistent with any resolution, especially the images.

I had largely underestimated how massive this project was and wasn't able to do everything I had planned. If possible, I would have loved to make my own sound effects and add more screen effects to show the impact of moving, turning and firing.

# CONCLUDING REMARKS
This project definitely didn't go as planned. Though I'm happy to have implemented all the mechanics I wanted to add, some more polish could have been used for refining some assets and adding more feedback to your actions overall. Having an in-game tutorial instead of relying on this README file also would've helped a lot.

# CREDITS
Models and textures made with [Blockbench](https://www.blockbench.net/)
Audio from [freesound](https://freesound.org/)