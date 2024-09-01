var rot = 0
var diff = 0


document.querySelectorAll(".box").forEach(function(elem){
   
  elem.addEventListener("mousemove", function(dete){
   
    diffx = dete.x - rot,
    rot = dete.x,
        gsap.to(elem.querySelectorAll("img"), {
            display:"block",
            left: dete.x,
            rotate: gsap.utils.clamp(-20, 20, diffx),
        })
    })


    elem.addEventListener("mouseleave", function(){
   
            gsap.to(elem.querySelectorAll("img"), {
                display:"none",
            })
        })
})









