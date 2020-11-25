if (localStorage.getItem("viewPortFlag") === null) {
  localStorage.setItem("viewPortFlag", 'false');
}

var createTestButton = function () {
	var testButton = document.createElement('button');
	testButton.classList.add('change-viewport-button');
	testButton.textContent = 'Change Viewport';

	testButton.addEventListener('click', function () {

		var viewPortVar = localStorage.getItem("viewPortFlag");

		if (viewPortVar == 'false') {
			localStorage.setItem("viewPortFlag", 'true');
		} else {
			localStorage.setItem("viewPortFlag", 'false');
		}

		changeViewPort();
	});

	var testParentElement = document.querySelector('.container');
	testParentElement.appendChild(testButton)
}

var changeViewPort = function () {
	var viewPort = document.querySelector('head meta[name="viewport"]');

	if (localStorage.getItem("viewPortFlag") == 'true') {
		viewPort.setAttribute('content', 'width = 1024');
	} else {
		viewPort.setAttribute('content', 'width=device-width, initial-scale=1');
	}
}

createTestButton();

changeViewPort();