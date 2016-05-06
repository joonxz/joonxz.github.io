(function () {
  "use strict";

  YUI().use('pjax', function (Y) {

    var pjax = new Y.Pjax({
      container: '#yui-content',
      linkSelector: '.yui3-pjax',
      contentSelector: '.post'

    });

    pjax.on('navigate', function () {
      console.log('NAVIGATING', this);


    });

    pjax.on('load', function () {
      console.log('LOADED');
      var post = Y.one('.post');


    });
  })





  // YUI().use('node','node-load','event', 'transition',  function (Y) {
    // var container = Y.one('.yui-content');
    // var buttons = Y.all('.proj-thumb');

    
    // buttons.on('click', function (e) {
    //   e.preventDefault();

    //   var url = e.currentTarget.one('a').get('href');

    //   e.currentTarget.transition({
        // duration: '1',
        // easing: 'ease-out',
        // width: {
        //   value: '66.33%',
        //   delay: 0,
        //   duration: 1
        // },
    //     on: {
    //       start: function () {
    //         e.currentTarget.addClass('active');
    //         buttons.filter(':not(.active)').addClass('disabled');
    //       },
    //       end: function  () {
    //         console.log('blah');
    //         loadPg(url);
    //       }
    //     }
    //   });

    // });

    // var loadPg = function (url) {
    //   window.location = url;
    // };


  // });


})();