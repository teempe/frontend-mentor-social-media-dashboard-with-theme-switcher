const switchBtn = document.querySelector('.switch__checkbox');

const setDarkTheme = () => {
    document.body.classList.add('dark-theme');
}

const setLightTheme = () => {
    document.body.classList.remove('dark-theme');
}

const setTheme = () => {
    switchBtn.checked ? setDarkTheme() : setLightTheme();
}

switchBtn.addEventListener('input', setTheme);

setTheme();