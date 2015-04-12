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

});
