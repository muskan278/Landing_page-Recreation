$(func = function () {
      $(".blink").typed({
         strings: [" Think, We Innovate, We Create!"," Think", " Innovate"," Create!"],
          typeSpeed: 40, // typing speed
          backDelay: 1000,
          callback: function (){
            func();
          }
      });

  });
