(function () {
  
  var burger = document.querySelector('.burger-icon');
  var mobNav = document.querySelector('nav.mobile');
    
  burger.addEventListener('click', function () {
    if (!this.classList.contains('active')) {
      this.classList.add('active');
      mobNav.classList.add('active');
    } else {
      this.classList.remove('active');
      mobNav.classList.remove('active');
    }
  });

})();