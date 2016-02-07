interval = 2700000; //2,700 seconds per 2 pages assuming 4.5seconds per reading
page = 0;

function playBook(){
	document.getElementById('audio').play();
	flipPageIntro();
}

function flipPageIntro(){
	flipPage();
	setTimeout(flipPage, 34000); 
	setTimeout(flipPage, 36000);
	setTimeout(flipPagesMain, 37000);
}


function flipPageMain(){
	setInterval(flipPage, interval);
}

function flipPage(){
	// interval = 1000;
	console.log('flipping');
	$('.flipbook').turn('next');
	page++; 
}

function pauseBook(){
	document.getElementById('audio').pause();
}

function stopBook(){
	document.getElementById('audio').pause();
	document.getElementById('audio').currentTime = 0;
}