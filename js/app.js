//create game object that will hold the data for the players
const game = {
	round: 1, 
	lives: 5,
	timer: null,
	score: 0,
	wordsAppeared: [],
	words: [
		'hello', 'goodbye', 'evening', 'afternoon', 'tamagotchi',
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
		'deorderant', 'brush', 'white board', 'chalk board', 'receive', 'port', 'deck', 'ship', 
		'acknowledge', 'realm', 'underwear', 'foot', 'portrait', 'teeth', 'chin', 'book', 'books', 
		'deorderant', 'brush', 'white board', 'chalk board', 'receive', 'port', 'deck', 'ship', 
		'acknowledge', 'realm', 'pound',' particular', 'jump', 'caresses', 'suburban', 'city',
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

		this.showInfo();
		this.showWord();

	},

	showWord() {

		// append an element to the '.words' span in the HTML 
		setTimeout(() => {

			// this is my base case
			if(this.words.length === 0) {
				return 0;
			} else {
				// get a random word
				const randomWordIndex = Math.floor(Math.random() * this.words.length);
				// make this show up on the page for the user to see 
				const $div = $('<div id="wordDiv"></div>');
				$div.append(this.words[randomWordIndex]);
				// I need to add an animation here for how the words will appear
				$('.words').append($div);
				// $('.words').append(this.words[randomWordIndex]);
				// console.log(this.words[randomWord]);
				// push this into the array that has all of the words that have already 
				// showed up on the screen already
				this.wordsAppeared.push(this.words[randomWordIndex]);
				// remove from array
				this.words.splice(randomWordIndex, 1);
				// console.log(this.wordsAppeared);
				// console.log(this.words);
				this.showWord()
			}

			// track words currently on screen in an array in game obj add this word to array
			// -- will be used to compare by checkWord()

		}, 1000)

	},

	showInfo() {
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

	},

	setAnimation() {
		// this will add animation to the words as they appear on the screen
	},

	checkWord(userInput) {
		// check input against all the words on the screen
		// loop thru words

		// get the randomized word from the word array
		const randomWord = Math.floor(Math.random() * this.words.length);

		const $userInput = $('#valueOfUserInput').val();
		// console.log($userInput);
		if($userInput == this.words[randomWord]) {
			console.log("this is this.words[randomWord]");
			console.log(this.words[randomWord]);
			this.words[randomWord].remove();
		}

		// if the word that the user typed matches the current word that is being appended
		// that word will dissapear from array and from screen



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
	// game.checkWord();
	$('.startButton').hide();
	$('.gamePlayAction').show();
	$('#valueOfUserInput').show();
});

$('#valueOfUserInput').on('keypress', function(e) {
	// keyCode for enter == 13
	let keyCode = (e.keyCode ? e.keyCode : e.which);

	if(keyCode == '13') {
		const $userInput = $('#valueOfUserInput').val();

		console.log($userInput);
		game.checkWord($userInput)
	}
	// console.log('hello you pressed the enter key');
	// check to see if the userInput == to the current word that is on the screen
});












