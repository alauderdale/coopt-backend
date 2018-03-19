$(document).ready(function(){


	 //fancybox
	$('.fancybox').fancybox();
	
	$('.fb-video').fancybox({
        padding: 0,
        width: "100%",
        height: 870,
        autoSize: false,
        helpers: {
            media: {}
        }
   });

	$('.tooltip-up').tooltip({html:true});


    $('a.units').click(function() {
        $('a.units').removeClass('selected');
        $('a.units .md').removeClass('md-radio-button-on');
        $('a.units').addClass('unselected');
        $(this).addClass('selected');
        $(this).children('.md').addClass('md-radio-button-on');


        return false; 
    });

});
