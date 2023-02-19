var buttons = document.querySelectorAll('.button');
var contentContainer = document.getElementById('content-container');
var currentPage = '';

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    this.classList.add('active');
    var nextPage = this.getAttribute('href');
    if (nextPage !== currentPage) {
      currentPage = nextPage;
      contentContainer.classList.add('fade-out');
      setTimeout(function() {
        fetch(currentPage)
          .then(function(response) {
            return response.text();
          })
          .then(function(data) {
            contentContainer.innerHTML = data;
            contentContainer.classList.remove('fade-out');
            contentContainer.classList.add('fade-in');
          });
      }, 500);
    }
  });
});

const languageSelect = document.getElementById('language-select');

const resources = {
  'en': {
    'welcomeMessage': 'Welcome',
    'selectLanguage': 'Select language:',
    'continueButton': 'CONTINUE'
  },
  'es': {
    'welcomeMessage': 'Bienvenido',
    'selectLanguage': 'Seleccionar idioma:',
    'continueButton': 'CONTINUAR'
  },
  'ru': {
    'welcomeMessage': 'Добро пожаловать',
    'selectLanguage': 'Выберите язык:',
    'continueButton': 'ПРОДОЛЖИТЬ'
  },
  'pt-br': {
    'welcomeMessage': 'Bem-vindo',
    'selectLanguage': 'Selecionar idioma:',
    'continueButton': 'CONTINUAR'
  }
};

function setLanguage() {
  const lang = languageSelect.value;
  const languageResources = resources[lang];

  document.querySelector('title').textContent = languageResources.welcomeMessage;
  document.querySelector('label[for="language-select"]').textContent = languageResources.selectLanguage;
  document.querySelector('.button').
