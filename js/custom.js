// Avoid to add js
const app_headers = document.querySelectorAll('.app-header');
app_headers.forEach(function (app_header) {
  app_header.addEventListener('click', function () {
    app_header.classList.toggle("app-header-show");
  }, false);
});
const sidebar_menus = document.querySelectorAll('.sidebar-menu');
sidebar_menus.forEach(function (sidebar_menu) {
  sidebar_menu.addEventListener('click', function (e) {
    e.stopPropagation()
  }, false);
});