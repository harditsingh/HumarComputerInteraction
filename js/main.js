function main() {

    // The following code segment is used to toggle the menu on mobile using the hamburger button
    let toggleButtons = document.getElementsByClassName("mobile-menu-toggle");
    for (let i = 0; i < toggleButtons.length; i++) {
        // We add an event listener to all the mobile menu hamburger buttons (multiple on every page), and give a function to execute on 'click' event
        toggleButtons[i].addEventListener("click", function () {
            const menuPopup = document.getElementById("mobile-popup");
            // We see whether the menu-popup is active or inactive and toggle it accordingly
            if (menuPopup.classList.contains("popup-active")) {
                menuPopup.classList.remove("popup-active");
                document.body.style.overflow = "unset";
            } else {
                menuPopup.classList.add("popup-active");
                document.body.style.overflow = "hidden";
            }
        });
    }

    // The following code segment is used to toggle the menu on desktop using the hamburger button
    toggleButtons = document.getElementsByClassName("desktop-menu-toggle");
    for (let i = 0; i < toggleButtons.length; i++) {
        // We add an event listener to all the desktop menu hamburger buttons (multiple on every page), and give a function to execute on 'click' event
        toggleButtons[i].addEventListener("click", function () {
            const menuPopup = document.getElementById("desktop-popup");
            // We see whether the menu-popup is active or inactive and toggle it accordingly
            if (menuPopup.classList.contains("popup-active")) {
                menuPopup.classList.remove("popup-active");
                document.body.style.overflow = "unset";
            } else {
                menuPopup.classList.add("popup-active");
                document.body.style.overflow = "hidden";
            }
        });
    }

    // The following code segment checks if the cookie notification element exists and then adds an event listener to the 'close' button to close the bar on click event
    if (document.getElementById("cookie-bar-close") != null) {
        document.getElementById("cookie-bar-close").addEventListener('click', function () {
            document.getElementById("cookie-bar").style.display = "none";
        })
    }

    // The following code segment is used to make the progress bar of the loading page go from 0% to 100%
    if (document.getElementById("progress-bar") != null) {
        document.getElementById("progress-bar").style.width = "100%";
    }

    // The following code segment animates the loading message
    if (document.getElementById("loading-message") != null) {
        let element = document.getElementById("loading-message");
        element.style.transform = "translateY(0px)";
        element.style.opacity = "1";
    }

    // The following code segment sets a timeout to the loading container to 4seconds
    if (document.getElementById("loading-container") != null) {
        setTimeout(hideLoadFrame, 4000);
    }

    // The following code segment toggles the tshirt animation on the index page for the first time, following which the function toggles itself
    if (document.getElementById("sun-tshirt") != null) {
        setTimeout(toggleWeather, 4000);
    }

    // This function call adds 'click' event listeners to the accordians on the FAQ page
    addAccordionListeners();
    // This function call adds 'click' event listeners to the add to cart buttons so that the number of items in cart can be incremented
    addCartListeners();
}

function addAccordionListeners() {
    // This function adds 'click' event listeners to the accordians on the FAQ page, this event opens or closes the segments
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
    // This function adds 'click' event listeners to the add to cart buttons so that the number of items in cart can be incremented
    let listOfCartButtons = document.getElementsByClassName("cart");
    console.log(listOfCartButtons);
    for (let i = 0; i < listOfCartButtons.length; i++) {
        listOfCartButtons[i].addEventListener('click', addToCart);
    }
}

function addToCart() {
    // This function is used to increment the amount if items in the cart and change it on all the cart icons displayed on the page (mobile and desktop)
    let cartCounts = document.getElementsByClassName("cart-count");
    for (let i = 0; i < cartCounts.length; i++) {
        let amount = parseInt(cartCounts[i].innerHTML);
        cartCounts[i].innerHTML = amount + 1;
    }
}

function hideLoadFrame() {
    // This function hides the loadframe
    document.getElementById("loading-container").style.display = "none";
}

function toggleWeather() {
    // This function toggles the weather animation, and switches the weather from cloudy to sunny to cloudy every 6 seconds
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

// Here, an event listener is added to the window so that the main function can be executed as the page finishes loading
window.addEventListener("load", main)