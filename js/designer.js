function main() {
    document.getElementById("upload-button").addEventListener('click', function() {
        document.getElementById("file-upload").click();
    });

    var loadFile = function (event) {
        var output = document.getElementById('design-image');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.style.display = "block";
    };

    document.getElementById("file-upload").addEventListener('change', loadFile)
}

window.addEventListener('load', main)