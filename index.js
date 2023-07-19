const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    let timer = null;
    return (seconds) => {
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(() => {
            if (seconds > 86400) {
                seconds = 86400;
            }
            if (!seconds) {
                clearInterval(timer);
            }
            // hours = Math.floor(seconds / 3600);
            // seconds %= 3600;
            // minutes = Math.floor(seconds / 60);
            // seconds = seconds % 60;
            // timerEl.innerHTML = `${hours || '00'}:${minutes || '00'}:${seconds || '00'}`
            timerEl.innerHTML = new Date(seconds * 1000).toISOString().slice(11, 19);
            seconds--;
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    // Очистите input так, чтобы в значении
    // оставались только числа
    inputEl.value = inputEl.value.replace(/[^\d]/, '');
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';
});
