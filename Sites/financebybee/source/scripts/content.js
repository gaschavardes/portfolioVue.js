$(document).ready(function(){
	


	var fooRevealRight = {
	  delay    : 200,
	  origin   : "right",
	  distance : '90px',
	};
	var fooRevealLeft = {
	  delay    : 200,
	  origin   : "left",
	  distance : '90px',
	};
	var fooRevealBottom = {
	  delay    : 200,
	  origin   : "bottom",
	  distance : '90px',
	};

	window.sr = ScrollReveal({});

	sr.reveal('.services_parts.right', fooRevealRight)
	sr.reveal('.services_parts.left', fooRevealLeft)
	sr.reveal('.services_parts.bottom', fooRevealBottom)

	sr.reveal('.experiences.right', fooRevealRight);
	sr.reveal('.experiences.left', fooRevealLeft);


	sr.reveal('.item.right', fooRevealRight);
	sr.reveal('.item.left', fooRevealLeft);



	//AJAX PART !!!!
	// Get the form.
	$('.send').click(function(e){
	            
	            //Stop form submission & check the validation
	            e.preventDefault();
	            
	            // Variable declaration
	            var error = false;
	            var name = $('.name').val();
	            var email = $('.email').val();
	            var subject = $('.subject').val();
	            var message = $('.message').val();
	            
	         	// Form field validation
	            if(name.length == 0){
	                var error = true;
	                $('#name_error').fadeIn(500);
	                $('.name').addClass("wrong_answer");
	            }else{
	                $('#name_error').fadeOut(500);
	            }
	            if(email.length == 0 || email.indexOf('@') == '-1'){
	                var error = true;
	                $('#email_error').fadeIn(500);
	                $('.email').addClass("wrong_answer");
	            }else{
	                $('#email_error').fadeOut(500);

	            }
	            if(subject.length == 0){
	                var error = true;
	                $('#subject_error').fadeIn(500);
	                $('.subject').addClass("wrong_answer");
	            }else{
	                $('#subject_error').fadeOut(500);
	            }
	            if(message.length == 0){
	                var error = true;
	                $('#message_error').fadeIn(500);
	                $('.message').addClass("wrong_answer");
	            }else{
	                $('#message_error').fadeOut(500);
	            }
	            
	            // If there is no validation error, next to process the mail function
	            if(error == false){
	               
					/* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
	                $.post("mailer.php", $("#ajax-contact").serialize(),function(result){
	                    //Check the result set from email.php file.
	                    console.log('sentmag');
	                    $('.name').val("");
	                    $('.email').val("");
	                    $('.subject').val("");
	                    $('#message').val("");
	                    $('.success').addClass("sent");
	                    $('*').removeClass("wrong_answer");
	                    if(result == 'sent'){
	                    	console.log("YEASSAY");
	                        //If the email is sent successfully, remove the submit button
	                         $('#submit').remove();
	                        //Display the success message
	                        $('#mail_success').fadeIn(500);
	                    }else{
	                        //Display the error message
	                        $('#mail_fail').fadeIn(500);
	                        // Enable the submit button again
	                        $('#send_message').removeAttr('disabled').attr('value', 'Send The Message');
	                    }
	                });
	            }
	            else{
	            	console.log("kikou");
	            	$('.fail').addClass("sent");
	            	setTimeout(function(){ $('.fail').removeClass("sent"); }, 1000);
	            }
	        });

});