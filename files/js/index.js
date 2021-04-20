function count() {
	let pageCharCount = 0, pageWordCount = 0, paragraphCharCount = 0, paragraphWordCount = 0, paragraphs = document.getElementById("textarea").value.split(/\r?\n\n/);//paragraphs are separated by double lines

	for(let i = 0; i < paragraphs.length; i++){
		paragraphs[i] = paragraphs[i].replace(/\r?\n/, '');//remove single linebreaks since paragraphs are separated by double lines
		paragraphCharCount = paragraphs[i].length;
		pageCharCount += paragraphs[i].length;
		words = paragraphs[i].split(' ');
		paragraphWordCount = words.length;
		if(!document.getElementById("paragraphCharCount" + (i + 1))) document.getElementById("paragraphStats").innerHTML += "Paragraph " + (i + 1) + ": " + "<span id='paragraphCharCount" + (i + 1) + "'></span> characters, <span id='paragraphWordCount" + (i + 1) +"'></span> words<br>";
		document.getElementById("paragraphCharCount" + (i + 1)).innerHTML = paragraphCharCount;
		document.getElementById("paragraphWordCount" + (i + 1)).innerHTML = paragraphWordCount;
		pageWordCount += words.length;
	}

	document.getElementById("pageCharCount").innerHTML = pageCharCount;
	document.getElementById("pageWordCount").innerHTML = pageWordCount;
}

function resizeTextArea(id) {
	numRows = (Math.max(document.getElementById(id).scrollHeight, document.getElementById(id).scrollHeight) - 19) / 15 + 1;
	document.getElementById(id).rows = numRows;
}