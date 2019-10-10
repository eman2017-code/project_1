//create game object that will hold the data for the players
const game = {
	round: 1, 
	timer: null,
	score: 0,
	gamerTime: null,
	isGameOver: false, // this is the initial state of the game
	unUsedWords: [], // copy of the words array
	usedWords: [], // words that have appeared in the screen
	words: [
		'afternoon', 'tamagotchi', 'that', 'this',
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
		'interesting', 'execution', 'socks', 'teeth', 'chin', 'book', 'books', 'deodorant', 'receive', 
		'port', 'deck', 'ship', 'acknowledge', 'underwear', 'foot', 'portrait', 'brush', 
		'realm', 'pound', 'jump', 'caresses', 'suburban', 'city','liquid', 'solid', 'chicago', 
		'obstinate', 'hardest', 'softest', 'vocabulary', 'apathetic', 'arbitrary', 'arrogate', 'crazy', 'zoo', 'transcript', 'other', 
		'fast', 'patient', 'medical', 'pneumonia', 'good', 'bad', 'kind', 'dictionary', 'job', 'server', 'serve', 'red', 'orange',
		'yello', 'green', 'listening', 'not', 'that', 'much', 'money', 'random', 'randomly', 'donut', 'all', 'our', 'names', 'eggo',
		'to', 'hat', 'sorry', 'illusion', 'glasses', 'weird', 'boot', 'bounce', 'buongiorno', 'amenable', 'antithesis',
		'ago','agree','ahead','aid','air','airplane','alike','alive','all','allow','almost','alone','along','aloud',
		'alphabet','already', 'also','although','am','among','amount','ancient','angle','angry',
  		'animal','announced','another','answer','ants','any','anybody','anyone','anything','anyway','anywhere',
  		'apart','apartment','appearance','apple','applied','appropriate','are','area','arm',
  		'army','around','arrange','arrangement','arrive','arrow','art','article','as','aside','ask','asleep',
  		'at','ate','atmosphere','atom','atomic','attached','attack','attempt',
  		'attention','audience','author','automobile','available','average','avoid','aware',
  		'away','baby','back','bad','badly','bag','balance','ball',
  		'balloon','band','bank','bar','bare','bark','barn','base',
  		'baseball','basic','basis','basket','bat','battle','be','bean',
  		'bear','beat','beautiful','beauty','became','because','become','becoming',
  		'bee','been','before','began','beginning','begun','behavior','behind',
  		'being','believed','bell','leader','leaf','learn','least','leather','leave','leaving',
  		'led','left','leg','length','lesson','let','letter','level',
  		'library','lie','life','lift','light','like','likely','limited',
  		'line','lion','lips','liquid','list','listen','little','live',
  		'living','load','local','locate','location','log','lonely','long',
  		'longer','look','loose','lose','loss','lost','lot','loud',
  		'love','lovely','low','lower','luck','lucky','lunch','morning','most','mostly','mother',
  		'motion','motor','mountain','mouse','mouth','move','movement','movie',
  		'moving','mud','muscle','music','musical','must','my','myself',
  		'mysterious','nails','name','nation','national','native','natural','naturally',
  		'political','pond','pony','pool',
  		'poor','popular','population','porch','port','position','positive','possible','safe','safety','said','sail',
  		'sale','salmon','salt','same','sand','sang','sat','satellites',
  		'satisfied','save','saved','saw','say','scale','scared', 'year','yellow','yes','yesterday','yet','you','young','younger',
  		'your','yourself','youth','zero','zoo'
	],

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
		// this.showWord($gamerDifficulty);
	},

	//make timer function
	setTimer() {
				// the timer will start to count from 0 up
		const interval = setInterval(() => {
			$timer = $('.timer');
			this.timer ++;
			$timer.html('Timer: ' + this.timer)
			// console.log(this.timer);
			// set a duration for 1 second for the timer
			if($('.wordDiv').length === 15) {
				clearInterval(interval);
			}
		}, 1000);
	},
 
	startGame() {

		const $gamerDifficulty = $('#difficultyButton').val().toUpperCase();

		// have the words show up slower if the user chooses easy
		if($('#difficultyButton').val() == 'easy') {
			this.gamerTime += 4000;
		} else if ($('#difficultyButton').val() == 'medium') {
			this.gamerTime += 2000;
		} else {
			this.gamerTime += 1000;
		}

		// call timer function in here

		this.unUsedWords = this.words.slice();
		this.setTimer();
		this.showInfo();
		this.showWord($gamerDifficulty);
	},

	showWord() {
		// get the input from the user 

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

				$div.show('fast');

				// remove it from the words array
				const wordOnScreen = this.unUsedWords.splice(randomWordIndex, 1)[0];
				this.usedWords.push(wordOnScreen);
				// then show the next word
				this.showWord();
				// endgame
				this.endGame();
			}
		}, this.gamerTime)
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
				// add one to the score
				this.score += 1;
				// make this viewable to the user 
				this.showInfo();
				//
				$wordDiv.remove(); 
			} 
		}
	},

	endGame() {
		// get the gamerTag the user entered originally 
		const $gamerTag = $('#input-box').val();

		// when one of the divs hit the bottom of the page the game is over
		if($('.wordDiv').length == 17) {
			// make an h1 tag
			const $h1 = $('<h1></h1>');
			// get the div
			const $div = $('.gameOver')
			// have the h1 say this
			$h1.html($gamerTag + ': You scored ' + this.score)
			// append the h1 to the div
			$div.append($h1);
			// change the state of the game
			this.isGameOver	= true;

			// make the input box go away
			$('#valueOfUserInput').hide();
			this.restartGame();
			// console.log(this.restartGame());
		} 
	}, 

	restartGame() {
		// make a button with the id startOver
		const $startOverButton = $('<button id="startOverButton">START OVER</button>');
		// put in the div
		$('.startOver').append($startOverButton);
		this.score = 0;
		console.log(this.score);
		// empty out the words that are on the screen
		$('.wordDiv').empty();
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
	$('.createProfile').css('display', 'block');
});

$('.startButton').on('click', () => {
	game.startGame();
	$('.startButton').hide();
	$('.gamePlayAction').css('display', 'block');
	$('#userInputSection').css('display', 'block');
});

$('#valueOfUserInput').on('keypress', function(e) {
	let keyCode = e.keyCode;
	const $userInput = $('#valueOfUserInput').val();
	if(keyCode == '13') {
		// invoke the checkWord method
		game.checkWord($userInput);
		$('#valueOfUserInput').val('');
	} 
});

// $('#startOverButton').on('click', () => {
// 	this.restartGame();
// });












