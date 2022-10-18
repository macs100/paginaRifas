const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
    }
};

const countdown = (deadline, finalMessage) => {
    const el = document.querySelector('.contador');

    const timerUpdate = setInterval(() => {
        let t = getRemainingTime(deadline);
        document.querySelector('#numDias').textContent = t.remainDays;
        document.querySelector('#numHoras').textContent = t.remainHours;
        document.querySelector('#numMin').textContent = t.remainMinutes;
        document.querySelector('#numSeg').textContent = t.remainSeconds;
        
        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }

    }, 1000)
};

countdown('Oct 28 2022 00:00:00 GMT-0300', '¡Sorteando los ganadores!');