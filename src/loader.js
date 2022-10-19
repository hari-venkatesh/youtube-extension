
s = document.createElement("script");
s.src = chrome.runtime.getURL("src/main.js");

s.onload = function(){
    this.remove();
}

document.head.appendChild(s);