function scrollSlowMove(selector){
    $(selector).click(function(event){
        event.preventDefault();

        var target = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 1000);
    })
}

scrollSlowMove("a[href*=panel-about]");
scrollSlowMove("a[href*=panel-speakers]");
scrollSlowMove("a[href*=panel-form]");

