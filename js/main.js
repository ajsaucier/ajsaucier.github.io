const themeSwitch = document.querySelector('.switch-btn');
const themeSwitchText = document.querySelector('.switch-btn__text');
const body = document.querySelector('body');

themeSwitch.addEventListener('click', (e) => {
  body.classList.toggle('dark-theme');
  themeSwitch.setAttribute('aria-checked', themeSwitch.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
  themeSwitchText.innerHTML = (themeSwitch.getAttribute('aria-checked') === 'true' ? 'Turn dark theme off' : 'Turn dark theme on');
  document.cookie = (body.classList.contains('dark-theme') === true ? 'darktheme=true; path=/' : 'darktheme=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/');;
});

(function () {
  if (document.cookie) {
    body.classList.add('dark-theme');
    themeSwitch.setAttribute('aria-checked', true);
    themeSwitchText.innerHTML = 'Turn dark theme off';
  } else {
    themeSwitch.setAttribute('aria-checked', false);
    themeSwitchText.innerHTML = 'Turn dark theme on';
  }
})();
