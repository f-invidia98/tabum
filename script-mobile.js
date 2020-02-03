$(function() {
  $("#nav-placeholder").load("nav-mobile.html");
});

var controller = new ScrollMagic.Controller();

var objecto = $(".scroll-personaggi > div")
var nome_pers = $(".nome-personaggi > div")



var tween1 = new TimelineMax()
  // .staggerTo(objecto[1], 0, {
  //   scale: 0
  // })
  // .staggerTo(nome_pers[0], 0, {
  //   left: "100%"
  // })
  // .staggerTo(objecto[0], 0, {
  //   left: "50%"
  // }, 0, 0)
  .staggerTo(objecto[0], 0, {
    left: "14%",
    scale: 1.4
  }, 0, 0)
  .staggerTo(objecto[1], 0, {
    left: "35%",
    scale: 2
  }, 0, 0)
  .staggerTo(objecto[0], 2, {
    scale: 1.4
  }, 2, 6)
  .staggerTo(nome_pers[0], 2, {
    left: "0%"
  }, 2, 6)
  .staggerTo(objecto[1], 2, {
    scale: 2
  }, 2, 6)
  .staggerTo(objecto[0], 2, {
    scale: 1
  }, 2, 8)
  .staggerTo(objecto[1], 2, {
    scale: 0
  }, 2, 8)
  .staggerTo(objecto[0], 2, {
    left: "0%"
  }, 2, 10)
  .staggerTo(objecto[0], 2, {
    left: "-7%"
  }, 2, 12)
  .staggerTo(nome_pers[0], 4, {
    left: "-100vw"
  }, 2, 12);




var tween2 = new TimelineMax()
  .staggerTo(objecto[3], 0, {
    scale: 0
  })
  .staggerTo(nome_pers[1], 0, {
    left: "100%"
  })
  .staggerTo(objecto[2], 0, {
    left: "60%"
  }, 0, 0)
  .staggerTo(objecto[2], 2, {
    left: "14%",
    scale: 1
  }, 2, 4)
  .staggerTo(objecto[3], 2, {
    left: "35%",
    scale: 0
  }, 2, 4)
  .staggerTo(objecto[2], 2, {
    scale: 1.4
  }, 2, 6)
  .staggerTo(nome_pers[1], 2, {
    left: "0%"
  }, 2, 6)
  .staggerTo(objecto[3], 2, {
    scale: 2
  }, 2, 6)
  .staggerTo(objecto[2], 2, {
    scale: 1
  }, 2, 8)
  .staggerTo(objecto[3], 2, {
    scale: 0
  }, 2, 8)
  .staggerTo(objecto[2], 2, {
    left: "5%"
  }, 2, 10)
  .staggerTo(objecto[2], 2, {
    left: "3%"
  }, 2, 12)
  .staggerTo(nome_pers[1], 4, {
    left: "-100vw"
  }, 2, 12);

var tween3 = new TimelineMax()
  .staggerTo(objecto[5], 0, {
    scale: 0
  })
  .staggerTo(nome_pers[2], 0, {
    left: "100%"
  })
  .staggerTo(objecto[4], 0, {
    left: "70%"
  }, 0, 0)
  .staggerTo(objecto[4], 2, {
    left: "14%",
    scale: 1
  }, 2, 4)
  .staggerTo(objecto[5], 2, {
    left: "35%",
    scale: 0
  }, 2, 4)
  .staggerTo(objecto[4], 6, {
    scale: 1.2
  }, 2, 6)
  .staggerTo(nome_pers[2], 2, {
    left: "0%"
  }, 2, 6)
  .staggerTo(objecto[5], 2, {
    scale: 2
  }, 2, 6);



var logo = $(".box-logo > img")
var testo = $(".box-logo > div")



var tween4 = new TimelineMax()
  .staggerTo(testo[0], 0, {
      scale:0,
      width:0
  })
  .staggerTo(testo[1], 0, {
      scale:0,
      width:0
  })
  .staggerTo(logo[0], 2, {
      css: { "-webkit-transform" : "translate(0%, 0px)" }
  })
  .staggerTo(logo[1], 2, {
      css: { "-webkit-transform" : "translate(0%, 0px)" }
  })
  .staggerTo(logo[0], 2, {
      css: { "-webkit-transform" : "translate(-35%, 0px)" }
  })
  .staggerTo(logo[1], 2, {
      css: { "-webkit-transform" : "translate(35%, 0px)" }
  },0,4)
  .staggerTo(testo[0], 0.5, {
      width:"auto"
  })
  .staggerTo(testo[0], 2, {
      scale:2
  })
  .staggerTo(testo[0], 2, {
      width:0,
      scale:0
  })
  .staggerTo(logo[1], 2, {
      css: { "-webkit-transform" : "translate(-35%, 0px)" }
  })
  .staggerTo(testo[1], 2, {
    width:"auto",
    scale:2
  })
  .staggerTo(testo[1], 2, {
      width:0,
      scale:0
  })
  .staggerTo(logo[1], 2, {
      css: { "-webkit-transform" : "translate(0%, 0px)" }
  })
  .staggerTo(logo[0], 2, {
      css: { "-webkit-transform" : "translate(0%, 0px)" }
  });
  // .staggerTo(logo[0], 2, {
  //   left: "100%"
  // }, 2,2);

