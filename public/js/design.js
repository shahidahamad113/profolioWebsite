const spans = document.querySelectorAll('.word span');
const en=document.querySelector('.en');
const mobile=document.querySelector('#mobile-link');
mobile.addEventListener('click',function(){
	en.classList.toggle('show');
});
spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
});
span.addEventListener('animationend', (e) => {
	e.target.classList.remove('active');
});

document.onreadystatechange = function() { 
	if (document.readyState !== "complete") { 
		document.querySelector( 
		  "body").style.visibility = "hidden"; 
		document.querySelector( 
		  "#loader").style.visibility = "visible"; 
	} else { 
		document.querySelector( 
		  "#loader").style.display = "none"; 
		document.querySelector( 
		  "body").style.visibility = "visible"; 
	} 
}; 
	
	// Initial animation
setTimeout(() => {
	span.classList.add('active');
	}, 750 * (idx+1))
});
