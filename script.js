const controller = dailywater;
const radialProgress = document.querySelector('.RadialProgress');

const setProgress = (progress) => {
    const value = `${progress}%`;
    radialProgress.style.setProperty('--progress', value)
    radialProgress.innerHTML = value
    radialProgress.setAttribute('aria-valuenow', value)
}

setProgress(dailywater)
document.querySelector('button').onclick = () => {
    drinkcup()
    setProgress(dailywater)
}