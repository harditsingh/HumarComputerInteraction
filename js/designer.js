/**
 * Define functionality for buttons on Design Your Own T-Shirt page.
 * Select a file button: open My Computer and allow to choose a file.
 * Open file image of T-shirt to check design.
 */
function main() {
    /**
     * On click: Open Files folder 
     */
    document.getElementById("upload-button").addEventListener('click', function() {
        document.getElementById("file-upload").click();
    });
    /**
     * Load chosen image 
     * @param output: Chosen image 
     */
    var loadFile = function (event) {
        var output = document.getElementById('design-image');
        output.src = URL.createObjectURL(event.target.files[0]);
    };
    /**
     * Put chosen image on T-shirt for design overview
     */
    document.getElementById("file-upload").addEventListener('change', loadFile)
}

/**
 * Start main on load
 */
window.addEventListener('load', main)