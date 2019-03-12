$(function () {
    let jsonFile = {};
    for (i = 1; i <= 50; i++) {
        let machinNoTailPad = ("000" + i);
        let machinNoTail = machinNoTailPad.substr(length - 4);
        let machinNo = "machine-".concat(machinNoTail);

        let detail = {
            "1": {
                "serialNo": "AK-DSL250",
                "name": "AK-DSL250染色機"
            },
            "2": {
                "serialNo": "AK-DSL500",
                "name": "AK-DSL500染色機"
            },
            "3": {
                "serialNo": "AK-DSL1000",
                "name": "AK-DSL1000染色機"
            },
            "4": {
                "serialNo": "AK-SL100",
                "name": "AK-SL100雙液流染色機"
            },
            "5": {
                "serialNo": "AK-SL250",
                "name": "AK-SL250雙液流染色機"
            },
            "6": {
                "serialNo": "AK-SL500",
                "name": "AK-SL500雙液流染色機"
            },
            "7": {
                "serialNo": "AK-SL1000",
                "name": "AK-SL1000雙液流染色機"
            },
            "8": {
                "serialNo": "AK-ISL300",
                "name": "AK-ISL300雙液流染色機"
            },
            "9": {
                "serialNo": "AK-ISL600",
                "name": "AK-ISL600雙液流染色機"
            },
            "10": {
                "serialNo": "AK-ISL1200",
                "name": "AK-ISL1200雙液流染色機"
            },
            "11": {
                "serialNo": "AK-REO 1T",
                "name": "AK-REO 1T常溫染色機"
            },
            "12": {
                "serialNo": "AK-REO 2T",
                "name": "AK-REO 2T常溫染色機"
            },
            "13": {
                "serialNo": "AK-REO 3T",
                "name": "AK-REO 3T常溫染色機"
            },
            "14": {
                "serialNo": "AK-REO 4T",
                "name": "AK-REO 4T常溫染色機"
            },
            "15": {
                "serialNo": "AK-REO 6T",
                "name": "AK-REO 6T常溫染色機"
            },
            "16": {
                "serialNo": "AK-REO 8T",
                "name": "AK-REO 8T常溫染色機"
            },
            "17": {
                "serialNo": "AK-QAO 250",
                "name": "AK-QAO 250液流染色機"
            },
            "18": {
                "serialNo": "AK-QAO 500",
                "name": "AK-QAO 500液流染色機"
            },
            "19": {
                "serialNo": "AK-QAO 1000",
                "name": "AK-QAO 1000液流染色機"
            },
            "20": {
                "serialNo": "AK-QAO 1500",
                "name": "AK-QAO 1500液流染色機"
            }
        };

        jsonFile[machinNo] = detail;
    }
// language=JQuery-CSS
    $("#go").text(JSON.stringify(jsonFile));
});

function addZeroBefore(n) {
    return (n < 10 ? '0' : '') + n;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
