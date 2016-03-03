(function () {
  
  var navElems = document.getElementsByClassName('dropdown');

  for (var i = 0; i < navElems.length; i++) {
    navElem = navElems[i];

    navElem.addEventListener('mouseenter', function () {
        this.classList.add('active');
    });

    navElem.addEventListener('mouseleave', function () {
      this.classList.remove('active');
    });
  };

})();