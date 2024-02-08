var pages = [
    ["about_page.html", "About"],
    ["share_page.html", "Share"],
    ["homepage_page.html", "Home_Page"]
]

var iframe_element = document.querySelector("#main-page")
var logo_element = document.querySelector("#logo")
for (let i = 0; i < pages.length; i++) {
    pages[i][2] = document.querySelector("#" + pages[i][1] + "-button")
    pages[i][2].onclick = function () {
        iframe_element.src = "./" + pages[i][0]
        logo_element.innerHTML = pages[i][1].replace('_', ' ')
    }
}


const copyContent = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}

const window_title = window.document.title;
const window_href = window.document.location.href;

window.addEventListener('message', function(event) {
    switch(event.data){
        case 'copy':
            navigator.clipboard.writeText(window_href);
            copyContent(window_href)
            break;
        case 'send':
            if (navigator.share){
                navigator.share({
                    title: window_title,
                    url: window_href
                }).then( ()=>{
                    console.log("Thanks for sharing");
                })
                .catch(console.error);
            } else{
                navigator.clipboard.writeText(window_href);
                copyContent(window_href);
            }
            break;

        default:
            console.log("Message received from the child: " + event.data); 
    }
});


