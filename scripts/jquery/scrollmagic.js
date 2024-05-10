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

      //   var tweenOut = gsap.to(section, {
      //     opacity: 0,
      //     y: -50,
      //     duration: 0.5,
      //   });

      //   var sceneOut = new ScrollMagic.Scene({
      //     triggerElement: section,
      //     triggerHook: "onLeave",
      //     duration: "100%",
      //   })
      //     .setTween(tweenOut)
      //     .addTo(controller);
      // });
    });
});
//   const ourScene = new ScrollMagic.Scene({
//     triggerElement: "#home-caseStudy",
//     triggerHook: 0.9,
//   })
//     .setClassToggle("#home-caseStudy", "LESSGO")
//     .addIndicators({
//       name: "LESSGO",
//       colorTrigger: "black",
//       colorStart: "pink",
//       colorEnd: "red",
//     })
//     .addTo(controller);
// });

// const sections = [...document.querySelectorAll("section")];

// console.log(sections);
// sections.forEach((currentSection) => {
//   console.log(currentSection.id);
//   const ourScene = new ScrollMagic.Scene({
//     triggerElement: "#" + currentSection.id,
//     triggerHook: 0.9,
//   })
//     .setClassToggle("#" + currentSection.id, "LESSGO")
//     .addIndicators({
//       name: "LESSGO",
//       colorTrigger: "black",
//       colorStart: "pink",
//       colorEnd: "red",
//     })
//     .addTo(controller);
// });

// $("section").each(function () {
//   console.log(this);
//   var ourScene = new ScrollMagic.Scene({
//     triggerElement: this,
//     triggerHook: 0.84,
//   })
//     .setClassToggle(this, "isCurrentSection")
//     .addIndicators({
//       name: "current" + this.id,
//       colorTrigger: "black",
//       colorStart: "pink",
//       colorEnd: "red",
//     })
//     .addTo(controller);
// });
