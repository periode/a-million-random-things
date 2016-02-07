interval = 34000;
page = 0;

function playBook(){
	document.getElementById('audio').play();
	flipPage();
	setInterval(flipPage, interval);
}

function flipPage(){
	// interval = 1000;
	console.log('flipping');
	$('.flipbook').turn('next');
}

function pauseBook(){
	document.getElementById('audio').pause();
}

function stopBook(){
	document.getElementById('audio').pause();
	document.getElementById('audio').currentTime = 0;
}