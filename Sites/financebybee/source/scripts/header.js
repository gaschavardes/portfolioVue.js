$(document).ready(function(){
	function testScroll(ev){
		var viewportHeight = $(window).height();
		
	    if(window.pageYOffset>viewportHeight - 70){
	    	$('#header').addClass("fixed");
	    	$('#header_en').addClass("fixed");
	    	console.log('tadar');
	    }
	    if(window.pageYOffset<viewportHeight-70){
	    	$('#header').removeClass("fixed");
	    	$('#header_en').removeClass("fixed");
	    }
	
	
	    }
	    window.onscroll=testScroll

	    $('#header .langage').on('click', function(){
	    	$(".content").addClass("english");
	    	$('.content_en').removeClass("french");

	    	$("#header").addClass("english");
	    	$('#header_en').removeClass("french");


	    })

	    $('#header_en .langage').on('click', function(){
	    	$(".content").removeClass("english");
	    	$('.content_en').addClass("french");

	    	$("#header").removeClass("english");
	    	$('#header_en').addClass("french");
	    })

	    $('a[href^="#"]').click(function(){  
	        var id = $(this).attr("href");
	        var offset = $(id).offset().top 
	        $('html, body').animate({scrollTop: offset}, 'slow'); 

	        
	        return false;  
	    }); 

});




	