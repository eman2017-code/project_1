//create game object that will hold the data for the players
const game = {
	round: 1, 
	lives: 5,
	timer: null,
	score: 0,
	wordsAppeared: [],
	words: [
		'Eman', 'Fatima', 'Temo'
	],

	//'afternoon', 'tamagotchi',
		// 'coding', 'amazing', 'wonderful', 'computer', 'general', 'assembly', 'crazy',
		// 'immaculate', 'bitter', 'iphone', 'time', 'coffee', 'javascript', 'ajax', 'protocol', 'water', 
		// 'prestidigitation', 'charger', 'keyboard', 'shoe', 'shoelace', 
		// 'belt', 'closet', 'inside', 'outside', 'exciting', 'wow', 'according', 'martin', 
		// 'specialist', 'bioinformatics', 'biology', 'chemistry', 'popcorn', 'potatoe', 'worse', 'oblivious', 'young', 
		// 'innocent', 'because', 'constitute', 'johnny', 'abject', 'aberration', 'abnegation', 'accost',  
		// 'acceration', 'alias', 'smirk', 'divergents', 'hunger', 'games', 'key', 'piano', 'cup', 
		// 'morning', 'tissue', 'flask', 'fire','cord', 'floor', 'wood', 'headphones', 'earjack', 
		// 'heater', 'cooler', 'cologne', 'watch', 'apple', 'android', 'adidas', 'nike', 
		// 'acceration', 'cologne', 'watch', 'apple', 'android', 'exam', 'test', 'spider', 'arachnid', 
		// 'attack', 'warning', 'hat', 'snow', 'examine', 'sneaker', 'cover', 'candle', 'fire', 'acceration', 'alias', 'smirk',
		// 'cologne', 'watch', 'apple', 'android', 'adidas', 'nike', 'backpack', 'lipstick', 'exam', 'test', 'spider', 
		// 'arachnid', 'wow', 'attack', 'warning', 'hat', 'snow','examine', 'sneaker', 'cover', 'candle', 'fire', 
		// 'adidas', 'nike',,'nike', 'backpack', 'lipstick', 'divergents', 'hunger', 'games', 
		// 'key', 'piano', 'cup','ocean', 'camera', 'recording', 'precipitation', 
		// 'interesting', 'execution', 'socks','underwear', 'foot', 'portrait', 'teeth', 'chin', 'book', 'books', 
		// 'deorderant', 'brush', 'white board', 'chalk board', 'receive', 'port', 'deck', 'ship', 
		// 'acknowledge', 'realm', 'underwear', 'foot', 'portrait', 'teeth', 'chin', 'book', 'books', 
		// 'deorderant', 'brush', 'white board', 'chalk board', 'receive', 'port', 'deck', 'ship', 
		// 'acknowledge', 'realm', 'pound',' particular', 'jump', 'caresses', 'suburban', 'city',
		// 'liquid', 'solid', 'chicago', 'obstinate', 'hardest', 'softest', 'vocabulary', 'apathetic', 'arbitrary', 'arrogate'

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
				// put in the word that was randomly generated into the div
				$div.text(this.words[randomWordIndex]);
				// put those divs into the word section so they appear for the user
				$('.words').append($div);
				// put the one has appeared for the user into a seperate array so that it will not show up again
				this.wordsAppeared.push(this.words[randomWordIndex]);
				// remove from original array
				this.words.splice(randomWordIndex, 1);
				// then show the next word
				this.showWord()
			}
			// do this every 5 seconds
		}, 5000)

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

	// this function will pass in the user's input
	checkWord(userInput) {
		// loop thru current words that are in the array
		for(let i = 0; i < this.words.length; i++) {
			// check input against all the words on the screen
			if(userInput == this.words[i]) {
				console.log('these words match');
				// find the div on the page with that word in it, then remove it 
				const $wordDiv = $(`#wordDiv:contains(${this.words[i]})`);
				$wordDiv.css("backgroundColor", "red")
				// $wordDiv.remove();
				// $(userInput).val('');
				// console.log($wordDiv);
				// take it out of the original array
				this.words.splice(i, 1); 
				// $wordDiv:contains(this.words[i]).css('backgroundColor', 'red');
				// $(`#wordDiv:contains(this.words[i])`).css('backgroundColor', 'red'); 

			} else {
				console.log('this function is not working');
			}

		}
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
	$('.gamePlayAction').show();
	$('#valueOfUserInput').show();
});

$('#valueOfUserInput').on('keypress', function(e) {
	// keyCode for enter == 13
	let keyCode = (e.keyCode ? e.keyCode : e.which);

	if(keyCode == '13') {
		const $userInput = $('#valueOfUserInput').val();

		// console.log($userInput);
		game.checkWord($userInput);

		$('#valueOfUserInput').val('')
	}
	// console.log('hello you pressed the enter key');
	// check to see if the userInput == to the current word that is on the screen
});












