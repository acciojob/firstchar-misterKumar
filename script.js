function firstChar(text) {
  // your code here
	
		if (text[0]!==" "){
			return text[0];
			
		}
	return " ";
	
}
// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));