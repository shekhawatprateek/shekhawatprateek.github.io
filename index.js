let theme = localStorage.getItem('theme')

if(theme == null) {
    setTheme('green')
} else {
    setTheme(theme)
}


let themeDot = document.getElementsByClassName('theme-dot')

for(var i=0; themeDot.length > i; i++) {
    themeDot[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(mode) {
    if(mode =='light') {
        document.getElementById('theme-style').href = './default.css'
    }
    if(mode =='blue') {
        document.getElementById('theme-style').href = './blue.css'
    }
    if(mode =='green') {
        document.getElementById('theme-style').href = './green.css'
    }
    if(mode =='purple') {
        document.getElementById('theme-style').href = './purple.css'
    }

    localStorage.setItem('theme', mode)
}

window.onload = function() {
    var $recaptcha = document.querySelector('.g-recaptcha');
    console.log("workds")

    if($recaptcha) {
        $recaptcha.setAttribute("required", "required");
    }
};