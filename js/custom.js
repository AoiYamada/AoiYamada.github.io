// Avoid to add js
const app_headers = document.querySelectorAll('.app-header');
app_headers.forEach(function (app_header) {
  app_header.addEventListener('click', function () {
    app_header.classList.toggle("app-header-show");
  });
});