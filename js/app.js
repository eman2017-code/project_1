//create game object that will hold the data for the players
const game = {
	round: 1, 
	// lives: 5,
	timer: null,
	score: 0,
	isGameOver: false,
	unUsedWords: [], // copy of the words array
	usedWords: [], // words that have appeared in the screen
	words: [
		'afternoon', 'tamagotchi',
		'coding', 'amazing', 'wonderful', 'computer', 'general', 'assembly', 'crazy',
		'immaculate', 'bitter', 'iphone', 'time', 'coffee', 'javascript', 'ajax', 'protocol', 'water', 
		'prestidigitation', 'charger', 'keyboard', 'shoe', 'shoelace', 'word',
		'belt', 'closet', 'inside', 'outside', 'exciting', 'according', 'martin', 
		'specialist', 'bioinformatics', 'biology', 'chemistry', 'popcorn', 'potatoe', 'worse', 'oblivious', 'young', 
		'innocent', 'because', 'constitute', 'johnny', 'abject', 'aberration', 'abnegation', 'accost',  
		'alias', 'smirk', 'divergents', 'hunger', 'games', 'piano', 'cup', 
		'morning', 'tissue', 'flask', 'fire', 'cord', 'floor', 'wood', 'headphones', 'earjack', 
		'heater', 'cooler', 'apple', 'android', 'acceration', 'exam', 'test', 'spider', 'attack', 'hat', 
		'snow', 'examine', 'cover', 'candle','cologne', 'watch','backpack', 'lipstick', 'arachnid', 'wow', 'warning', 
		'sneaker', 'adidas', 'nike', 'key','ocean', 'camera', 'recording', 'precipitation', 
		'interesting', 'execution', 'socks', 'teeth', 'chin', 'book', 'books', 'deodorant', 'chalk board', 'receive', 
		'port', 'deck', 'ship', 'acknowledge', 'underwear', 'foot', 'portrait', 'deorderant', 'brush', 'white board', 
		'realm', 'pound', 'jump', 'caresses', 'suburban', 'city','liquid', 'solid', 'chicago', 
		'obstinate', 'hardest', 'softest', 'vocabulary', 'apathetic', 'arbitrary', 'arrogate', 'crazy', 'zoo'
	],

	collectPlayerInfo() {
		//collect the level selected and chosen gamertag of the user
		const $gamerTag = $('#input-box').val().toUpperCase();

		const $gamerDifficulty = $('#difficultyButton').val().toUpperCase();
		if($gamerDifficulty == 'hard') {
			// have the showWord function print a word every second
		} else if ($gamerDifficulty == 'medium') {
			// have the showWord function print a word every 2 seconds
		} else {
			// have the showWord function print a word every 3 seconds
		}

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
			if($('.wordDiv').length === 15) {
				clearInterval(interval);
			}
		}, 1000);

		this.unUsedWords = this.words.slice();
		this.showInfo();
		// this.showWord($gamerDifficulty);
		this.showWord();
	},

	showWord(gamerSpeedChoice) {
		setTimeout(() => {
			// this is my base case
			if(this.unUsedWords.length ===  0 || this.isGameOver === true) {
				// stop the function all together
				return;
			} else {
				// get a random word from the copy of original array
				const randomWordIndex = Math.floor(Math.random() * this.unUsedWords.length);
				// create a div with an id 
				const $div = $('<div class="wordDiv"></div>');
				// put in the word that was randomly generated into the div
				$div.text(this.unUsedWords[randomWordIndex]).css('display', 'none');
				// put those divs into the word section so they appear for the user
				$('.words').append($div);
				$div.slideDown();
				// remove it from the words array
				const wordOnScreen = this.unUsedWords.splice(randomWordIndex, 1)[0];
				this.usedWords.push(wordOnScreen);
				// then show the next word
				this.showWord();
				
				// endgame
				this.endGame();
			}
			// do this every x seconds
		}, 1000)
	},

	showInfo() {
		// the user will be able to see the amount of lives they have 
		$lives = $('.lives');
		$lives.html('Lives: ' + this.lives);
		if($lives <= 0) {
			// console.log('GAME OVER');
		}

		// the user will be able to see their score
		$score = $('.score');
		$score.html('Score: ' + this.score);

	},

	// this function will pass in the user's input
	checkWord(userInput) {
		// loop through the usedWords array
		for(let i = 0; i < this.usedWords.length; i++) {
			// correct guess
			if(userInput == this.usedWords[i]) {
				const $wordDiv = $(`.wordDiv:contains(${this.usedWords[i]})`);
				// clear the form w/ jquery
				// this.addToScore();
				this.score += 1;
				this.showInfo();
				$wordDiv.remove(); 
			} 
		}
	},

	endGame() {
		// when one of the divs hit the bottom of the page the game is over

		if($('.wordDiv').length == 15) {
			// make an h1 tag
			const $h1 = $('<h1></h1>');
			// get the div
			const $div = $('.gameOver')
			// have the h1 say this
			$h1.html('YOU ARE DEAD!!!!')
			// append the h1 to the div
			$div.append($h1);
			// change the state of the game
			console.log('The first player has a score of ' + this.score);
			this.isGameOver	= true;
		} 
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
	$('.gamePlayAction').show();
	$('#valueOfUserInput').show();
});

$('#valueOfUserInput').on('keypress', function(e) {
	// keyCode for enter == 13
	// let keyCode = (e.keyCode ? e.keyCode : e.which);
	let keyCode = e.keyCode;
	const $userInput = $('#valueOfUserInput').val();

	if(keyCode == '13') {
		// console.log('The enter button is working properly');
		// console.log($userInput);
		// invoke the checkWord method
		game.checkWord($userInput);
		$('#valueOfUserInput').val('');
	} 
});












