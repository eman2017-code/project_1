//create game object that will hold the data for the players
const game = {
	round: 1, 
	lives: 5,
	timer: null,
	score: 0,
	words: [
		['hello', 'goodbye', 'evening', 'morning', 'afternoon', 'tamagotchi'], // level 1

		['coding', 'amazing', 'wonderful', 'immaculate', 'computer', 'general', 'assembly', 'crazy',
				'immaculate', 'bitter', 'iphone', 'time', 'coffee', 'javascript', 'ajax', 'protocol'], // level 2

		['water', 'ocean', 'prestidigitation', 'camera', 'recording', 'charger', 'liquid', 'keyboard', 'shoe', 'shoelace', 
		'belt', 'closet', 'inside', 'outside', 'exciting'], // level 3

		['interesting', 'wow', 'according', 'martin', 'specialist', 'bioinformatics', 'biology', 'chemistry', 'popcorn', 'potatoe', 'worse',
				'oblivious', 'young', 'innocent', 'because', 'because', 'constitute'], // level 4

		['johnny', 'abject', 'aberration', 'abnegation', 'accost',  'acceration', 'alias', 'smirk', 'interesting', 
				'divergents', 'hunger', 'games', 'key', 'piano', 'cup', 'morning', 'afternoon', 'tissue', 'flask', 'fire',
				'cord', 'floor', 'wood'], // level 5

		['headphones', 'earjack', 'heater', 'cooler', 'cologne', 'watch', 'apple', 'android', 'adidas', 'nike',  'abnegation', 'accost', 
		'acceration', 'cologne', 'watch', 'apple', 'android',
		'exam', 'test', 'spider', 'arachnid', 'wow', 'attack', 'warning', 'hat', 'snow', 'examine', 'sneaker', 'cover', 'candle', 'fire',
				'abject', 'aberration', 'abnegation', 'accost',  'acceration', 'alias', 'smirk', 'interesting'], // level 6

		['cologne', 'watch', 'apple', 'android', 'adidas', 'nike', 
	 			'nike', 'backpack', 'lipstick', 'exam', 'test', 'spider', 'arachnid', 'wow', 'attack', 'warning', 'hat', 'snow', 
	 			'examine', 'sneaker', 'cover', 'candle', 'fire',
				'abject', 'aberration', 'adidas', 'nike', 
				'nike', 'backpack', 'lipstick' ], // level 7

		['divergents', 'hunger', 'games', 'key', 'piano', 'cup','ocean', 'prestidigitation', 'camera', 'recording', 'precipitation', 
		'interesting', 'execution',
		 'socks','underwear', 'foot', 'portrait', 'teeth', 'chin', 'book', 'books', 'deorderant', 'brush', 'white board', 
		 'chalk board', 'receive', 'port', 'deck', 'ship', 'acknowledgement', 'acknowledge', 'realm', 'interesting'], // level 8

		['underwear', 'foot', 'portrait', 'teeth', 'chin', 'book', 'books', 'deorderant', 'brush', 'white board', 'chalk board', 
		'receive', 'port', 'deck', 'ship', 'acknowledgement', 'acknowledge', 'realm', 'interesting', 'pound',' particular', 
		'jump', 'caresses', 'suburban', 'city',
		'liquid', 'solid', 'chicago', 'obstinate', 'hardest', 'softest', 'vocabulary', 'apathetic', 'arbitrary', 'arrogate',], // level 9
	],

	collectPlayerInfo() {
		//collect the level selected and chosen gamertag of the user
		const $gamerTag = $('#input-box').val().toUpperCase();
		// console.log($gamerTag);
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
		// const interval = setInterval(() => {
		// 	this.timer ++;
		// 	$timer = $('.timer');
		// 	$timer.html('Timer: ' + this.timer)
		// 	console.log(this.timer);
		// 	// set a duration for 1 second for the timer
		// }, 1000);

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

		// have each word float from top to bottom one at a time

	},

	checkWord() {
	// get the input from when the user types the word that is shown on the screen
	// if user input == the word, make that word dissapear
	// keyCode for enter == 13
		$('#valueOfUserInput').keypress(function(e) {
			let keyCode = (e.keyCode ? e.keyCode : e.which);
			const $userInput = $('#valueOfUserInput').val();
			if(keyCode == '13');
			console.log('hello you pressed the enter key');
			console.log($userInput);
		});
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
	game.checkWord();
	$('.startButton').hide();
	$('.gamePlayAction').show();
	$('#valueOfUserInput').show();
});


















