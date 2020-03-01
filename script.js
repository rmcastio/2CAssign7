// 1. Create a page that displays a bomb (using the bomb emoji, 💣). When you press
// the up arrow, it should inflate (ticker) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// bomb, without scrolling the page.
// When that works, add a feature where, if you blow up the bomb past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
"use strict";




let bomb = document.getElementById("bomb");
let currentSize = 100;

const ticker = event => {
  if (event.key == "ArrowUp" || event.key == "w") {
    event.preventDefault();
    currentSize *= 1.1;
    bomb.style.fontSize = currentSize + "%";
  } else if (event.key == "ArrowDown" || event.key == "s") {
    event.preventDefault();
    if (currentSize <= 50) {
      return;
    }
    currentSize *= 0.9;
    bomb.style.fontSize = currentSize + "%";
  }
  if (currentSize >= 500) {
    event.preventDefault();
    bomb.textContent = "💥";
    window.removeEventListener("keydown", ticker);
  }
};

window.addEventListener("keydown", ticker);


// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it
