# Hidden Bricks game
# Hidden Item game module
### School project in 1dv610

## Overview
This is a game that is similar to Mastermind, but in this game it will be possible to choose between different themes (flags, animals, colors, professions and movies) and how many bricks you would like to play with. This game is also a little bit more difficult to play than Mastermind since you need to remember which bricks you tested earlier. The game is playable for people in all ages. 

## Game idea
The idea of the game is that the player should choose a theme that contains 8 bricks with pictures and decide how many bricks the computer should play with in the row. The computer uses the 8 bricks to create a random row with as many bricks as the player requested. It is then up to the player to guess the secret row, by entering a combination of bricks. If the brick is in the correct place it will receive color green. If it is in the wrong place it will receive color yellow and color red will let the player know that the brick is not represented in the row. When all bricks are in the correct place, the game will end and it will be possible to get info regarding how many guesses that the player has used in the game round. 

## App link
The game is playable via the following link. 

https://hiddenbricks.netlify.app/

## Programming language 
The module has been written in Typescript and Javascript.

## License
MIT License Copyright (c) 2024 SanJulin

## Dependencies

Node.js

TypeScript

## Version
1.2.0

## User contribution
A newer version of the module will soon be released. Pls contribute by letting me know if you discover any bugs or have any ideas on how I can improve the module. 

## Releases
The latest release of the module was released on 25th of October 2024.

## Methods

### Theme Methods

#### `getTheme(): string`
Gets the current theme of the game which will be used when the items are created.

#### `setTheme(theme: string) : void`
Sets the theme for the game if the theme string is not empty and calls the setItemArray method.

#### `getAvailableThemes(): string[]`
Gets all the themes available in the current version of the module. 

#### `getThemeArray(): string[]`
Gets the current array with items. 

#### `setThemeArray() : void`
Sets the array with names that should be used in the game by checking what the current theme is.  

#### `getItemArray(): Item[]`
Gets the current array with items. 

#### `createItemArray(): void`
Creates an array with items based on the provided theme array. 


### Computer Methods

#### `createComputerRow(numberOfItems: number, themeDescription: string) : void`
Creates a new instance of the ComputerRow class and calls the generateRow method in the ComputerRow class in order to generate a new row that will represent the computer´s row of items.

#### `getComputerRow(): string[]`
Returns an array with the items that represent the current computer row.

#### `getNumberOfGuesses(): number`
Gets the number of guesses used in a playround. 

#### `checkAnswer(answer: Item[]): Item []`
Method that checks if the row of items provided by the user matches the computer´s row by checking if the item and the position of the item is the same. An object is created for each item. If the item is in the correct place - the item will get the color green. If the item is present in the row, but in the wrong place - the item will get the color yellow and the color red will be used for items that are not present in the computer´s row.


### ComputerRow Methods

#### `getNumberOfItems(): number`
Gets the number of items that is included in the computer row.

#### `setNumberOfItems(numberOfItems: number) : void`
Sets the number of items that should be included in the computer row.

#### `setThemeArray(themeDescription: string) : void`
Sets the themeArray with 8 names within the chosen theme.

#### `getComputerRow(): string []`
Gets the computer row.

#### `generateRow(): void`
Creates a random row based on the themeArray. 


### Item Methods

#### `getName(): string`
Gets the name of the current item used in the game. 

#### `getId(): number`
Gets the id of the current item used in the game.

#### `getColor(): string`
Gets the color of the current item used in the game.

#### `setColor(color: string) : void`
Sets the color for the current item that is used in the game, depending on if the player has put the item in the correct place (green), the wrong place (yellow) or if the item is not present in the row (red).

#### `getImage(): HTMLImageElement`
Gets the image of the item if the image has been set. - Uncommented at the moment

#### `setImage(url: string) : void`
Sets the image of the item. - Uncommented at the moment

## Testing

### Manual testing of the game
Follow the following link to test the game:
https://hiddenbricks.netlify.app/

