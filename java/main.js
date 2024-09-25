$(document).ready(function () {
    $(".btn-header").click(function () {
        $(".popup-header").addClass("popup-header-show")
        $(".popup-header-show").animate({
            left: "0%",
        }, 500, "linear");
    })
    $(".popup-header").click(function () {
        $(".popup-header-show").animate({
            left: "-100%",
        }, 500, "linear");
    })
    $(".header-links").click(function (e) {
        e.stopPropagation()
    })


    var typed = new Typed('.text', {
        strings: ["Frontend Developer", "Youtuber", "Web Develober"],
      typeSpeed: 50,
      loop: true,
    });


    let spanscroll = document.querySelector(".skills")

    window.onscroll = function () {  


        console.log(scrollY)

    
        let spanofset = spanscroll.offsetTop
    
        let spanofsetheight = spanscroll.offsetHeight
    
        let inerheight = window.innerHeight
    
        let windowpageofset  = window.pageYOffset
    
        let allskills = document.querySelectorAll(".skill-box .skill-progress span")
    
        if (windowpageofset >=  spanofset + spanofsetheight - inerheight-250) {
    
        $(".skils-item").css("width", "90%")
        $(".skils-item-2").css("width", "60%")
        $(".skils-item-3").css("width", "85%")
        $(".skils-item-4").css("width", "50%")
        $(".skils-item-5").css("width", "75%")

        $(".text-rate").fadeIn()

        $(".path-1").css("stroke-dashoffset", "50")
        $(".percont").css("opacity", "1")
        $(".path-2").css("stroke-dashoffset", "175")
        $(".path-3").css("stroke-dashoffset", "85")
        $(".path-4").css("stroke-dashoffset", "130")


        } else { 
            $(".skils-item").css("width", "0%")
            $(".text-rate").fadeOut()
            $(".path-1").css("stroke-dashoffset", "502")
            $(".percont").css("opacity", "0")
            $(".path-2").css("stroke-dashoffset", "502")
            $(".path-3").css("stroke-dashoffset", "502")
            $(".path-4").css("stroke-dashoffset", "502")
        }
    
    }

})