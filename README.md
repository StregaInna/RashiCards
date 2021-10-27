# Rashi Cards

This is a flashcard app desinged to help someone trying to learn Rashi Script (see https://en.wikipedia.org/wiki/Rashi_script) 
This project was originally created on a node-express backend as a student project.
You can find an earlier version at: https://github.com/StregaInna/Rashi-Cards
This version was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features:
Currently the app loads a 'deck' of flashcards from src/store/data.js into a redux store at src/store/cardDeck.js 
  and shuffles them in src/store/deckShuffler.js 
Once the deck is prepared users can answer using either their own keyboard of the vitrual keyboard in src/components/Keyboard.js
Cards answered incorrectly get readded to the end of the deck.
For both correct and incorrect answers to score is adjusted and a feedback componenet is rendered at src/components/Feedback.js

### next step features:
I'd to add a manifest.json file to make this app into a PWA usable offline.
I'd also like to make a "part 2" feature where the cards displayed are words in rashi script rather than just letters.
I'm also contemplating changing the way cards are readded to have then inserted somewhere between the current position and the end instead.

## running the app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
