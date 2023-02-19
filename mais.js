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
