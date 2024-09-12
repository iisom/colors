// Color Helpers
// Note: It is not crucial that you understand the math here
const generateRandomColor = () => Math.floor(Math.random()*16777215).toString(16);
const invertColor = (colorHex) => (Number(`0x1${colorHex}`) ^ 0xFFFFFF).toString(16).substr(0, 6);

// Sets the background and text color of an DOM node
const assignRandomColors = function(node) {
  const color = generateRandomColor();
  node.style.backgroundColor = '#' + color;
  node.style.color = '#' + invertColor(color);
};

// DO:
// Using a for/of loop, get and loop over all <p> tags on the page 
// and call assignRandomColors with the node as an argument
// (hint: what CSS selector can you use to target elements by their node/tag name?)

document.body.addEventListener('click', (event) => {

  if (event.target.tagName.toLowerCase() === 'p') {
      const clickedNode = event.target;

      assignRandomColors(clickedNode);

      let count = parseInt(clickedNode.textContent);
      count++;
      clickedNode.textContent = count.toString();

  if (clickedNode.classList.contains('odd')) {
       
      const oddNodes = document.querySelectorAll('.odd');
        
      oddNodes.forEach(node => assignRandomColors(node));
    } else {
        
      const parentSection = clickedNode.parentNode;
        
      const nodesInSection = parentSection.querySelectorAll('*');
      
      nodesInSection.forEach(node => assignRandomColors(node));
    }
  }
});
  // DO:
  // Set the text inside the clicked node to the count

  // DO:
  // Check if the clicked node has the class "odd"
  // (hint: check out the `node.classList` documentation)
  
  // If the node has the class, get and loop over 
  // all the nodes **on the page** with the "odd" class
  // (hint: what CSS selector can you use to target elements by the class(s) they have?) 
  // and call assignRandomColors with the node as an argument

  // If the node does not have that class
  // get and loop over all the nodes in the clicked nodes <section> 
  // (hint: nodes have a parentNode property)
  // and call assignRandomColors with the node as an argument

