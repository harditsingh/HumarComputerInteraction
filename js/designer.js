function main() {
    // This code segment adds an event listener to the 'Select a file' button and listens for a mouse click. On mouse click, it triggers
    // the hidden input element of type file. This is done because input of type file is incredibly hard to style.
    document.getElementById("upload-button").addEventListener('click', function() {
        document.getElementById("file-upload").click();
    });

    // A function is created to read the source of the uploaded file and display it in the overlay container on the tshirt
    let loadFile = function (event) {
        let output = document.getElementById('design-image');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.style.display = "block";
    };

    // An event listener is added to the file upload element (input of type file), and the function loadFile is called when the source of the file changes
    document.getElementById("file-upload").addEventListener('change', loadFile)
}

// An event listener is added to the window, the main function is executed when the window finishes loading
window.addEventListener('load', main)