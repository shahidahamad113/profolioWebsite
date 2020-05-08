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
	
	// Initial animation
setTimeout(() => {
	span.classList.add('active');
	}, 750 * (idx+1))
});
