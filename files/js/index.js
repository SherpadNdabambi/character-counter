function resizeTextArea(id) {
	numRows = (Math.max(document.getElementById(id).scrollHeight, document.getElementById(id).scrollHeight) - 19) / 15 + 1;
	document.getElementById(id).rows = numRows;
}