# Functional Requirements

## Gameplay

6 treies to guess a 5 letter word

Typing a letter will display the letter in the tile
Backspace will delete letters

Guesses must be real word in word list
Guess colors(data-state):
 - Grey == absent
 - Yellow == in word but out of position
 - Green == in word and in correct position

Hard Mode: correct or present letters must be used in the next guess

## Design

Tiles 5x6
Virtual Keybaord

## Interactions

- When typing a letter, the boarder of the tile chagnes to light grey
- blinking in animation with the letter
- backspace will remove letter and return to dark grey
- Enter will submit guess

When submitting guess:
 - tiles will flip