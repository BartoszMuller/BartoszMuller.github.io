$(document).ready(() => {
  var controller = new ScrollMagic.Controller();

   // FADE IN SECTION CONTENT
  $("section > *, footer > *")
    .not(
      ".clientsQuotes-content, .onFirstTimeView, .hero-background, .hero-header, .hero-bottom, .hero-animations, .footer-bottom, .contactPopup-section"
    )
    .each(function () {
      var tweenIn = gsap.from(this, {
        opacity: 0,
        y: 50,
        duration: 0.75,
      });
      var sceneIn = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.85,
      })
        // .addIndicators({
        //   name: this.className,
        //   colorTrigger: "black",
        //   colorStart: "pink",
        //   colorEnd: "red",
        // })
        .setTween(tweenIn)
        .addTo(controller);
    });

    // FADE IN SECTION CONTENT WITHOUT TRANSLATE
  $(".clientsQuotes-content")
  .each(function () {
    var tweenIn = gsap.from(this, {
      opacity: 0,
      duration: 0.75,
    });
    var sceneIn = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.85,
    })
      // .addIndicators({
      //   name: this.className,
      //   colorTrigger: "black",
      //   colorStart: "pink",
      //   colorEnd: "red",
      // })
      .setTween(tweenIn)
      .addTo(controller);
  });

  // FADE OUT SECTION
  $("section")
    .not(".contactPopup-section")
    .each(function () {
      console.log(this, this.nextElementSibling )
      var tweenOut = gsap.to(this, {
        opacity: 0,
        duration: 0.5,
      });

      var triggerPoint = this.nextElementSibling;

    if (!triggerPoint) {
      triggerPoint = $('<div class="scrollMagicHook"></div>').insertAfter(this)[0];
    }

      var sceneOut = new ScrollMagic.Scene({
        triggerElement: triggerPoint,
        triggerHook: 0.16,
      })
        // .addIndicators({
        //   name: this.id,
        //   colorTrigger: "black",
        //   colorStart: "pink",
        //   colorEnd: "red",
        // })
        .setTween(tweenOut)
        .addTo(controller);

      // sceneOut.offset(this.clientHeight);
    });
});
