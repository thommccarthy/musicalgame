const keysArray = ["A", "A#/Bb", "B", "C", 
					"C#/Db", "D", "D#/Eb", 
					"E", "F", "F#/Gb", "G", "G#/Ab"];
const modesArray = ["Ionian", "Dorian", "Phrygian", 
					"Lydian", "Mixolydian", 
					"Aeolian", "Locrian"];
const partsArray = ["One Part", "Two Parts", "Three Parts"];
const qualityArray = ["Major", "Minor"];
const timeSigTop = ["2/2", "3/2", "4/2", "5/2", "6/2", "7/2", "8/2", "9/2", "10/2", "11/2", "12/2",
"2/4", "3/4", "4/4", "5/4", "6/4", "7/4", "8/4", "9/4", "10/4", "11/4", "12/4",
"2/8", "3/8", "4/8", "5/8", "6/8", "7/8", "8/8", "9/8", "10/8", "11/8", "12/8",];
const tempoArray = [`Grave (25–45 bpm)`,
`Largo (40–60 bpm)`,
`Adagio (66–76 bpm)`,
`Andante (76–108 bpm)`,
`Andante moderato (92–112 bpm)`,
`Moderato (108–120 bpm)`,
`Allegretto (112–120 bpm)`,
`Allegro moderato (116–120 bpm)`,
`Allegro (120–156 bpm)`,
`Vivace (156–176 bpm)`,
`Vivacissimo (172–176 bpm)`,
`Allegrissimo (172–176 bpm)`,
`Presto (168–200 bpm)`,
`Ludicrous speed! (200 bpm +)`];

let keysButton = document.getElementById("keysbutton");
let partsButton = document.getElementById("partsbutton");
let qualityButton = document.getElementById("qualitybutton");
let modesButton = document.getElementById("modesbutton");
let timeTopButton = document.getElementById("timetopbutton");
let timeBottomButton = document.getElementById("timebottombutton");
let tempoButton = document.getElementById("tempobutton");


function displayKey() {
	const randomKey = Math.floor(Math.random() * (keysArray.length));
	document.getElementById('keydisplay').innerHTML = keysArray[randomKey];
	console.log(keysArray[randomKey]);

}

function displayTempo() {
	const randomTempo = Math.floor(Math.random() * (tempoArray.length));
	document.getElementById('tempodisplay').innerHTML = tempoArray[randomTempo];
	console.log(tempoArray[randomTempo]);

}

function displayMode() {
	const randomMode = Math.floor(Math.random() * (modesArray.length));
	document.getElementById('modesdisplay').innerHTML = modesArray[randomMode];
	console.log(modesArray[randomMode]);

}

function displayParts() {
	const randomParts = Math.floor(Math.random() * (partsArray.length));
	document.getElementById('partsdisplay').innerHTML = partsArray[randomParts];
	console.log(partsArray[randomParts]);

}

function displayQuality() {
	const randomQuality = Math.floor(Math.random() * (qualityArray.length));
	document.getElementById('qualitydisplay').innerHTML = qualityArray[randomQuality];
	console.log(qualityArray[randomQuality]);

}

function displayTimeTop() {
	const randomTimeTop = Math.floor(Math.random() * (timeSigTop.length));
	document.getElementById('timetopdisplay').innerHTML = timeSigTop[randomTimeTop];
	console.log(timeSigTop[randomTimeTop]);

}

function displayTimeBottom() {
	const randomTimeBottom = Math.floor(Math.random() * (timeSigBottom.length));
	document.getElementById('timebottomdisplay').innerHTML = timeSigBottom[randomTimeBottom];
	console.log(timeSigBottom[randomTimeBottom]);

}

keysButton.addEventListener('click', displayKey, false);
modesButton.addEventListener('click', displayMode, false);
partsButton.addEventListener('click', displayParts, false);
qualityButton.addEventListener('click', displayQuality, false);
timeTopButton.addEventListener('click', displayTimeTop, false);
tempoButton.addEventListener('click', displayTempo, false);
