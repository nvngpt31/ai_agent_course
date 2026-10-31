Here is the complete code and explanation to build a functional Passenger Counter App using HTML, CSS, and JavaScript. 
This app tracks the current passenger count, allows increments, saves the data into a history string, and resets the current count back to zero.

DOM Manipulation: Elements are retrieved using document.getElementById() to alter text dynamically based on program state variables.
textContent vs innerText: textContent is preferred here because it reliably retrieves and alters the raw text node data, including spaces, 
without waiting for costly layout rendering style computations.
