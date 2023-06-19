 let userBrowser = navigator.userAgent
 let userMainBrowser

if (userBrowser.match(/edg/i)) {
    userMainBrowser ='edge'
}else if (userBrowser.match(/firefox/i)) {
    userMainBrowser ='firefox'
}else if (userBrowser.match(/opr/i)) {
    userMainBrowser ='opera'
}else if (userBrowser.match(/chrome/i)){
    userMainBrowser ='chrome'
}else if (userBrowser.match(/safari/i)) {
    userMainBrowser ='safari'
}

let browserElem = document.querySelector(`.${userMainBrowser}`)

if (browserElem) {
  browserElem.style.opacity = '1'  
}
