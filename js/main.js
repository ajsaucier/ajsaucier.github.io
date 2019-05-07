const themeSwitch = document.querySelector('.switch-btn');
const themeSwitchText = document.querySelector('.switch-btn__text');
const body = document.querySelector('body');

themeSwitch.addEventListener('click', (e) => {
  body.classList.toggle('dark-theme');
  themeSwitch.setAttribute('aria-checked', themeSwitch.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
  themeSwitchText.innerHTML = (themeSwitch.getAttribute('aria-checked') === 'true' ? 'Turn dark theme off' : 'Turn dark theme on');
});
