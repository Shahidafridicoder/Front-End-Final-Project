var tl = gsap.timeline({
  scrollTrigger: {
      trigger: "#home",
      start: "top top",
      scrub: 1,
      pin: true,
      markers: true
  }
});

tl
.to("#circle", {
  scale: .2,
  ease: Power1
}, 'same')
  .to("#nav", {
    color: "white",
  },'same')
.to("#overlay #purple", {
  top: '50%',
  ease: Power1,
  scale:1
}, 'same')
.to("#overlay #mainh1", {
  top: '150%',
  ease: Power1,
}, 'same')
.to("#overlay #centerimg img", {
  scale: 0,
  ease: Power1
}, 'same')
.to("#overlay #centerimg span", {
  opacity: 0,
  ease: Expo.easeInOut
}, 'same')
.to("#smcircle", {
  scale: .7,
  ease: Power1
}, 'same')
  
.to("#circle #btm img", {
  rotate: "-180deg",
  ease: Power1,
  stagger: .05
}, 'same')

.to("#overlay #purple", {
  opacity:0,  
  ease: Power1
})
.to("#himgcontainer img", {
  scale: 1.25,
  ease:Power1
})
  .to("#smcircle, #circle", {
    scale: 0,
    ease: Power1,
    delay:-.8
  }, 'same same')
  
  .to("#overlay #pink", {
  top:"65%",
  rotate: "0deg",
  ease: Power0,
  delay: -1.7,
  duration:2
}, 'same same')
 
  .to("#overlay #pinkdiv", {
    top:"-60%",
    ease:Power3
  }, 'same same')

  var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#second",
        start: "top top",
        scrub: 1,
        pin: true,
        markers: true
    }
  });
tl2.set("#circle2", { left: "65%", })
.set("#circle1",{left:"45%",})
  .to(".circle", {
    top: "50%",
  ease: Power1,
  stagger:.2,
},"s2")
  .to("#circle1", {
    left: "45%",
    ease: Power1,
    scale:1.3
    
  }, "s2")
  .to("#circle2", {
    left: "60%",
    ease: Power1,
    scale:1.3
  }, "s2")

  .to(".circle", {
    left: "50%",
    ease: Power1,
    
  })
  .to(".circle", {
    scale:.8,
    ease: Power1,
    
  })
  .to(".circle", {
    scale:9,
    ease: Power1,
    
  })
  .to("#second #stop h1", {
    left: "0%",
    ease: Power0,
    duration:2 
    
  },"s3")
 
  .to("#sbtm #firsth1", {
    opacity: -2,
    ease:Power0
  }, "s3")
  .to("#second #stop h1", {
    left: "-20%",
    ease: Power1,
  }, "s3")
  .to("#sbtm #secondh1", {
    opacity: 1,
    ease: Power0,
    delay:.1
  }, "s3")
  .to("#second #stop h1", {
    left: "-130%",
    ease: Power1,
  }, "s3")
  .to("#second #stop #circle1 ", {
    background: `linear-gradient(to right, #D5A7B4, #B4AAD5)`,
    ease: Expo.easeInOut,
  }, "s3")
  
  .to(".longdiv", {
    top: 0,
    ease: Expo.easeInOut,
    stagger:.04
  })
    .to("#insidediv1", {
      left: 0,
      ease:Power1
    })
    .to(".btmdiv", {
      left: "25%",
      ease:Power1
  })