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
		'prestidigitation', 'charger', 'keyboard', 'shoe', 'shoelace', 
		'belt', 'closet', 'inside', 'outside', 'exciting', 'wow', 'according', 'martin', 
		'specialist', 'bioinformatics', 'biology', 'chemistry', 'popcorn', 'potatoe', 'worse', 'oblivious', 'young', 
		'innocent', 'because', 'constitute', 'johnny', 'abject', 'aberration', 'abnegation', 'accost',  
		'acceration', 'alias', 'smirk', 'divergents', 'hunger', 'games', 'key', 'piano', 'cup', 
		'morning', 'tissue', 'flask', 'fire','cord', 'floor', 'wood', 'headphones', 'earjack', 
		'heater', 'cooler', 'cologne', 'watch', 'apple', 'android', 'adidas', 'nike', 
		'acceration', 'cologne', 'watch', 'apple', 'android', 'exam', 'test', 'spider', 'arachnid', 
		'attack', 'warning', 'hat', 'snow', 'examine', 'sneaker', 'cover', 'candle', 'fire', 'acceration', 'alias', 'smirk',
		'cologne', 'watch', 'apple', 'android', 'adidas', 'nike', 'backpack', 'lipstick', 'exam', 'test', 'spider', 
		'arachnid', 'wow', 'attack', 'warning', 'hat', 'snow','examine', 'sneaker', 'cover', 'candle', 'fire', 
		'adidas', 'nike',,'nike', 'backpack', 'lipstick', 'divergents', 'hunger', 'games', 
		'key', 'piano', 'cup','ocean', 'camera', 'recording', 'precipitation', 
		'interesting', 'execution', 'socks','underwear', 'foot', 'portrait', 'teeth', 'chin', 'book', 'books', 
		'deodorant', 'brush', 'white board', 'chalk board', 'receive', 'port', 'deck', 'ship', 
		'acknowledge', 'realm', 'underwear', 'foot', 'portrait', 'teeth', 'chin', 'book', 'books', 
		'deorderant', 'brush', 'white board', 'chalk board', 'receive', 'port', 'deck', 'ship', 
		'realm', 'pound', 'jump', 'caresses', 'suburban', 'city',
		'liquid', 'solid', 'chicago', 'obstinate', 'hardest', 'softest', 'vocabulary', 'apathetic', 'arbitrary', 'arrogate'
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
		// this.endGame();
	},
 
	startGame() {
		// // the timer will start to count from 0 up
		// const interval = setInterval(() => {
		// 	this.timer ++;
		// 	$timer = $('.timer');
		// 	$timer.html('Timer: ' + this.timer)
		// 	console.log(this.timer);
		// 	// set a duration for 1 second for the timer
		// }, 1000);

		this.unUsedWords = this.words.slice();
		this.showInfo();
		this.showWord();
	},

	showWord() {
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
				// console.log(this.words[randomWordIndex] + '<--- random word selected from original words array');
				// put those divs into the word section so they appear for the user
				$('.words').append($div);
				$div.slideDown();
				// remove it from the words array
				const wordOnScreen = this.unUsedWords.splice(randomWordIndex, 1)[0];
				// console.log($wordsOnScreen);
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

		// console.log($wordDiv.css('height'))
		if($('.wordDiv').length == 15) {
			console.log('YOU DIED!!!');	
			this.isGameOver	= true
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












