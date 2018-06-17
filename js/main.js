function main() {
    document.getElementById("menu-toggle").addEventListener("click", function() {
        const menuPopup= document.getElementById("popup");

        if(menuPopup.classList.contains("active")) {
            menuPopup.classList.remove("active");
        }
        else {
            menuPopup.classList.add("active")
        }
    })
}

window.addEventListener("load", main)