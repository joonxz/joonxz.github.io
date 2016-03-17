(function () {
  
  var burger = document.querySelector('.burger-icon');
  var mobNav = document.querySelector('nav.mobile');

  window.addEventListener('resize', function () {
    if(window.innerWidth > '461') {
      burger.classList.remove('active');
      mobNav.classList.remove('active');
    }
  });

  burger.addEventListener('click', function () {
    if (!this.classList.contains('active') && window.innerWidth <= '461') {
      this.classList.add('active');
      mobNav.classList.add('active');
    } else {
      this.classList.remove('active');
      mobNav.classList.remove('active');
    }
  });

})();