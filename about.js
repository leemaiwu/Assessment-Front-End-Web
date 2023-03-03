console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Submitted successfully');
}

function imageAlert() {
	alert('You\'re awesome!')
}


let form = document.querySelector('#contact');
let image = document.querySelector('.rubber-duck-image')


form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', imageAlert)
