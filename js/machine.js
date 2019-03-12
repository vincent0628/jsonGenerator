$(function () {
    let jsonFile = {};
    for (i = 1; i <= 50; i++) {
        let machinNoTailPad = ("000" + i);
        let machinNoTail = machinNoTailPad.substr(length - 4);
        let machinNo = "machine-".concat(machinNoTail);

        let detail = {
            "info": "染布機"+machinNoTailPad.toString(),
        };

        jsonFile[machinNo] = detail;
    }
// language=JQuery-CSS
    $("#go").text(JSON.stringify(jsonFile));
})

function addZeroBefore(n) {
    return (n < 10 ? '0' : '') + n;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
