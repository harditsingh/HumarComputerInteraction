/**
 * Loading and main page functionality
 */
function main() {
    /** Open menu on mobile when clicked on "hamburger" icon
     * Id menu-toggle: hamburger icon
     * Id popup: menu 
    */
    document.getElementById("menu-toggle").addEventListener("click", function () {
        const menuPopup = document.getElementById("popup");

        // Open menu if it's closed and vice versa
        if (menuPopup.classList.contains("active")) {
            menuPopup.classList.remove("active");
        } else {
            menuPopup.classList.add("active")
        }
    });
    
    /**
     * Close newsletter bar if (X) button is clicked
     */
    if (document.getElementById("newsletter-bar-close") != null) {
        document.getElementById("newsletter-bar-close").addEventListener('click', function () {
            document.getElementById("newsletter-bar").style.display = "none";
        })
    }
    
    /**
     * Progress bar on loading page
     */
    if(document.getElementById("progress-bar") != null) {
        document.getElementById("progress-bar").style.width = "100%";
    }
    
    /**
     * Loading page greeting message
     */
    if(document.getElementById("loading-message") != null) {
        let element = document.getElementById("loading-message");
        element.style.transform = "translateY(0px)";
        element.style.opacity = "1";
    }

    /**
     * Fade out loading page after const time
     */
    setTimeout(hideLoadFrame, 4000);
    
    addAccordionListeners();
    addCartListeners();
}

/**
 * Define functionality of FAQ vertically aligned list section
 * @param acc: vertically aligned list of frequently asked questions
 * - On click: open panel with answer
 */
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

/**
 * Add event listener to all 'Add to cart' buttons
 * On click: increase number of amount of items in cart
 */
function addCartListeners() {
    let listOfCartButtons = document.getElementsByClassName("cart");
    console.log(listOfCartButtons);
    for (let i = 0; i < listOfCartButtons.length; i++) {
        listOfCartButtons[i].addEventListener('click', addToCart);
    }
}

/**
 * Increase amount of items in cart
 */
function addToCart() {
    let cartCounts = document.getElementsByClassName("cart-count");
    for (let i = 0; i < cartCounts.length; i++) {
        let amount = parseInt(cartCounts[i].innerHTML);
        cartCounts[i].innerHTML = amount + 1;
    }
}

/**
 * Hide the loading bar of loading page
 */
function hideLoadFrame() {
    document.getElementById("loading-container").style.display = "none";
}

/**
 * Start up main on load
 */
window.addEventListener("load", main)