const hamburgerMenu = document.getElementById('nav-bar');
const mobileNavContent = document.getElementById('main-nav-mobile');

//nav-barをクリックすると、main-nav-mobileを表示にする。
hamburgerMenu.addEventListener('click', function() {
  mobileNavContent.classList.toggle('show');
});