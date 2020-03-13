class Apeiro{
    coupleStringSlide(selector,textA,textB){
        $(selector).html(`
        <div class="text" id="textA"><h1></h1></div>
        <div class="text" id="textB"><h1></h1></div>`);

        $("#textA h1").html(textA);
        $("#textB h1").html(textB);
    
        TweenMax.to("#textA h1",1,{
            delay: 0.5,
            right: "0",
            ease:Power2.easeOut
        });
        TweenMax.to("#textB h1",1,{
            delay: 1,
            left: "0",
            ease:Power2.easeOut
        });
    }
}
