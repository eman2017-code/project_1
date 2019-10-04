//create game object that will hold the data for the players
const game = {
	level: 1, 
	//array of words for levels 
	words: [
		[], // level 1
		[], // level 2
		[], // level 3
		[], // level 4
		[], // level 5
		[], // level 6
		[], // level 7
		[], // level 8
		[], // level 9
		[], // level 10
		[], // level 12
		[], // level 13
		[], // level 13
		[], // level 14
		[], // level 15
		[], // level 16
		[], // level 17
		[], // level 18
		[], // level 19
		[], // level 20
	],

	collectPlayerInfo() {
		//collect the level selected and chosen gamertag of the user
		const $gamerTag = $('#input-box').val().toUpperCase();
		const $gamerDifficulty = $('#difficultyButton').val().toUpperCase();
		// const $gamerMedium = $('#mediumButton').val().toUpperCase();
		// const $gamerHard = $('#hardButton').val().toUpperCase();
		console.log($gamerTag);
		console.log($gamerDifficulty);
		if($gamerDifficulty == "EASY" || $gamerDifficulty == "MEDIUM" || $gamerDifficulty == "HARD") {
			console.log('this is a valid response');
		} else {
			console.log('this is not a valid repsonse');
		}
	},

}





//collecting user info
$('form').on('submit', (e) => {
	e.preventDefault();
	// invoke collect function to show the user information
	game.collectPlayerInfo();
	$('form').hide();
	$('body').css('background-image', 'none')
	$('body').css('background-color', '#324759');
	$('.gameSection').show();
	// console.log(e.currentTarget);
	// console.log(e.target);
});

// when the user clicks on the 1 player or 2 players button, both the buttons will dissapear and the user will select the difficulty
// that they would like to play at 
$('.onePlayerSelection').on('click', () => {
	$('.onePlayerSelection').hide();
	$('.twoPlayerSelection').hide();
	$('.createProfile').css('display', 'block');
});

$('.twoPlayerSelection').on('click', () => {
	$('.onePlayerSelection').hide();
	$('.twoPlayerSelection').hide();
	$('.createProfile').show();
});



















