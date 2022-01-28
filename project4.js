let size = 10;
let orderElement = 1;


const init = function() {
    const button = document.createElement('button'); // create button
    button.textContent = "Create elements"; // creacte textContent to button
    button.style.fontSize = "20px"; // change fontSize 
    document.body.appendChild(button); // add button to body
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    button.addEventListener('click', createLiElements);

};

const createLiElements = function(){
    

};

init();
