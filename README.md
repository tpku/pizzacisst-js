![Cool Cat Wearing Glasses in front of awesome pizza rain](https://64.media.tumblr.com/98df91441069788021d8fd515889b963/tumblr_nguxcvRQjN1qa6w7zo1_400.gifv)

# The Useless Pizza

A useless project built with vanilla html, css and javascript. https://pizzacisst-js.vercel.app/

# Installation

Open up a browser of choice and head over to https://pizzacisst-js.vercel.app/.

Or clone the repository and open up the project in a code editor and kick start the index-file with live-server. Enjoy the adventure!

# Code Review

1. `script.js:137-196` - You don´t need to do a nested if statement when you check if a number is greater than a number. 
Instead it can look like this:

```
    if(catchScore >= 10) {
        quoteContainer.textContent = 'You got that flow!';
        quoteContainer.classList.add('fade');
    }
    if(catchScore >= 12) {
        quoteContainer.textContent = ' ';
        quoteContainer.classList.remove('fade');
    }
    if(catchScore >= 15) {
        quoteContainer.textContent = 'You are getting there!';
        quoteContainer.classList.add('fade');
    }
```
2. `script.js:1-57` - I think the code can be little more cleaner if you move this code to a separate js file. 
3. `script.js` - all the helper function can also be move to a separate js file ta make the code more readability.
4. `script.js:84` - Remember to think about to have a alt text to the ingredients img for accessibility reason.
5. `script.js:10-15` - Can you add some more comments to your code so it can be easier to understand.
6. `style.css:56-62` - It´s a cool effect with h1 but to make it more readability you can increase the opacity to at least 50%.

# Testers

Tested by the following people:

1. Jonas Mårtensson
2. Anna Brumark
3. Dan Fogelberg
4. Josef Forkman
