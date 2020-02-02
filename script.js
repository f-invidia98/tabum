$(function() {
  $("#nav-placeholder").load("nav.html");
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
  .staggerTo(objecto[0], 100, {
    scale: 2
  }, 2, "+=2")
  .staggerTo(objecto[0], 100, {
    scale: 2
  }, 2, "+=0")
  .staggerTo(nome_pers[0], 2, {
    left: "0%"
  }, 2, "+=2")
  .staggerTo(objecto[1], 2, {
    scale: 2
  }, 2, "+=0")
  .staggerTo(objecto[0], 2, {
    scale: 1
  }, 2, "+=2")
  .staggerTo(objecto[1], 2, {
    scale: 0
  }, 2, "+=0")
  .staggerTo(objecto[0], 2, {
    left: "0%"
  }, 2, "+=2")
  .staggerTo(objecto[0], 2, {
    left: "-7%"
  }, 2, "+=2")
  .staggerTo(nome_pers[0], 4, {
    left: "-100vw"
  }, 2, "+=0");




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
  }, 2, "+=2")
  .staggerTo(objecto[3], 2, {
    left: "35%",
    scale: 0
  }, 2, "+=0")
  .staggerTo(objecto[2], 2, {
    scale: 2
  }, 2, "+=2")
  .staggerTo(objecto[2], 100, {
    scale: 2
  }, 2, "+=0")
  .staggerTo(nome_pers[1], 2, {
    left: "0%"
  }, 2, "+=0")
  .staggerTo(objecto[3], 2, {
    scale: 2
  }, 2, "+=0")
  .staggerTo(objecto[2], 2, {
    scale: 1
  }, 2, "+=2")
  .staggerTo(objecto[3], 2, {
    scale: 0
  }, 2, "+=0")
  .staggerTo(objecto[2], 2, {
    left: "5%"
  }, 2, "+=2")
  .staggerTo(objecto[2], 2, {
    left: "3%"
  }, 2, "+=2")
  .staggerTo(nome_pers[1], 4, {
    left: "-100vw"
  }, 2, "+=0");

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
    scale: 1.8
  }, 2, 6)
  .staggerTo(nome_pers[2], 2, {
    left: "0%"
  }, 2, 6)
  .staggerTo(objecto[5], 2, {
    scale: 2
  }, 2, 6)
  .staggerTo(objecto[5], 100, {
    scale: 2
  }, 2, "+=0");



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
    duration: offset/2
  })
  .setTween(tween1)
  .addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".trigger",
    duration: offset/2,
    offset: offset/2
  })
  .setTween(tween2)
  .addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement: ".trigger",
    duration: offset/2,
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
  $(".insta").hover(
    function() {
      $(this).attr("src", "immagini/contatti/insta.gif");
    },
    function() {
      $(this).attr("src", "immagini/contatti/insta.png");
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
								triggerHook: 0.4,
                reverse: false
							})
							.setClassToggle(revealElements[i], "visible") // add class toggle
							.addTo(controller);
}



  $("#scheda_libro").css("display","none");
  $(".hide").css("display","none");

  $(".copertine_container > .copertina").click(function(){
    $("#scheda_libro").css("display","block");
    $(".hide").css("display","flex");

  });

$(".copertine_container > .copertina:eq(0)").click(function(){
  $("#scheda_libro > div").css("display","none");
  $("#scheda_libro > div:eq(0)").css("display","block");
  $(".copertine_container > .copertina").removeClass("bordoSelect");
  $(this).addClass("bordoSelect");

})

$(".copertine_container > .copertina:eq(1)").click(function(){
  $("#scheda_libro > div").css("display","none");
  $(".copertine_container > .copertina").removeClass("bordoSelect");
  $(this).addClass("bordoSelect");
  $("#scheda_libro > div:eq(1)").css("display","block");

})

$(".copertine_container > .copertina:eq(2)").click(function(){
  $("#scheda_libro > div").css("display","none");
  $("#scheda_libro > div:eq(2)").css("display","block");
  $(".copertine_container > .copertina").removeClass("bordoSelect");
  $(this).addClass("bordoSelect");

})

$(".copertine_container > .copertina:eq(3)").click(function(){
  $("#scheda_libro > div").css("display","none");
  $("#scheda_libro > div:eq(3)").css("display","block");
  $(".copertine_container > .copertina").removeClass("bordoSelect");
  $(this).addClass("bordoSelect");

})










$(".schedaLibro").css("display","none");
$(".hide").css("display","none");

$("#mappa >a> image").click(function(){
  $("#scheda_libro").css("display","block");
  $(".hide").css("display","flex");

});

$("#mappa >a> image:eq(0)").click(function(){
  $(".schedaLibro").css("display","none");
  $(".schedaLibro:eq(0)").css("display","block");

})
$("#mappa >a> image:eq(1)").click(function(){
  $(".schedaLibro").css("display","none");
  $(".schedaLibro:eq(1)").css("display","block");

})
$("#mappa >a> image:eq(2)").click(function(){
  $(".schedaLibro").css("display","none");
  $(".schedaLibro:eq(2)").css("display","block");

})
$("#mappa >a> image:eq(3)").click(function(){
  $(".schedaLibro").css("display","none");
  $(".schedaLibro:eq(3)").css("display","block");

})
$("#mappa >a> image:eq(4)").click(function(){
  $(".schedaLibro").css("display","none");
  $(".schedaLibro:eq(4)").css("display","block");

})
$("#mappa >a> image:eq(5)").click(function(){
  $(".schedaLibro").css("display","none");
  $(".schedaLibro:eq(5)").css("display","block");

})
$("#mappa >a> image:eq(6)").click(function(){
  $(".schedaLibro").css("display","none");
  $(".schedaLibro:eq(6)").css("display","block");

})


// $(".copertina  > img").click(function(){
// $(this).css("transform", "rotate(10deg)");
// $(this).css("transition", "0.7s");
// })
