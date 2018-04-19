// Product Pages

// subtract item quantity

function minus() {
	var quantity = parseInt(document.getElementById('qty').value);

	if (quantity > 0) {
		quantity = quantity - 1;
		//update the total
		var itemTotal = parseInt(document.getElementById('total').dataset.price);
		var unitPrice = parseInt(document.getElementById('total').dataset.unitprice);
		var newTotal = itemTotal - unitPrice;
		// change the price on the page and in the data attribute
		document.getElementById('total').innerHTML = '$' + newTotal +'.00';
		document.getElementById('total').dataset.price = newTotal;
	} else {
		quantity = 0;
	}

	 document.getElementById('qty').value= quantity;


}

// add item quantity

function plus() {
	var quantity = parseInt(document.getElementById('qty').value);
	if (quantity >= 0) {
		quantity = 1 + quantity ;
	} else {
		quantity = 1;
	}
	document.getElementById('qty').value = quantity;
	//update the total
	var itemTotal = parseInt(document.getElementById('total').dataset.price);
	var unitPrice = parseInt(document.getElementById('total').dataset.unitprice);
	var newTotal = itemTotal + unitPrice;

	// change the price on the page and in the data attribute
	document.getElementById('total').innerHTML = '$' + newTotal +'.00';
	document.getElementById('total').dataset.price = newTotal;
}

// add to cart

function cart() {
	var cartQty = parseInt(document.getElementById('cart-qty').dataset.qty);
	console.log(cartQty)
	if (cartQty >=0) {

	} else {
		cartQty = 0
	}
	console.log(cartQty)
	var cartTotal = parseInt(document.getElementById('cart-total').dataset.price);
	var addedQty = parseInt(document.getElementById('qty').value)
	if (addedQty >= 0) {
		
	} else {
		var addedQty = 1;
	}
	console.log(addedQty)
	var addedTotal = parseInt(document.getElementById('total').dataset.price);

	var newQty = cartQty + addedQty;
	console.log(newQty)
	var newTotal = cartTotal + addedTotal;

	document.getElementById('cart-qty').innerHTML = newQty;
	document.getElementById('cart-qty').dataset.qty = newQty;
	// need to add the $ back into the price
	document.getElementById('cart-total').innerHTML = '$' + newTotal + '.00';
	document.getElementById('cart-total').dataset.price = newTotal;

	// make shopping cart visible
	document.getElementById('shopping-cart').style.opacity = 1;
}

// disable the ordering options


function disable() {
	var qty = parseInt(document.getElementById('qty').value);

	var ischecked = document.querySelector("input[name = 'pattern-only']");
	if (ischecked.checked === true) {
		var selectTag = Array.from(document.getElementsByTagName('select'));
		selectTag.forEach (function (select) {
			Array.from(select.options).forEach (function (option) {
				option.disabled = true;
				select.style.border = '1px solid #8B7065';
				select.style.color = '#8B7065';
				document.querySelectorAll('.drop-menu-icon').forEach (function(icon) {
						icon.style.backgroundImage = 'url(../assets/svg/shop-drop-menu-icon-disabled.svg)';
				})
			})
			// reset option tags
			select.options[0].selected = true;
		})
		document.getElementById('total').dataset.price = parseInt(ischecked.dataset.price);
		document.getElementById('total').innerHTML = '$' + parseInt(ischecked.dataset.price) + '.00';
		document.getElementById('qty').value = '1';


	} else {
		var selectTag = Array.from(document.getElementsByTagName('select'));
		selectTag.forEach (function (select) {
			Array.from(select.options).forEach (function (option) {
				option.disabled = false;
				select.style.border = '1px solid #5E1E02';
				select.style.color = '#5E1E02';
				document.querySelectorAll('.drop-menu-icon').forEach (function(icon) {
						icon.style.backgroundImage = 'url(../assets/svg/shop-drop-menu-icon.svg)';
				})
			})
		})
		

	}

}

// calculate the price each time an option is chosen

function priceChange() {

	// get the data price attributes from all the selected options
	var selectTags = Array.from(document.querySelectorAll('.drop-menu select'));
	var patternPrice = parseInt(document.querySelector('.pattern-only-checkbox input').dataset.price);
	var unitPrice = patternPrice;
	selectTags.forEach( function(select) {
		var selectedOption = select.selectedIndex;
		var optionPrice = parseInt(select.options[selectedOption].dataset.price);
		//add them together
		unitPrice = unitPrice + optionPrice;
	})

	//get quantity
	var quantity = parseInt(document.getElementById('qty').value);

	//get total price
	var totalPrice = unitPrice * quantity;

	// change the price on the page and in the data attribute
	document.getElementById('total').innerHTML = '$' + totalPrice + '.00';
	document.getElementById('total').dataset.price = totalPrice;

	//set the full price of one item based on the options chosen
	document.getElementById('total').dataset.unitprice = unitPrice;
	

}
