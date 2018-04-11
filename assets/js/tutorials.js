// tutorials page

// click drop menu behind the icon

function filter() {
	var tutorialsList = Array.from(document.querySelectorAll('.image-grid a'));
	console.log(tutorialsList);
	var filteredList = tutorialsList.filter(function(tutorial) {
		return tutorial.dataset.category === "decorative-stitches";
	})
	console.log(filteredList);
	var imageGrid = document.querySelector('.image-grid');
	imageGrid.innerHTML = '';
	filteredList.forEach (function(tutorial) {
		imageGrid.appendChild(tutorial);	
	})
	
}