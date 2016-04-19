

function weightCalculator(id){
	// alert("you clicked me!")
	var userWeight = document.getElementById("userInput").value;
	var planetChoice = show_selected();
	var planetName = getSelectedText();
	document.getElementById('result').innerHTML = '<span> "If you were on "' + planetName +", you would weight " + (userWeight * planetChoice) + "lbs!";
'</span>'}

function show_selected() {
    var selector = document.getElementById('planetSelected');
    return selector[selector.selectedIndex].value;
}

function getSelectedText(){
	var selector = document.getElementById('planetSelected');
	return selector[selector.selectedIndex].innerHTML;
}

