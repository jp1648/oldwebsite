// Tab Link Navigation --------------------------------------------------------------------------------------------------

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// Knicks coloring ---------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const word = document.getElementById('colorized-word');
    const letters = word.textContent.split('');

    word.innerHTML = letters
        .map((letter, index) => `<span class="${index % 2 === 0 ? 'color1' : 'color2'}">${letter}</span>`)
        .join('');
});

// Open/close menu on smaller screens -------------------------------------------------------------------------------------
function openmenu() {
    if (sidemenu) {
        sidemenu.style.right = "0";
    }
}

function closemenu() {
    if (sidemenu) {
        sidemenu.style.right = "-200px";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    sidemenu = document.getElementById("sidemenu");
});


// copy email address -------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const emailTrigger = document.querySelector('.email-trigger');
    const emailBubble = document.querySelector('.email-bubble span');

    emailTrigger.addEventListener('click', function() {
        const email = emailBubble.innerText;
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Email copied to clipboard: ' + email);
    });
});


