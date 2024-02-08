const { NONAME } = require("dns");

const productData = {
    COMPANY_NAME : "Ten7ave",
    PRODUCT_NAME: "Ten7ave_Game",
    PRODUCT_VERSION: "0.5",
    FILE_NAME: "Ten7Ave_v1_Minimal"
}

const enableButton = {
    FULLSCREEN : false,
    SHARE : true
}

var shareData = {
    title : null,
    url : null,
}

module.exports = {productData, enableButton, shareData};