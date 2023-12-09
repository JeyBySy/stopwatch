function getDigitData() {
    const digits = document.getElementsByClassName('digital-digit')
    return digits
}

function digitalDisplay(data) {
    if (Array.isArray(data)) {
        console.log("dasds");
    }
}

digitalDisplay(getDigitData())


