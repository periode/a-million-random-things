var voice = new p5.Speech('Google français');
voice.onEnd = nextWord;

var words;
var current_word = 0;

var timer = 1000;
var current_time;

var canSpeak = true;

function preload(){
	words = loadStrings('full_utterances.txt');
}

function setup(){
	console.log(words);
	voice.listVoices();
	voice.setVoice('Tessa');
	voice.setPitch(0.2);
	current_time = millis();
}

function draw(){
	if(words != null && millis() - current_time > timer && canSpeak)
		say_digit();
}

function say_digit(){
	voice.speak(words[current_word]);
	canSpeak = false;

	//available parameters:
	//voice
	//pitch
	//voice
}

function nextWord(){
	current_word++;
	current_time = millis();
	canSpeak = true;
}

function keyPressed(){
	if(key == ' '){
		canSpeak = !canSpeak;
	}
	console.log(canSpeak);
}