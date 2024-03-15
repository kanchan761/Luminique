gsap.from(".gol1", {
  transform: "translate(-130%,50%)",
  repeat: -1,
  yoyo: 1,
  duration: 2.7
})

gsap.from(".gol1-2", {
  transform: "translate(-80%,50%)",
  repeat: -1,
  yoyo: 1,
  duration: 2.7
})

var tl2 = gsap.timeline({
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2 .left2",
    start: "top 60%",
    end: "top 47%",
    // markers:true,
    // scrub:1,
  }
})

tl2.from(".left2", {
  x: -500,
}, "hey")

tl2.from(".right2", {
  x: 500,
}, "hey")

tl2.to(".page3", {
  x: -1520,
  opacity: 1,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2 .left2",
    start: "top 27%",
    end: "top 46%",
    // markers:true,

  }

})

gsap.from(".right4 .i", {
  y: 160,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".right4 .i",
    scroller: ".main",
    // markers:true,
    start: "top 90%",
    end: "top 50%",
    scrub: 5
  }
})

var tl6 = gsap.timeline(
  {
    scrollTrigger: {
      trigger: ".page6 ",
      scroller: ".main",
      // markers:true,
      start: "top 70%",
      end: "top 60%",
      scrub: 1
    }
  })
tl6.from(".page6", {
  opacity: 0,

})

gsap.to(".page7 .v7", {
  width: "100%",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".v7",
    start: "top 40%",
    end: "top 10%",
    scrub: 1,
    // markers:true,
  }
})

gsap.from(".li", {
  opacity: 0,
  // height:0,
  duration: 4,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page5",
    start: "top 50%",
    end: "top 20%",
    scrub: 1,
    // markers:true,
  }
})

gsap.from(".m", {
  y: -100,
  duration: 7,
  color: "pink",
  stagger: 1,
  scrollTrigger: {
    trigger: ".last h1 ",
    scroller: ".main",
    // markers:true,
    start: "top 65%",
    end: "top 48%",
    scrub: 1
  }
})

var button = document.querySelector(".page2 button")

var a = 0
button.addEventListener("click", () => {
  if (a == 0) {
    gsap.to(".botto2", {
      height: "300px"
    })
    gsap.to(".golu", {
      opacity: 1,

    })
    gsap.from(".golu", {
      scale: 1.21,
      repeat: -1,
      yoyo: true,
    })
    a = 1

  }
  else {
    gsap.to(".botto2", {
      height: "0px"
    })
    gsap.to(".golu", {
      opacity: 0,

    })
    a = 0
  }
})

document.addEventListener("mousemove", function (dets) {
  gsap.to(".cursor", {
    top: dets.y,
    left: dets.x

  })

})

var btn = document.querySelector(".page4 button")
btn.addEventListener("mouseenter", function () {
  gsap.to(".cursor", {
    scale: 1.7,
    color: "red",
    scrub: 1,
  })
})
btn.addEventListener("mouseleave", function () {
  gsap.to(".cursor", {
    scale: 1,
    color: "purple",

  })
})

var pimg = document.querySelector(".golii")
pimg.addEventListener("mouseenter", function () {
  gsap.to(".cursor", {
    scale: 6,
    filter: " blur(15px)",
    boxShadow: "15px 15px 50px rgb(171, 68, 180),-15px -15px 50px rgb(217, 56, 206)"
  })
})

var pimg = document.querySelector(".golii")
pimg.addEventListener("mouseleave", function () {
  gsap.to(".cursor", {
    scale: 1,
    filter: " blur(0px)",
    boxShadow: "0"
  })
})

var pimg = document.querySelector(".golii2")
pimg.addEventListener("mouseenter", function () {
  gsap.to(".cursor", {
    scale: 6,
    filter: " blur(15px)",
    boxShadow: "15px 15px 50px rgb(171, 68, 180),-15px -15px 50px rgb(217, 56, 206)"
  })
})

var pimg = document.querySelector(".golii2")
pimg.addEventListener("mouseleave", function () {
  gsap.to(".cursor", {
    scale: 1,
    filter: " blur(0px)",
    boxShadow: "0"
  })
})
var pimg = document.querySelector(".golii3")
pimg.addEventListener("mouseenter", function () {
  gsap.to(".cursor", {
    scale: 6,
    filter: " blur(15px)",
    boxShadow: "15px 15px 50px rgb(171, 68, 180),-15px -15px 50px rgb(217, 56, 206)"
  })
})

var pimg = document.querySelector(".golii3")
pimg.addEventListener("mouseleave", function () {
  gsap.to(".cursor", {
    scale: 1,
    filter: " blur(0px)",
    boxShadow: "0"
  })
})