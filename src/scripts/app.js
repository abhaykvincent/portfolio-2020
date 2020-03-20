let projects=[{
    name: "Easy Groceries",
    desc:"Easy Grocries is an online shopping website made  using HTML, CSS, JavaScript and PHP.",
    desc_adv:". It web project allow customer to  purchace groceries and check out using a login system. Database is connected through phpMyAdmin mySQL  through Ajax Connection",
    imageUrl:"easyGroceries.png",
    techs:["HTML","CSS","JS","php"],
    techIcons:[ `<i class="fab fa-html5"></i>`,
                `<i class="fab fa-css3-alt"></i>`,
                `<i class="fab fa-js"></i>`,
                `<i class="fab fa-php"></i>`]
},{
    name: "Mad Movies",
    desc:"Mad  Movies is an online Movie database made  using HTML, CSS, JavaScript and PHP.",
    desc_adv:". It web project allow customer to  purchace groceries and check out using a login system. Database is connected through phpMyAdmin mySQL  through Ajax Connection",
    imageUrl:"mad_movie.png",
    techs:["HTML","CSS","JS","php"],
    techIcons:[ `<i class="fab fa-html5"></i>`,
                `<i class="fab fa-css3-alt"></i>`,
                `<i class="fab fa-js"></i>`,
                `<i class="fab fa-php"></i>`]
},{
    name: "Max Fitness",
    desc:"MaxFitness is an online fitness and shopping website made  using Content Management System - Wordpress",
    desc_adv:". It web project allow customer to  purchace groceries and check out using a login system. Database is connected through phpMyAdmin mySQL  through Ajax Connection",
    imageUrl:"maxfitness.png",
    techs:["HTML","CSS","Wordpress","php"],
    techIcons:[ `<i class="fab fa-html5"></i>`,
                `<i class="fab fa-css3-alt"></i>`,
                `<i class="fab fa-wordpress"></i>`,
                `<i class="fab fa-php"></i>`]
},{
    name: "Lakridge Health Clinical Trial",
    desc:"An Javascript  application for Cancer Clinical Trial for LakeRidge Hospital",
    desc_adv:". It web project allow customer to  purchace groceries and check out using a login system. Database is connected through phpMyAdmin mySQL  through Ajax Connection",
    imageUrl:"lakeridge.png",
    techs:["HTML","CSS","JS",],
    techIcons:[ `<i class="fab fa-html5"></i>`,
                `<i class="fab fa-css3-alt"></i>`,
                `<i class="fab fa-js"></i>`,
                `<i class="fab fa-php"></i>`]
},{
    name: "Rock Paper Scissors",
    desc:"A Javascript single-player Game",
    desc_adv:"It web project allow customer to  purchace groceries and check out using a login system. Database is connected through phpMyAdmin mySQL  through Ajax Connection",
    imageUrl:"rockPaperScissors.png",
    techs:["HTML","CSS","JS"],
    techIcons:[ `<i class="fab fa-html5"></i>`,
                `<i class="fab fa-css3-alt"></i>`,
                `<i class="fab fa-js"></i>`]
},{
    name: "Family of Eatries",
    desc:"A javascript mobile application for 3 different restraunts ",
    desc_adv:". It web project allow customer to  purchace groceries and check out using a login system. Database is connected through phpMyAdmin mySQL  through Ajax Connection",
    imageUrl:"RestrauntApp.png",
    techs:["HTML","CSS","JS","php"],
    techIcons:[ `<i class="fab fa-html5"></i>`,
                `<i class="fab fa-css3-alt"></i>`,
                `<i class="fab fa-js"></i>`]
},{
    name: "Global Warming Infographics",
    desc:"Easy Grocries is an online shopping website made  using HTML, CSS, JavaScript and PHP.",
    desc_adv:". It web project allow customer to  purchace groceries and check out using a login system. Database is connected through phpMyAdmin mySQL  through Ajax Connection",
    imageUrl:"infographics.png",
    techs:["HTML","CSS","JS","php"],
    techIcons:[ `<i class="fab fa-html5"></i>`,
                `<i class="fab fa-css3-alt"></i>`,
                `<i class="fab fa-js"></i>`,]
},{
    name: "Data  Representation",
    desc:"Easy Grocries is an online shopping website made  using HTML, CSS, JavaScript and PHP.",
    desc_adv:". It web project allow customer to  purchace groceries and check out using a login system. Database is connected through phpMyAdmin mySQL  through Ajax Connection",
    imageUrl:"dataRepresentation.png",
    techs:["HTML","CSS","JS","php"],
    techIcons:[ `<i class="fab fa-html5"></i>`,
                `<i class="fab fa-css3-alt"></i>`,
                `<i class="fab fa-js"></i>`]
}];
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
    gsap.to("aside.right-menu",{
        x: 300,
        duration: 0.25
    });
    $("button.hamburger").click(function (e) { 
        e.preventDefault();
        if($(this).data("is-active")!=true)
        {
            $(this).addClass("is-active");
            $(this).data("is-active",!$(this).data("is-active"));

            let hamTl = gsap.timeline();
            hamTl.to(".splashPortfolioName",{
                x: -200,
                duration: 0.25
            });
            
            hamTl.to("aside.right-menu",{
                x: 0,
                duration: 0.25
            });
            $(".roles").css("transform", "translateX(-200px)");
            $(".hamburger").css("z-index", "305");
            $("body").css("position", "fixed");
            $(".circles").css("margin-top", "150vh");
        }
        else
        {
            $(this).removeClass("is-active");
            $(this).data("is-active",!$(this).data("is-active"));

            let hamTl = gsap.timeline();
            hamTl.to(".splashPortfolioName",{
                x: 0,
                duration: 0.25
            });
            hamTl.to("aside.right-menu",{
                x: 300,
                duration: 0.25
            });
            $(".roles").css("transform", "translateX(0px)");
            $("body").css("position", "relative");
            $(".hamburger").css("z-index", "305");
            $(".circles").css("margin-top", "0vh");
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
    $(".view-projects").click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("div.projects-list").offset().top
        }, 500);
    });

    //skills
    let  web_skills=[{
        name: "Web Designing",
        rating: 7
    },{
        name: "Front-End",
        rating: 9
    },{
        name: "Back-end",
        rating: 7
    },{
        name: "Illustration",
        rating: 7
    },{
        name: "Programming",
        rating: 9
    },{
        name: "FTP and Hosting",
        rating: 8
    },];
    let  soft_skills=[{
        name: "Photoshop",
        rating: 9
    },{
        name: "Illustrator",
        rating: 8
    },{
        name: "Premier Pro",
        rating: 6
    },{
        name: "Light Room",
        rating: 7
    },{
        name: "InDesign",
        rating: 7
    },{
        name: "After Effects",
        rating: 6
    },];
    web_skills.forEach((element, i) => {
        $(".skill-pie:nth-of-type("+(i+1)+") .skill-level").html(element.rating);
        $(".skill-pie:nth-of-type("+(i+1)+") .skill-label").html(element.name);
        $(".skill-pie:nth-of-type("+(i+1)+") title").html(element.name);
        
        $(".skill-pie:nth-of-type("+(i+1)+") #lvl"+(element.rating+1)).css('fill', "rgba(0, 0, 0, 0)");
        $(".skill-pie:nth-of-type("+(i+1)+") #lvl"+(element.rating+2)).css('fill', "rgba(0, 0, 0, 0)");
        $(".skill-pie:nth-of-type("+(i+1)+") #lvl"+(element.rating+3)).css('fill', "rgba(0, 0, 0, 0)");
        $(".skill-pie:nth-of-type("+(i+1)+") #lvl"+(element.rating+4)).css('fill', "rgba(0, 0, 0, 0)");
        $(".skill-pie:nth-of-type("+(i+1)+") #lvl"+(element.rating+5)).css('fill', "rgba(0, 0, 0, 0)");
        $(".skill-pie:nth-of-type("+(i+1)+") #lvl"+(element.rating+6)).css('fill', "rgba(0, 0, 0, 0)");
        $(".skill-pie:nth-of-type("+(i+1)+") #lvl"+(element.rating+7)).css('fill', "rgba(0, 0, 0, 0)");
            
        var skills_tl = gsap.timeline();
        skills_tl.to(".skill-pie #lvl1",{
            opacity: 1,
            duration: 0.1
        }).to(".skill-pie #lvl2",{
            opacity: 1,
            duration: 0.1
        }).to(".skill-pie #lvl3",{
            opacity: 1,
            duration: 0.1
        }).to(".skill-pie #lvl4",{
            opacity: 1,
            duration: 0.1
        }).to(".skill-pie #lvl5",{
            opacity: 1,
            duration: 0.1
        }).to(".skill-pie #lvl6",{
            opacity: 1,
            duration: 0.1
        }).to(".skill-pie #lvl7",{
            opacity: 1,
            duration: 0.1
        }).to(".skill-pie #lvl8",{
            opacity: 1,
            duration: 0.1
        }).to(".skill-pie #lvl9",{
            opacity: 1,
            duration: 0.1
        }).to(".skill-pie #lvl10",{
            opacity: 1,
            duration: 0.1
        }).to(".skill-level",{
            opacity: 1,
            scale: 1,
            duration: 0.1
        }).to(".skill-label",{
            opacity: 1,
            scale: 1,
            duration: 0.1
        })
    });
    let soft_content="";
    soft_skills.forEach((skill,i) => {
        soft_content+=`<div class="skill-bars large-2 medium-3 small-12">
        <p class="software-name">${skill.name}</p>
        <div class="skill-bar">
            <div class="skill-bar-value" style="width: ${skill.rating*10}%"></div>
        </div>
    </div>`;
    });
    $(".software-skills").append(soft_content);

    function display_projectAdv(id){
        $(".projectAdv-image").css("background-image", `url('../src/img/projects/${projects[id].imageUrl}')`);
        $(".project-dipslay").show();
        $(".projectAdv-Name").html(`${projects[id].name}`);
        $(".projectAdv-desc").html(`${projects[id].desc} <br> ${projects[id].desc_adv}`);
        let icon_content='Technologies used : ';
        projects[id].techIcons.forEach(tech => {
            icon_content+=tech;
        });
        $(".projectAdv-techs").html(icon_content);
        $('html, body').animate({
            scrollTop: $("div.project-dipslay").offset().top
        }, 500);
        let tlProductDisplay = gsap.timeline();
        tlProductDisplay.from(".projectAdv-image",{
            scale: 0,
            y: 300,
            opacity: 0,
            duration: 0.5,delay:0
        })
        .from(".projectAdv-Name",{
            y: 50,
            opacity: 0,
            duration: 0.25,delay:0.
        })
        .from(".projectAdv-desc",{
            y: 50,
            opacity: 0,
            duration: 0.25,delay:0
        })
        .from(".projectAdv-techs",{
            y: 50,
            opacity: 0,
            duration: 0.25,delay:0
        })
        .from(".projectAdv-links",{
            y: 50,
            opacity: 0,
            duration: 0.25,delay:0
        });
    }
    $(".project-dipslay").hide();
    let content="";
    projects.forEach((project,i) => {
        content+=`
        <div class=" large-4 medium-6 small-12"">
                    <div class="project project-${i}"  data-project-id="${i}" style="
                    background-image:url('../src/img/projects/${project.imageUrl}');
                    background-size: 100%">
                        <div class="hover-info">
                        <p class="hover-tech-icons">`;
                        project.techIcons.forEach(techIcon => {
                            content+=` ${techIcon} `
                        });
                        content+=`</p>
                        <div class="info-menus grid-x">
                        <p class="project-view large-12 medium-12 small-12" data-project-id="${i}">View Project <i class="fas fa-angle-double-right"></i></p>
                        <p class="project-site large-6 medium-6 small-12">Visit Website <i class="far fa-caret-square-right"></i></p>
                        <p class="project-git large-6 medium-6 small-12">View  Project on <i class="fab fa-github"></i></p>
                        </div>
                    </div>
                    </div>
                    <p class="project-desc">${project.name}</p>
                    <p class="project-details">${project.desc}</p>
                </div>`
    });
    $(".projects-list").html(content);

    $('.project-view').each(function () {
        var $this = $(this);
        $this.on("click", function () {
            display_projectAdv($(this).data('project-id'));
        });
    });
});
