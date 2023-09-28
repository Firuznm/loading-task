
let loadingDiv= document.querySelector(".loading");


// setTimeout(() => {
// 	loadingDiv.classList.toggle("noActive");
// }, 5000);


// ==== task 2 events ====


const inputElement = document.getElementById('text-inp');

inputElement.addEventListener('keydown', function(event) {
	if (event.key === ' ') {
		event.preventDefault(); 
		inputElement.value = inputElement.value.slice(0, -1); 
	} else if (event.key === 'Backspace') {
		event.preventDefault(); 
		inputElement.value += ' '; 
	}
});     