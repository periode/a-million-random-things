function playBook(){
	document.getElementById('audio').play();
}

function pauseBook(){
	document.getElementById('audio').pause();
}

function stopBook(){
	document.getElementById('audio').pause();
	document.getElementById('audio').currentTime = 0;
}