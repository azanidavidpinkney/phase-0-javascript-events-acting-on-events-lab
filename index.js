// Your code here
// Changes our language from HTML to DOM and identify the core HTML code we want to manipulate, identified by the "dodger" id
const dodger = document.getElementById("dodger");

// this is the function that says: if the dodger isn't already at the edge, subtract 1 from the left position
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

//this is the event listener that says: when a key is pressed down, if the key is "ArrowLeft," execute the function above
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
});

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    // Check if moving to the right would keep the dodger within the container width. 360 is the maximum left position of the dodger.
    if (left < 360) { 
      dodger.style.left = `${left + 1}px`; // Add 1 to the left position of the dodger
    }
}

// add an Event Listener to the code manipulated by the local browser (the DOM) via document
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { // Check for the right arrow key
      moveDodgerRight();
    }
});