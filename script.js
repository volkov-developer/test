var viewportIsChanged = false;

var createTestButton = function () {
	var testButton = document.createElement('button');
	testButton.classList.add('change-viewport-button');
	testButton.textContent = 'Change Viewport';

	testButton.addEventListener('click', function () {
		viewportIsChanged = !viewportIsChanged;
		changeViewPort();
	});

	var testParentElement = document.querySelector('.container');
	testParentElement.appendChild(testButton)
}

var changeViewPort = function () {
	var viewPort = document.querySelector('head meta[name="viewport"]');

	if (viewportIsChanged) {
		viewPort.setAttribute('content', 'width = 1024');
	} else {
		viewPort.setAttribute('content', 'width=device-width, initial-scale=1');
	}
}

createTestButton();