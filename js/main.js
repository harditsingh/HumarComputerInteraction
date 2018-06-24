function main() {

    let toggleButtons = document.getElementsByClassName("mobile-menu-toggle");
    for (let i = 0; i < toggleButtons.length; i++) {
        toggleButtons[i].addEventListener("click", function () {
            const menuPopup = document.getElementById("mobile-popup");

            if (menuPopup.classList.contains("popup-active")) {
                menuPopup.classList.remove("popup-active");
                document.body.style.overflow = "unset";
            } else {
                menuPopup.classList.add("popup-active");
                document.body.style.overflow = "hidden";
            }
        });
    }

    toggleButtons = document.getElementsByClassName("desktop-menu-toggle");
    for (let i = 0; i < toggleButtons.length; i++) {
        toggleButtons[i].addEventListener("click", function () {
            const menuPopup = document.getElementById("desktop-popup");

            if (menuPopup.classList.contains("popup-active")) {
                menuPopup.classList.remove("popup-active");
                document.body.style.overflow = "unset";
            } else {
                menuPopup.classList.add("popup-active");
                document.body.style.overflow = "hidden";
            }
        });
    }


    if (document.getElementById("newsletter-bar-close") != null) {
        document.getElementById("newsletter-bar-close").addEventListener('click', function () {
            document.getElementById("newsletter-bar").style.display = "none";
        })
    }

    if (document.getElementById("progress-bar") != null) {
        document.getElementById("progress-bar").style.width = "100%";
    }

    if (document.getElementById("loading-message") != null) {
        let element = document.getElementById("loading-message");
        element.style.transform = "translateY(0px)";
        element.style.opacity = "1";
    }

    if (document.getElementById("loading-container") != null) {
        setTimeout(hideLoadFrame, 4000);
    }
    if (document.getElementById("sun-tshirt") != null) {
        setTimeout(toggleWeather, 4000);
    }
    addAccordionListeners();
    addCartListeners();
}

function addAccordionListeners() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

function addCartListeners() {
    let listOfCartButtons = document.getElementsByClassName("cart");
    console.log(listOfCartButtons);
    for (let i = 0; i < listOfCartButtons.length; i++) {
        listOfCartButtons[i].addEventListener('click', addToCart);
    }
}

function addToCart() {
    let cartCounts = document.getElementsByClassName("cart-count");
    for (let i = 0; i < cartCounts.length; i++) {
        let amount = parseInt(cartCounts[i].innerHTML);
        cartCounts[i].innerHTML = amount + 1;
    }
}

function hideLoadFrame() {
    document.getElementById("loading-container").style.display = "none";
}

function toggleWeather() {
    let sunTshirt = document.getElementById("sun-tshirt");
    let sunIcon = document.getElementById("sun-icon");
    let cloudIcon = document.getElementById("cloud-icon");

    if (sunTshirt.classList.contains("visible")) {
        sunTshirt.classList.remove("visible");
        sunIcon.classList.remove("visible");
        cloudIcon.classList.add("visible");
    } else {
        sunTshirt.classList.add("visible");
        cloudIcon.classList.remove("visible");
        sunIcon.classList.add("visible");
    }
    setTimeout(toggleWeather, 6000);
}

window.addEventListener("load", main)