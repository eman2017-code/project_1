//create game object that will hold the data for the players
const game = {
	round: 1, 
	lives: 5,
	timer: null,
	score: 0,
	level: 5000,

	collectPlayerInfo() {
		//collect the level selected and chosen gamertag of the user
		const $gamerTag = $('#input-box').val().toUpperCase();
		const $gamerDifficulty = $('#difficultyButton').val().toUpperCase();
		const $h5 = $('h5');
		const $h4 = $('h4');
		$h5.html('Welcome: ' + $gamerTag);
		$h4.html('Your Selected Difficulty: ' + $gamerDifficulty);
		$('form').hide();
		$('body').css('background-image', 'none')
		$('body').css('background-color', '#324759');
		$('.gameSection').show();
	},
 
	startGame() {
		// the timer will start to count from 0 up
		const interval = setInterval(() => {
			this.timer ++;
			$timer = $('.timer');
			$timer.html('Timer: ' + this.timer)
			console.log(this.timer);
			// set a duration for 1 second for the timer
		}, 1000);

		// the user will be able to see the amount of lives they have 
		$lives = $('.lives');
		$lives.html('Lives: ' + this.lives);
		if($lives <= 0) {
			console.log('GAME OVER');
		}

		// the user will be able to see which round they are on
		$rounds = $('.rounds');
		$rounds.html('Round: ' + this.round);

		// the user will be able to see their score
		$score = $('.score');
		$score.html('Score: ' + this.score);

	}
}

// EVENT LISTENERS

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

$('.startButton').on('click', () => {
	game.startGame();
	$('.startButton').hide();
	$('#valueOfUserInput').show();
	$('.gamePlayAction').show();
});


















