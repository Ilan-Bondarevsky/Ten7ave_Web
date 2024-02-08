var game_container = document.querySelectorAll(".game-container");

game_container.forEach(
    (element) =>{
        for (const child of element.children) {
            child.onclick = function(){
                window.parent.location.href = element.getAttribute("data-value"); 
                
            }
        }
    }
);
