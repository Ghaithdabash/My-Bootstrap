window.onload = function() {
  movesomthing();
  scroll();

};


/*------------------------- Grab Hand ---------------------------*/
function movesomthing() { 
	var paragragh = document.getElementById("paragragh1");
	console.log(paragragh);
	paragragh.addEventListener("mouseover", function() {
		paragragh.style.cursor='grab';

	});
	paragragh.addEventListener("click", function() {
		paragragh.style.cursor='move';

	});
}

/*------------------------- Scroll function ---------------------------*/

function scroll() {
window.addEventListener('scroll', function (e) {
       var nav = document.getElementById('navscr');
       var color1 =document.getElementsByClassName('nav-link');

       if (document.documentElement.scrollTop >10) {
               nav.classList.add('scroll');
       		 for (var i = 0; i < color1.length; i++) {
       			 color1[i].classList.add('scrtxt');
        }
        
             
           } else {
               nav.classList.remove('scroll');
        	for (var i = 0;i <color1.length; i++) {
        		color1[i].classList.remove('scrtxt');
        	}
           }
   });
}




/*------------------------- Text area and input ---------------------------*/



$(document).ready(function(){
$('textarea').focusin(function(){
  $(this).attr('placeholder','');
});
$("textarea").focusout(function(){
   $(this).attr('placeholder', "Your Comment");
});

});




 var b;
$(document).ready(function(){
$('input').focusin(function(){
 var a= $(this).attr('placeholder');
 console.log(a);
  $(this).attr('placeholder','');
  b=a;
});

$('input').focusout(function(){
   $(this).attr('placeholder',b);
});

});
