let http = require('http');
const { productData, enableButton, shareData } = require('./gameConst.js');

      
var buildUrl = "Build";
var loaderUrl = buildUrl + "/" + productData.FILE_NAME + ".loader.js";
var config = {
        dataUrl: "Build/" + productData.FILE_NAME + ".data",
        frameworkUrl: "Build/" + productData.FILE_NAME + ".framework.js",
        codeUrl: "Build/" + productData.FILE_NAME + ".wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: productData.COMPANY_NAME,
        productName: productData.PRODUCT_NAME,
        productVersion: productData.PRODUCT_VERSION,
        // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
        // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
    }
var canvas = document.querySelector("#unity-canvas");

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    // Mobile device style: fill the whole browser client area with the game canvas:
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
    document.getElementsByTagName('head')[0].appendChild(meta);

    var canvas = document.querySelector("#unity-canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.position = "fixed";

    document.body.style.textAlign = "left";
  }

if (enableButton.FULLSCREEN){
    var fullscreenButton = document.querySelector("#unity-fullscreen-button");
}
if (enableButton.SHARE){
    var fullscreenButton = document.querySelector("#share-button");
}

if (Object.is(shareData.title, null)) {
    shareData.title = window.document.title;
}
if (Object.is(shareData.url, null)) {
    shareData.url = window.document.location.href;
}

var script = document.createElement("script");
script.src = loaderUrl;
script.onload(() => {
   createUnityInstance(canvas, config, (unityInstance) => {}).then((unityInstance) => {
    if (enableButton.FULLSCREEN) {
        fullscreenButton.onclick = () => {
            unityInstance.SetFullscreen(1);
        };
    };

    if (enableButton.SHARE) {
        shareButton.onclick = () => {
            if (!navigator.canShare){
                console.log("navigator.canshare() not supported.");
            }
            else if (navigator.canShare(shareData)) {
                navigator.share(shareData).then(() =>{
                    console.log("Thanks for sharing.");
                });
            }
            else {
                console.log("Specified data cannot be shared.");
            }
        }
    }
   }); 
});

document.body.appendChild(script);