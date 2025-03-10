var listItems = document.getElementsByTagName('li'); // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2'); // h2 element
var headingText = heading.firstChild.nodeValue; // h2 text
var totalItems = listItems.length; // No. of <li> elements
var newHeading =  headingText + ' <span class="h2 span">' + totalItems + '</span>'; // Content

// Part1. Hint: Use the listItems object to iterate through the elements of the list
for (var i = 0; i < listItems.length; i++) {
    var item = listItems[i];
    if (item.textContent.trim() === "fresh figs" || item.textContent.trim() === "kale" || item.textContent.trim() === "honey") { item.className = 'best'; }
}


// Part2. Hint: Use the heading and newHeading to show the number of items in the shopping list
heading.innerHTML = newHeading;




