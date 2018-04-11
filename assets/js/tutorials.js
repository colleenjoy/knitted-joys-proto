// tutorials page

// make an array of all the tutorials

var tutorialsList = Array.from(document.querySelectorAll('.image-grid a'));

// filter based on the drop menu
function filter(event) {
	var filteredList = tutorialsList.filter(function(tutorial) {
		// checking if the drop menu option matches any of the 
		// data categories given to any tutorials
		return (tutorial.dataset.category.indexOf(event.target.value) > -1);
	})

	// display the filtered tutorials by deleting all of them
	// and then adding them back
	var imageGrid = document.querySelector('.image-grid');
	imageGrid.innerHTML = '';
	filteredList.forEach (function(tutorial) {
		imageGrid.appendChild(tutorial);	
	})
	
}

// filter based on search entry
function search(q) {
	//make search term lower case
	var searchTerm = document.getElementById('tutorial-search').value.toLowerCase();
	var filteredList = tutorialsList.filter( function(tutorial) {
		tutorialLowerCase = tutorial.innerText.toLowerCase();
		// check for a match
		return (tutorialLowerCase.indexOf(searchTerm) > -1);
	})
	// display the tutorials that matched the search
	var imageGrid = document.querySelector('.image-grid');
	imageGrid.innerHTML = '';
	filteredList.forEach (function(tutorial) {
		imageGrid.appendChild(tutorial);	
	})
	// reset the search bar
	document.getElementById('tutorial-search').value = '';
}