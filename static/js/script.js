document.addEventListener('DOMContentLoaded', function () {
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation();
            const url = this.getAttribute('data-url');
            const target = this.getAttribute('data-target') || '_self';
                    
            if (url.startsWith('mailto:')) {
                window.location.href = url;
            } else if (target === '_blank') {
                window.open(url, '_blank');
            } else {
                window.location.href = url;
            }
            });

            link.addEventListener('mouseenter', function() {
                this.style.textDecoration = 'none';
            });
                
            link.addEventListener('mouseleave', function() {
                this.style.textDecoration = 'underline';
            });
    });
});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function () {
});

var pageLoading = document.querySelector("#qmdeve-loading");
window.addEventListener('load', function() {
    setTimeout(function () {
        pageLoading.style.opacity = '0';
    }, 100);
});