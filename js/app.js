//create game object that will hold the data for the players
const game = {
	round: 1, 
	lives: 5,
	//array of words for levels 
	words: [
		['hello', 'goodbye', 'evening', 'morning', 'afternoon'], // level 1
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
		// console.log($gamerTag);
		// console.log($gamerDifficulty);
		const $h5 = $('h5');
		const $h4 = $('h4');
		$h5.html('Welcome: ' + $gamerTag);
		$h4.html('Your Selected Difficulty: ' + $gamerDifficulty);
		$('form').hide();
		$('body').css('background-image', 'none')
		$('body').css('background-color', '#324759');
		$('.gameSection').show();
	},



}





//collecting user info
$('form').on('submit', (e) => {
	e.preventDefault();
	// invoke collect function to show the user information
	game.collectPlayerInfo();
});

// user will be able to choose one or two players
$('.onePlayerSelection').on('click', () => {
	$('.onePlayerSelection').hide();
	$('.twoPlayerSelection').hide();
	$('.createProfile').css('display', 'block');
});

// user will be able to choose one or two players
$('.twoPlayerSelection').on('click', () => {
	$('.onePlayerSelection').hide();
	$('.twoPlayerSelection').hide();
	$('.createProfile').show();
});



















