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

- Holy crap 2.7M
- New game seems super laggy on android
- sorry about the seed saving
- it wasn't clear what the PRNG took as seed (because numbers in javascript) hence why I convert the SHA to a 65-bit integer, parsing the whole sha seemed to confuse it
- sorry about the seed loading
- couldn't figure out json loading in ES6, so I cheated and turned it into a module

### Features

- pretty card images
- correct card text
- Action Name! Huge oversight, the special action verb associated with each
    role is omitted from the public role cards, so canny players use the
    correct "action name" as a strong tell that they have the card. We've
    adopted a house rule where we verb the role name and the action name is
    forbidden because that's not part of the game. Anyway we can display it
    here and fix it.
