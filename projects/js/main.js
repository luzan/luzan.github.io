(function () {
    var timeToFallAsleep = 15;
    var cycle = 90;
    var minInHour = 60;
    var hourBase = 12;
    var plan = document.getElementById('plan');
    var getUp = document.getElementById('getUp');
    var goToBed = document.getElementById('goToBed');

    var bedTime = document.getElementById('bedTime');
    var getUpTime = document.getElementById('getUpTime');
    var calcAgain = document.getElementsByClassName('calcAgain');

    bedTime.addEventListener('click', checkBedTime);
    getUpTime.addEventListener('click', checkGetUpTime);

    for (var i = 0; i < calcAgain.length; i++) {
        calcAgain[i].addEventListener('click', checkCalcAgain);
    }

    var settings = document.getElementsByClassName('settings');

    function checkBedTime() {
        var time = document.getElementsByClassName('chosen');
        var hours = parseInt(time[0].innerHTML);
        var min = parseInt(time[1].innerHTML);
        var dayHalf = time[2].innerHTML;
        document.getElementById('wakeUpTime').innerHTML = hours + ":" + min + " " + dayHalf;

        var startTimeArr = calculateTime(hours, min, dayHalf, -timeToFallAsleep);
        var goToBedTime = document.getElementsByClassName('goToBedTime');
        for (var j = 0; j < goToBedTime.length; j++) {
            startTimeArr = calculateTime(startTimeArr[0], parseInt(startTimeArr[1]), startTimeArr[2], -cycle);
            if (startTimeArr[1] < 10) {
                startTimeArr[1] = "0" + startTimeArr[1];
            }
            goToBedTime[goToBedTime.length - 1 - j].innerHTML = startTimeArr[0] + ":" + startTimeArr[1] + " " + startTimeArr[2];
        }
        plan.style.display = "none";
        goToBed.style.display = "block";
    }

    function checkGetUpTime() {
        var date = new Date();
        var hours = date.getHours();
        var min = date.getMinutes();
        var dayHalf;
        if (hours / hourBase > 1) {
            dayHalf = "PM";
            hours = hours % hourBase;
        } else {
            dayHalf = "AM";
        }

        var startTimeArr = calculateTime(hours, min, dayHalf, timeToFallAsleep);
        var wakeUpTime = document.getElementsByClassName('wakeUpTime');
        for (var j = 0; j < wakeUpTime.length; j++) {
            startTimeArr = calculateTime(startTimeArr[0], parseInt(startTimeArr[1]), startTimeArr[2], cycle);
            if (startTimeArr[1] < 10) {
                startTimeArr[1] = "0" + startTimeArr[1];
            }
            wakeUpTime[j].innerHTML = startTimeArr[0] + ":" + startTimeArr[1] + " " + startTimeArr[2];
        }

        plan.style.display = "none";
        getUp.style.display = "block";
    }

    function checkCalcAgain() {
        goToBed.style.display = "none";
        getUp.style.display = "none";
        plan.style.display = "block";
    }

    function calculateTime(hours, min, dayHalf, change) {
        var maxValue = minInHour * hourBase;
        var timeInMin;
        var newH;

        //Ð½Ð¾Ñ€Ð¼Ð¸Ñ€ÑƒÑŽ Ñ‡Ð°ÑÑ‹
        if (hours === hourBase) {
            timeInMin = min;
            hours = 0;
        } else {
            timeInMin = hours * minInHour + min;
        }

        var newTime = timeInMin + change;

        //ÑÑ‡Ð¸Ñ‚Ð°ÑŽ Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹ Ð¸ Ñ‡Ð°ÑÑ‹
        if (newTime >= 0) {
            min = newTime % minInHour;
            if (Math.floor(newTime / minInHour) >= hourBase) {
                newH = Math.floor(newTime / minInHour) - hourBase;
            } else {
                newH = Math.floor(newTime / minInHour);
            }
        } else {
            min = minInHour + newTime % minInHour;
            newH = Math.floor((maxValue + (timeInMin + change)) / minInHour);
        }

//Ð²Ñ‹Ñ‡Ð¸ÑÐ»ÑÑŽ Ð¿Ð¾Ð»Ð¾Ð²Ð¸Ð½Ñƒ Ð´Ð½Ñ
        if ((change > 0 && newH < hours) || (change < 0 && newH > hours)) {
            if (dayHalf == "AM") {
                dayHalf = "PM";
            } else {
                dayHalf = "AM";
            }
        }

        //Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‰Ð°ÑŽ Ñ‡Ð°ÑÑ‹ Ðº Ð½ÑƒÐ¶Ð½Ð¾Ð¼Ñƒ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ñƒ
        if (newH === 0) {
            hours = hourBase;
        }
        else {
            hours = newH;
        }

        return [hours, min, dayHalf];

    }

})();
