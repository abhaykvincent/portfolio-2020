$(document).foundation();
$(document).ready(function () {

    //=========
    //splash
    //==========

    //onLoad
    TweenMax.from(".circle",0.2,{
        scale: 0,
        delay: 0.5,
        ease: 'ease-in'
    })
    //onclicks
    $("button.hamburger").click(function (e) { 
        e.preventDefault();
        if($(this).data("is-active")!=true)
        {
            $(this).addClass("is-active");
            $(this).data("is-active",!$(this).data("is-active"));
        }
        else
        {
            $(this).removeClass("is-active");
            $(this).data("is-active",!$(this).data("is-active"));
        }
        console.log($(this).data("is-active"))
    });

    //NamE
    
    TweenMax.to(".abhayVincent",1,{
        x: 3,
    });
    TweenMax.from(".bar",0.5,{
        height: 0,
        delay:1
    });
    TweenMax.to(".bar",1,{
        width: 100,
        delay:1
    });
    TweenMax.to(".portfolio",0.1,{
        x: 80,
        delay:1.9
    });
    TweenMax.to(".bar",0.5,{
        x:80,
        width: 0,
        delay:2
    });
    var tl = gsap.timeline();
    tl.from(".splashSpot",{
        opacity: 0,
        duration: 0.25,delay:2.5
    }).to(".fullstack",{
        x:87.2,
        duration: 0.25,delay:0.25
    }).to(".fullstack",{
        x:70,
        duration: 0.125,delay:0.5
    }).to(".fullstack",{
        x:42,
        duration: 0.175,delay:0.5
    }).
    
    from(".splashArrow",{
        height: 0,
        duration: 1
    }).

    from(".rect-1",{
        scale: 0,
        fill: "rgba(0,0,0,0)",
        duration: 0.4,delay:0.05
    }).from(".rect-2",{
        scale: 0,
        fill: "rgba(0,0,0,0)",
        duration: 0.35,delay:0.05
    }).from(".rect-3",{
        scale: 0,
        fill: "rgba(0,0,0,0)",
        duration: 0.3,delay:0.05
    }).from(".rect-4",{
        scale: 0,
        fill: "rgba(0,0,0,0)",
        duration: 0.25,delay:0.05
    }).from(".rect-5",{
        scale: 0,
        fill: "rgba(0,0,0,0)",
        duration: 0.2,delay:0.05
    })
    
});
