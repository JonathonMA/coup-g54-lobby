# Lobby G54

New Coup seems fun, but starting a game is a chore, and we're all taking photos
of the cards with our phones because what the heck does the Missionary do? So:

- generate a set of 5 roles
- summarise them at a URL all players can view at on their phones
- play game
- profit

I got the role summaries from coriolis on boardgamegeek
<https://boardgamegeek.com/filepage/123722/player-aid-us-letter-size>, great
stuff.

## How to use

Develop locally:

    $ npm run dev

Deploy to github pages:

    $ npm run deploy

## TODO

- [X] Holy crap 2.7M
  - Down to like 600k now, hooray for the inevitable march of technology
- [X] New game seems super laggy on android
  - Not anymore
- [X] sorry about the seed saving
  - This is less awful now.
- [X] it wasn't clear what the PRNG took as seed (because numbers in javascript) hence why I convert the SHA to a 65-bit integer, parsing the whole sha seemed to confuse it
  - this is much more sensible now I'm using Chance
- [X] sorry about the seed loading
  - now I'm not
- [X] couldn't figure out json loading in ES6, so I cheated and turned it into a module
  - figured this out, apparently

### Features

- [ ] pretty card images
- [ ] correct card text
- [X] Action Name! Huge oversight, the special action verb associated with each
    role is omitted from the public role cards, so canny players use the
    correct "action name" as a strong tell that they have the card. We've
    adopted a house rule where we verb the role name and the action name is
    forbidden because that's not part of the game. Anyway we can display it
    here and fix it.
  - This is fixed, cards include the correct action now.
