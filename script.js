function generateQR() {
    let text = document.getElementById("text").value;

    if (text === "") {
        alert("Please enter text or URL");
        return;
    }

    document.getElementById("qr").innerHTML =
    `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}">`;
}