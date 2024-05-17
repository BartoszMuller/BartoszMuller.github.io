$(document).ready(() => {
  var controller = new ScrollMagic.Controller();

  $("section > *, footer > *")
    .not(".hero-background, .hero-header, .hero-bottom, .hero-animations")
    .each(function () {
      var tweenIn = gsap.from(this, {
        opacity: 0,
        y: 50,
        duration: 0.75,
      });
      var sceneIn = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.85
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

  $("section").each(function () {

    var tweenOut = gsap.to(this, {
      opacity: 0,
      duration: 0.5,
    });

    
    var sceneOut = new ScrollMagic.Scene({
      triggerElement: this.nextElementSibling,
      triggerHook:0.16
    })
      // .addIndicators({
      //   name: this.id,
      //   colorTrigger: "black",
      //   colorStart: "pink",
      //   colorEnd: "red",
      // })
      .setTween(tweenOut)
      .addTo(controller)

      // sceneOut.offset(this.clientHeight);
  });
});
