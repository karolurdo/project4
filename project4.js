let size = 10;
let orderElement = 1;


const init = function() {
    const button = document.createElement('button'); // create button
    button.textContent = "Create elements"; // creacte textContent to button
    button.style.fontSize = "20px"; // change fontSize
    button.style.backgroundColor = "red";
    document.body.appendChild(button); // add button to body
    const ul = document.createElement("ul"); // create ul 
    document.body.appendChild(ul); // add ul to body 
    button.addEventListener('click', createLiElements); // Listener

    const resetButton = document.createElement('reset');
    

};

const createLiElements = function(){
    const addItem = document.createElement("ul");
    addItem.textContent = orderElement;
    document.body.appendChild(addItem); 
    orderElement++;
    addItem.style.fontSize = size +"px";
    size+=10;
};

init();
