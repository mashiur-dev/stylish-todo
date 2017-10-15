//loader
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery("#status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery("#preloader").delay(1000).fadeOut("slow");
})

jQuery(document).ready(function(){




    $('#submit').click( function(event) {
        // stop default form action
        event.preventDefault();

        // store data in var
        var todotitle = $('.todo_title'),
            tododate = $('.todo_date'),
            tododesc = $('.todo_description');
            tododesc = $('.todo_description');

        // form validation
        if(tododesc.val == null){
            tododesc.val = "";
        }
        if( todotitle.val() == "" || tododate.val() == "" ){
            alert("pls fill all data");
            return false;
        }

        // add new todo
        content.prepend('<div class="single_todo"><div class="title"><span>'+ tododate.val() +'</span><h1>'+ todotitle.val() +'</h1></div><p>'+ tododesc.val() +'</p><div class="btns"><button class="btn-done">DONE</button><button class="btn-remove">REMOVE</button></div></div>');

        // remove form input
        $('.form > form')[0].reset();

        // save updated data
        localStorage.setItem("todoData", content.html());
        $(".nodata").html("");

    });


    $(".content").on("click", ".btn-done", function(){
        //e.preventDefault();
        $(this).closest( ".single_todo").addClass("done");
        // remove the btn
        $(this).remove();
        // save updated data
        localStorage.setItem("todoData", content.html());
    });

    $(".content").on("click", ".btn-remove", function(){
        //e.preventDefault();
        $(this).closest( ".single_todo").fadeOut("slow").delay(400);
        $(this).closest( ".single_todo").remove();

        // save updated data
        localStorage.setItem("todoData", content.html());
    });

    $(".add_project > span").click(function(){
        $(".add_form").slideToggle();
        $(".add_project").toggleClass("close");
    });


    // get and show content from localstore to .content
    var content     = $(".content"),
        getContents = localStorage.getItem("todoData");

    if( getContents == null ){
        $(".nodata").html("<h3>No task found...</h3>");
    }else if( getContents.length < 10 ){
        $(".nodata").html("<h3>No task found...</h3>");
    }else{
        $(".nodata").html("");
        content.html( getContents );
    }

});
