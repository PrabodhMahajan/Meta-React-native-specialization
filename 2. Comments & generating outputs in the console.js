// In the code below the font size is different & the color is blue

/* If you add the %c after the " character, you can then style the console output by adding the , character 
after the second ", and then, inside another pair of " and " characters, 
use valid CSS code to style the words you want to output in the console */

//Try this in the web browser by clicing on F12, opening & running it in console log of the browser

console.log("%cHello, World!", "color: blue; font-size: 40px");

//Output multiple words into the console by using + character to join them (+ is known as the concatenation operator)
console.log("Hello " + "there, " + "World!")

//Outputting 3 separate pieces of text using the , character instead
console.log("Hello ", "there, ", "world!")