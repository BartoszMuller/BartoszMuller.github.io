$(document).ready(() => {
  var controller = new ScrollMagic.Controller();

  $("section > *")
    .not(
      ".hero-background, .background-lines, .clientsQuotes-content, .hero-header, .hero-bottom, .hero-animations"
    )
    .each(function () {
      var tweenIn = gsap.from(this, {
        opacity: 0,
        y: 50,
        duration: 0.75,
      });
      var sceneIn = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.8,
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

  // $("section")
  // .each(function () {
  // var tweenIn = gsap.from(this, {
  //   opacity: 0,
  //   y: 50,
  //   duration: 0.75,
  // });
  // var sceneIn = new ScrollMagic.Scene({
  //   triggerElement: this,
  //   triggerHook: 0.8,
  // })
  // .addIndicators({
  //   name: this.className,
  //   colorTrigger: "black",
  //   colorStart: "pink",
  //   colorEnd: "red",
  // // })
  // .setTween(tweenIn)
  // .addTo(controller);

  //     var tweenOut = gsap.to(this, {
  //       opacity: 0,
  //       y: -50,
  //       duration: 0.5,
  //     });

  //     console.log(this.clientHeight);

  //     var sceneOut = new ScrollMagic.Scene({
  //       triggerElement: this,
  //       triggerHook: 0.9,
  //       duration: this.clientHeight
  //     })
  //     .addIndicators({
  //         name: this.className,
  //         colorTrigger: "black",
  //         colorStart: "pink",
  //         colorEnd: "red",
  //       })
  //       .setTween(tweenOut)
  //       .addTo(controller);
  // });
  
});
