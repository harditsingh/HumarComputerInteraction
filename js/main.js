function main() {
    document.getElementById("menu-toggle").addEventListener("click", function () {
        const menuPopup = document.getElementById("popup");

        if (menuPopup.classList.contains("active")) {
            menuPopup.classList.remove("active");
        } else {
            menuPopup.classList.add("active")
        }
    });

    if (document.getElementById("newsletter-bar-close") != null) {
        document.getElementById("newsletter-bar-close").addEventListener('click', function () {
            document.getElementById("newsletter-bar").style.display = "none";
        })
    }

    if(document.getElementById("progress-bar") != null) {
        document.getElementById("progress-bar").style.width = "100%";
    }

    if(document.getElementById("loading-message") != null) {
        let element = document.getElementById("loading-message");
        element.style.transform = "translateY(0px)";
        element.style.opacity = "1";
    }

    setTimeout(hideLoadFrame, 4000);
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

window.addEventListener("load", main)