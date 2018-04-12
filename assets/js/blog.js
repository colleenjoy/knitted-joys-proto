// blog page

// filter blog posts based on categories

var postList = Array.from(document.querySelectorAll('.post'));
console.log(postList);

function filter(event) {
	console.log(event.target.name);

	var filteredList = postList.filter(function(post) {
		
		return post.dataset.category === event.target.name;
	})
	console.log(filteredList)
	var postsPage = document.querySelector('.posts-page');
	console.log(postsPage)
	postsPage.innerHTML = '';
	filteredList.forEach(function(post) {
		postsPage.appendChild(post);
	})
}