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

window.addEventListener("load", main)