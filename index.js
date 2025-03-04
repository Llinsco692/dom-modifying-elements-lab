// Write your code here!
// Task 1: Remove the <main> element with id 'main'
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();  // Removes the <main> element from the DOM
}

// Task 2: Create and insert a new <h1> element with the id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';  // Set the id of the new header
newHeader.textContent = 'John is the champion';  
document.body.appendChild(newHeader);  

// Optional: Apply additional styling (e.g., color, font size)
newHeader.style.color = 'blue';
newHeader.style.fontSize = '40px';
