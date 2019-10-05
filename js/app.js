//create game object that will hold the data for the players
const game = {
	round: 1, 
	lives: 5,
	timer: null,
	//array of words for levels 
	words: [
		['hello', 'goodbye', 'evening', 'morning', 'afternoon'], // level 1

		['coding', 'amazing', 'wonderful', 'immaculate', 'computer', 'general', 'assembly', 'crazy'], // level 2

		['immaculate', 'bitter', 'iphone', 'time', 'coffee', 'javascript', 'ajax', 'protocol', 
		'water', 'ocean', 'prestidigitation', 'camera', 'recording'], // level 3

		['charger', 'liquid', 'keyboard', 'shoe', 'shoelace', 'belt', 'closet', 'inside', 'outside', 'exciting',
		'interesting', 'wow', 'according'], // level 4

		['martin', 'specialist', 'bioinformatics', 'biology', 'chemistry', 'popcorn', 'potatoe', 'worse',
		'oblivious', 'young', 'innocent', 'because', 'because', 'constitute'], // level 5

		['johnny', 'abject', 'aberration', 'abnegation', 'accost',  'acceration', 'alias', 'smirk', 'interesting', 
		'divergents', 'hunger', 'games', 'key', 'piano', 'cup', 'morning', 'afternoon', 'tissue', 'flask', 'fire',
		'cord', 'floor', 'wood'], // level 6

		['headphones', 'earjack', 'heater', 'cooler', 'cologne', 'watch', 'apple', 'android', 'adidas', 'nike', 
		'nike', 'backpack', 'lipstick', 'exam', 'test', 'spider', 'arachnid'], // level 7
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

	startGame() {
		// when user clicks the start button the first array of words will appear on the screen
		// floating from right to left
		// loop through the first array randomly
		console.log(this.words[0]);

		// the timer will start to count from 0 up
		const interval = setInterval(() => {
			this.timer ++;
			$timer = $('.timer');
			$timer.html('Timer: ' + this.timer)
			console.log(this.timer);
		}, 1000);

		// the user will be able to see the amount of lives they have 
		$lives = $('.lives');
		$lives.html('Lives: ' + this.lives);
		if($lives <= 0) {
			console.log('GAME OVER');
		}

		// the user will have to type the the words before they hit the left side of the screen
		// if user does not type word fast enough, say 'game over, try again'

		// if user can selected 2 players, after the first user has not failed to complete the first
		// round, it will be player 2's turn and same situation will be so 

		// if user is able to type all the words fast enough, the round will be added by one
		// and next array of words will appear, looping randomly just like the first one

		// if user 2 fails to complete a round, bring them to the stats page, where it will show
		// the amount of words that each player has typed
			// if user1 has more than user2, user1 wins, if user2 has more than user1, user2 wins

		// there will be 20 levels that they user can complete
			// each adding more words and bigger words than the next

		// if user1 and user2 both complete all 20 levels without failing,
		// bring them to the states page, if user1 has completed all 20 levels in less time than
		// user2, user1 wins... if user2 has completed all 20 levels in less time than use1,
		// user2 winss

	},
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
});



















