var posicionNavegacion = $('nav').offset().top;
		console.log(posicionNavegacion);
		$(window).on('scroll', function(){
		  var posicionScroll = $(window).scrollTop();
		  console.log(posicionScroll);
		  if(posicionScroll > posicionNavegacion){
		      $('nav').addClass('sticky-nav');
		  }
		  else{
		  	$('nav').removeClass('sticky-nav');
		  	
		  }
		});
		$('nav ul li a').on('click', function(){
		    $('nav ul li a').removeClass('active');
		    $(this).addClass('active');
		});
		function responsivemenu(){
				let x=document.getElementById("nav");
				let y=document.getElementById("btn");
				 if (x.className === "navbar") {
		         x.className += " responsive";
		         btn.style.transform="rotate(90deg)";
		       } else {
		         x.className = "navbar";
		         btn.style.transform="rotate(0deg)";
		          };
			};
	