// tutorials page

// click drop menu behind the icon

function filter() {
	var tutorialsList = Array.from(document.querySelectorAll('.image-row a'));
	console.log(tutorialsList);
	var filteredList = tutorialsList.filter(function(tutorial) {
		return tutorial.dataset.category === "decorative-stitches";
	})
	console.log(filteredList);
	
}