let size = 10;
let orderElement = 1;


const init = function() {
    const button = document.createElement('button'); // create button
    const resetButton = document.createElement('button');// reset button
    document.body.appendChild(resetButton);
    button.textContent = "Create elements"; // creacte textContent to button
    button.style.fontSize = "20px"; // change fontSize
    button.style.backgroundColor = "red";
    document.body.appendChild(button); // add button to body
    const ul = document.createElement("ul"); // create ul 
    document.body.appendChild(ul); // add ul to body 
    button.addEventListener('click', createLiElements); // Listener
    resetButton.textContent = "Reset";
    resetButton.style.fontSize = "30px";
    resetButton.addEventListener('click', reset);
};

const createLiElements = function(){ // New function to creat elements 
    const addItem = document.createElement("li");
    addItem.textContent = orderElement;
    document.body.appendChild(addItem); 
    orderElement++;
    addItem.style.fontSize = size +"px";
    size+=10;
    document.querySelector('ul').appendChild(addItem);
};

const reset = function(){
    console.log("work");
    document.querySelector('ul').textContent =""; // reset ul
    size = 10;
    orderElement = 1;
    
};

init();
