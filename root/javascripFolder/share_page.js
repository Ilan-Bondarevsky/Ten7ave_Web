var game_container = document.querySelectorAll(".share-window");
game_container.forEach(
    (element) =>{
        for (const child of element.children) {
            child.onclick = function(){
                var message = child.getAttribute("data-value")

                //  Send `message` to the parent using the postMessage method on the window.parent reference.
                window.parent.postMessage(message, "*");
            }
        }
    }
);
