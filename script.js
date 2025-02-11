window.onload = function(){
    if(getCookie("popupWatched")){
        return;
    }
    mostrarPopup();
    setCookie("popupWatched","true",1);
    
}


function mostrarPopup() {
    document.getElementById("popup").style.display = "flex";
}

function ocultarPopup() {
    document.getElementById("popup").style.display = "none";
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}