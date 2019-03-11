$(function () {
    let oldDate = new Date(2012, 0, 1);
    let todayDate = new Date();
    let jsonArray = [];
    let y = {};
    for (i = 1; i <= 50; i++) {
        let seriesNoTailPad = ("000" + i);
        let seriesNoTail = seriesNoTailPad.substr(length - 4);
        let seriesNo = "re-".concat(seriesNoTail);

        let repairDate = randomDate(oldDate, todayDate);
        let company = (Math.random() >= 0.5) ? '流亞' : '亞磯';
        let process = (Math.random() >= 0.5) ? 1 : 4;

        let startDate = getStartDate(new Date(repairDate));
        let endDate = getEndDate(new Date(repairDate));
        let appointmentDate = startDate + '~' + endDate;
        let amount = getRandomInt(50000);

        let detail = {
            'seriesNo': seriesNo,
            'repairDate': getMyDate(repairDate),
            'company': company,
            'process': process,
            "appointmentDate": appointmentDate,
        };
        let id = "" + i;
        y[id] = detail;
    }
    // language=JQuery-CSS
    $("#go").text(JSON.stringify(y));

    function getMyDate(date) {
        return (date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate());
    }

    function getMyDate(date) {
        return (date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + addZeroBefore(date.getHours()) + ':' + date.getMinutes());
    }

    function getStartDate(date) {

        return (date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + (date.getDate() + 5) + ' ' + addZeroBefore(date.getHours()) + ':' + date.getMinutes());
    }

    function getEndDate(date) {
        return (date.getFullYear() + '/' + (date.getMonth() + 2) + '/' + (date.getDate() + 12) + ' ' + addZeroBefore(date.getHours()) + ':' + date.getMinutes());
    }

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function addZeroBefore(n) {
        return (n < 10 ? '0' : '') + n;
    }
});