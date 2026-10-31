This file handles the logic: tracking numericals data via memory variables, manipulating DOM text nodes, and binding operations to user click actions. 

// Initialize the count variable as 0
let count = 0;

// Grab the DOM elements needed for interaction
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// Function handles the increment logic
function increment() {
    count += 1;
    countEl.textContent = count;
}

// Function handles saving the data and resetting the view
function save() {
    // Create a string variable for the entry rendering format
    let countStr = count + " - ";
    
    // Append the text string to the existing content without erasing prior entries
    saveEl.textContent += countStr;
    
    // Reset counter tracking text to 0 on the UI
    countEl.textContent = 0;
    
    // Reset internal variable state to 0
    count = 0;
}
