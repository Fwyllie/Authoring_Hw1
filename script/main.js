 (function(){
 	var theImages = document.querySelectorAll('.image-holder'),
 	theHeading = document.querySelector('.heading'),
 	theSubHead = document.querySelector('.main-copy h2'),
 	theSeasonText = document.querySelector('.main-copy p'),
 	appliedClass;



function changeElements(){
	// make sure event handling is working
	//debugger;
	let objectIndex = dynamicContent[this.id];
	let subImages = document.querySelector('.subImagesContainer');

	//remove all sub imgs
	while(subImages.firstChild){
		subImages.removeChild(subImages.firstChild);
	}

	// add some images at the bottom of the page
	objectIndex.images.forEach(function(images, index){
		//create new img class
		let newSubImg = document.createElement('img');
		//add css class
		newSubImg.classList.add('thumb');
		//add a source
		newSubImg.src = "images/" + objectIndex.images[index];
		//add it to the page
		subImages.appendChild(newSubImg);
	});

	//remove the last css element applied
	theSubHead.classList.remove(appliedClass);
	theHeading.classList.remove(appliedClass);

	//change colour of text element
	theSubHead.classList.add(this.id);
	theHeading.classList.add(this.id);

	//change description
	theSubHead.firstChild.nodeValue = objectIndex.headline;
	theSeasonText.firstChild.nodeValue = objectIndex.text;

	appliedClass = this.id;
}

theImages.forEach(function(element, index){
 element. addEventListener('click', changeElements, false)
//Loop through the images
});


	theSubHead.firstChild.nodeValue = dynamicContent['spring'].headline;
	theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
	theHeading.classList.add('spring');

 })();


