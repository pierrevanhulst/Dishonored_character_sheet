# Dishonored Character Sheet for Roll20
This repository hosts the content you need to play with Dishonored: the Roleplaying Game on Roll20.

## Features
- Character Sheet: mostly manual, allows you to keep track of your character. Only the stress field is computed automatically, although this could change in the future if needed. Dishonored being a flexible and narrative game, it does not seem relevant to implement too many rules here.
- Roll button on the sheet, that allows you to make checks. Since you can mix and match five parameters for a single check, a dialog window appears on the sheet when you click the roll button. There, you can choose a skill, a style, a focus, a number of dice and a difficulty.
- Roll template to display the results. The template varies between the basic and the advanced versions: basic shows a recap of all parameters, but you have to calculate criticals and momentum yourself. Advanced goes through the APIs to return those two information as well.

## How to use the content
Right now, using this sheet requires a pro account. If Modiphius and Roll20 agree, I would like to push the sheet in the public repository for all members to use. 

Under your game, click the "Settings" button, then choose "Game Settings". There, choose "Custom Character Sheet" in the "Character Sheet" dropdown menu at the bottom of the page. It should generate a code area with four tabs. Copy / paste the content of either `dishonored.html` (basic version) or `dishonored-advanced.html` (advanced version) into the first tab (HTML Layout). Copy / paste the content of `dishonored.css` into the second tab (CSS). You can then preview the result on the fourth tab (preview).

If you are using the advanced version, you also need to load external scripts. To do so, return on the main page of your game, click "Settings", then "API Scripts". Click the "New Script" tab, give it a name (optionally - you can call it dishonored.js), then copy / paste the content of `dishonored-api.js` inside the code area. Make sure you save the result, and Roll20 should run it without an error.

You are now ready to use this character sheet!