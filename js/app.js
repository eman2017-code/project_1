// when the user clicks on the 1 player or 2 players button, both the buttons will dissapear and the user will select the difficulty
// that they would like to play at 

$('.onePlayerSelection').on('click', () => {
	$('.onePlayerSelection').hide();
	$('.twoPlayerSelection').hide();
});

$('.twoPlayerSelection').on('click', () => {
	$('.onePlayerSelection').hide();
	$('.twoPlayerSelection').hide();
});