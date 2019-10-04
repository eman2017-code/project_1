//create game object that will hold the data for the players
const game = {
	round: 1, 
	lives: 5,
	timer: 0,
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

		['headphones', 'earjack', ''], // level 7
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
		// when user clicks on the start button, the first word of the first array should appear on the screen and float
		// from right to left
		console.log(this.words[0]);
		// the user will start to type the word as it appears on the screen
		// when user hits enter, check to see if userInput == "the word that was floating across the screen"
			// if userInput == "the word that was floating across the screen" ... the word will dissapaear and their score 
			// will go up
			// else if userInput !== "the word that was floating across the screen" the userInput box will empty out..
			// the word will continue to float... and the user will need to re-type the word to start and make it 
			// dissapear once again 
			const $timer = $('.timer');
			const interval = setInterval(() => {
				if(this.time === 100) {
					clearInterval(interval);
					this.round++;
				} else {
					this.time++;
				}

				$timer.text(`Timer: ${this.time}s`)
			}, 1000);

		const $p1 = $('<p></p>');
		console.log($p1);
		// the round number will appear
		const $p2 = $('<p></p>');
		console.log($p2);
		// the amount of lives will be shown
		const $p3 = $('<p></p>');
		console.log($p3);
		// the amount of words that have been typed will be shown
		const $p4 = $('<p></p>');
		console.log($p4);

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



















