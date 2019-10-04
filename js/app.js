//create game object that will hold the data for the players
const game = {
	// create a an array of words that will be randomly looped through
	// each level will have a different array of words
	// the higher the level the longer the array of words and the bigger the words will be 

}







// when the user clicks on the 1 player or 2 players button, both the buttons will dissapear and the user will select the difficulty
// that they would like to play at 
$('.onePlayerSelection').on('click', () => {
	$('.onePlayerSelection').hide();
	$('.twoPlayerSelection').hide();
	$('.dropDown').show();
	$('.createProfile').show();
});

$('.twoPlayerSelection').on('click', () => {
	$('.onePlayerSelection').hide();
	$('.twoPlayerSelection').hide();
	$('.dropDown').show();
	$('.createProfile').show();
});