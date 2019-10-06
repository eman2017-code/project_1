//create game object that will hold the data for the players
const game = {
	round: 1, 
	lives: 5,
	timer: null,
	score: 0,
	level: 5000,
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

		// the words will start from top to bottom
		// console.log(this.words[0]);
		$('.gamePlayAction').html(this.words[0]);
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

	// var score=0
	// 			$("#getvalue").on('keyup', function (e) {
	// 			    if (e.keyCode == 13) {
	// 			        var inputValue=$('#getvalue').val();
	// 			        $('.wordsscreen span').each(function (){
 //                  if(inputValue === $(this).text()){
 //                      $('#getvalue').val('');
 //                      $(this).remove();
 //                      $('.score-board b').text(score+=1);
 //                  }
	// 						else{
	// 							$('.error').show().delay(1000).fadeOut();
	// 						}
	// 						});
	// 			    }
	// 			});
				

	// 		(function(){
	// 			$('#getvalue').focus();
	// 		    var words = [
	// 		        "awesome",
	// 		        "judge",
	// 		        "cool",
	// 		        "fan",
	// 		        "foo", 
	// 		        "bar", 
	// 		        "baz", 
	// 		        "chuck", 
	// 		        "apple", 
	// 		        "mango", 
	// 		        "boy", 
	// 		        "toy", 
	// 		        "basic",
	// 		        "enclose",
	// 				'fiji',
	// 				'unwear',
	// 				'dardic',
	// 				'leadier',
	// 				'blow',
	// 				'cry',
	// 				'alexandrian',
	// 				'allentown',
	// 				'idolist',
	// 				'convexedness',
	// 				'handshake',
	// 				'cooner',
	// 				'thessalus',
	// 				'in'
	// 		        ], i = 0;
	// 		    setInterval( function(){
	// 		    	// generatign new span element
	// 		    	 var elem = $("<span />", {
	// 				    "class": "quote"
	// 				  });
	// 				  $('.wordsscreen').append(elem);
	// 		        elem.slideDown(function(){
	// 		            $(this).html(words[i=(i+1)%words.length]).animate({
	// 		            	top:'100%'
	// 		            }, 4000);
	// 		        })
	// 		        var position = $('span').position()
	// 			    if(position.top > 280){
	// 			    	$('.gameover').fadeIn();
	// 			    }

	// 		    }, 2000);
			        
	// 		})();


