var offset = window.innerHeight;


  var scene1 = new ScrollMagic.Scene({
      triggerElement: ".trigger",
      duration: offset
    })
    .setTween(tween1)
    .addTo(controller);

  var scene2 = new ScrollMagic.Scene({
      triggerElement: ".trigger",
      duration: offset,
      offset: offset/2
    })
    .setTween(tween2)
    .addTo(controller);

  var scene3 = new ScrollMagic.Scene({
      triggerElement: ".trigger",
      duration: offset,
      offset: offset
    })
    .setTween(tween3)
    .addTo(controller);

var scene4 = new ScrollMagic.Scene({
    triggerElement: ".trigger2",
    duration: "100%"
    // offset: "100%"
  })
  .setTween(tween4)
  .addTo(controller);

  $(".facebook").click(
    function(){
      window.location = "https://www.facebook.com/tabumeditore-112538223638640/?__tn__=%2Cd%2CP-R&eid=ARB6p89GdXZP7grO5fU2KVXHTjAX3jCcMX0wMSnSv-6dVuZ5d2TUPYOMPKEKHSRzsxynsNc99DJ7Rm3r"
    }
  )

  $(".insta").click(
    function(){
      window.location = "https://www.instagram.com/tabum.editore/"
    }
  )

  $(".mail").click(
    function(){
      window.location = "mailto:tabum.editore@gmail.com"
    }
  )


$(function() {
  $(".facebook").hover(
    function() {
      $(this).attr("src", "immagini/contatti/facebook.gif");
    },
    function() {
      $(this).attr("src", "immagini/contatti/facebook.png");
    }
  );
  $(".twitter").hover(
    function() {
      $(this).attr("src", "immagini/contatti/twitter.gif");
    },
    function() {
      $(this).attr("src", "immagini/contatti/twitter.png");
    }
  );
  $(".mail").hover(
    function() {
      $(this).attr("src", "immagini/contatti/mail.gif");
    },
    function() {
      $(this).attr("src", "immagini/contatti/mail.png");
    }
  );
  $(".youtube").hover(
    function() {
      $(this).attr("src", "immagini/contatti/youtube.gif");
    },
    function() {
      $(this).attr("src", "immagini/contatti/youtube.png");
    }
  );
});


var clicks = 0;

$('.thome').click(function() {
  if (clicks == 0) {
    $(".menu").css("right", "0");
    clicks = 1;
  } else {
    $(".menu").css("right", "-35vw");
    clicks = 0;
  }
});

// $('svg > image').hover(function(){
//   $(this).attr("scale","2")
// })




var revealElements = $(".reveal");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: 50,												 // start a little later
								triggerHook: 0.9,
                reverse: false
							})
							.setClassToggle(revealElements[i], "visible") // add class toggle
							.addTo(controller);
}



  $("#scheda_libro").css("display","none");
  $(".hide").css("display","none");

  $(".copertine_container > .testi > .copertina").click(function(){
    $("#scheda_libro").css("display","block");
    $(".hide").css("display","flex");
    $(".catalogo_schermata").css("overflow","inherit");
    $(".sfondo").css("height","auto");
    $(".prova-cont:eq(1)").css("display","none");
    $(".prova-cont:eq(0)").css("display","block");

  });

$(".copertine_container > .testi > .copertina:eq(0)").click(function(){
  $("#scheda_libro > div").css("display","none");
  $("#scheda_libro > div:eq(0)").css("display","block");

})

$(".copertine_container > .testi > .copertina:eq(1)").click(function(){
  $("#scheda_libro > div").css("display","none");
  $("#scheda_libro > div:eq(1)").css("display","block");

})

$(".copertine_container > .testi > .copertina:eq(2)").click(function(){
  $("#scheda_libro > div").css("display","none");
  $("#scheda_libro > div:eq(2)").css("display","block");

})

$(".copertine_container > .testi > .copertina:eq(3)").click(function(){
  $("#scheda_libro > div").css("display","none");
  $("#scheda_libro > div:eq(3)").css("display","block");

})









$(".tabu_box_2 > div").css("display","none");
$(".tabu_box_2> div:eq(0)").css("display","block");
$(".hide").css("display","none");

// $(".tabu_box_1 > img").click(function(){
//   $("#scheda_libro").css("display","block");
//   $(".hide").css("display","flex");
//
// });

$(".tabu_box_1 > img").click(function(){
  window.scrollTo(0,0);

})

$(".tabu_box_1 > img:eq(0)").click(function(){
  $(".tabu_box_2 > div").css("display","none");
  $(".tabu_box_2> div:eq(0)").css("display","block");

})
$(".tabu_box_1 > img:eq(1)").click(function(){
  $(".tabu_box_2 > div").css("display","none");
  $(".tabu_box_2> div:eq(1)").css("display","block");

})
$(".tabu_box_1 > img:eq(2)").click(function(){
  $(".tabu_box_2 > div").css("display","none");
  $(".tabu_box_2> div:eq(2)").css("display","block");

})
$(".tabu_box_1 > img:eq(3)").click(function(){
  $(".tabu_box_2 > div").css("display","none");
  $(".tabu_box_2> div:eq(3)").css("display","block");

})
$(".tabu_box_1 > img:eq(4)").click(function(){
  $(".tabu_box_2 > div").css("display","none");
  $(".tabu_box_2> div:eq(4)").css("display","block");

})
$(".tabu_box_1 > img:eq(5)").click(function(){
  $(".tabu_box_2 > div").css("display","none");
  $(".tabu_box_2> div:eq(5)").css("display","block");

})
$(".tabu_box_1 > img:eq(6)").click(function(){
  $(".tabu_box_2 > div").css("display","none");
  $(".tabu_box_2> div:eq(6)").css("display","block");

})
