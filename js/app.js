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

		// show the game in action
		// when user clicks the start button the first array of words will appear on the screen
		// floating from top to bottom
		$('.wrapper').show();

		// when the user hits enter
		$("#getvalue").on('keyup', function (e) {
			// keyCode == 13 for when users presses the 'enter' button
			if (e.keyCode == 13) {
				// get the value from the user if they hit enter
				let inputValue = $('#getvalue').val();
				// get each word for from the array
				$('.wordsscreen span').each(function() {
					// if the word that the user entered matches the word that is being shown
                	if(inputValue === $(this).text()){
                		$('#getvalue').val('');
                		// remove the word
                		$(this).remove();
                		// add their score to the score
                		this.score ++;
                		// $('.score').text(`Score: ${this.score}`);
                		$('.score').html('Score: ' + this.score)
                	} else {
                		// otherwise keep the word floating down from the top and take off one life
						// $('.error').show().delay(1000).fadeOut();
						// decrement their life by one
						// if their lives hit 0, game is over	
							// if user can selected 2 players, after the first user has not failed to complete the first
							// round, it will be player 2's turn and same situation will be so 

						// if user1 and user2 both complete all 20 levels without failing,
						// bring them to the states page, if user1 has completed all 20 levels in less time than
						// user2, user1 wins... if user2 has completed all 20 levels in less time than use1,
						// user2 wins
					}
				});
			}
		});

			(function(){
				$('#getvalue').focus();
			    let words = ['hello', 'goodbye', 'evening', 'morning', 'afternoon', 'tamagotchi',
				'coding', 'amazing', 'wonderful', 'immaculate', 'computer', 'general', 'assembly', 'crazy',
				'immaculate', 'bitter', 'iphone', 'time', 'coffee', 'javascript', 'ajax', 'protocol', 
				'water', 'ocean', 'prestidigitation', 'camera', 'recording', 'charger', 'liquid', 'keyboard', 'shoe', 'shoelace', 'belt', 'closet', 'inside', 'outside', 'exciting',
				'interesting', 'wow', 'according',
				'martin', 'specialist', 'bioinformatics', 'biology', 'chemistry', 'popcorn', 'potatoe', 'worse',
				'oblivious', 'young', 'innocent', 'because', 'because', 'constitute',
				'johnny', 'abject', 'aberration', 'abnegation', 'accost',  'acceration', 'alias', 'smirk', 'interesting', 
				'divergents', 'hunger', 'games', 'key', 'piano', 'cup', 'morning', 'afternoon', 'tissue', 'flask', 'fire',
				'cord', 'floor', 'wood',
				'headphones', 'earjack', 'heater', 'cooler', 'cologne', 'watch', 'apple', 'android', 'adidas', 'nike', 
				'nike', 'backpack', 'lipstick', 'exam', 'test', 'spider', 'arachnid', 'wow', 'attack', 'warning', 'hat', 'snow', 'examine', 'sneaker', 'cover', 'candle', 'fire',
				'abject', 'aberration', 'abnegation', 'accost',  'acceration', 'alias', 'smirk', 'interesting', 
				'divergents', 'hunger', 'games', 'key', 'piano', 'cup','ocean', 'prestidigitation', 'camera', 'recording', 'precipitation', 'interesting', 'execution', 'socks',
				'underwear', 'foot', 'portrait', 'teeth', 'chin', 'book', 'books', 'deorderant', 'brush', 'white board', 'chalk board', 'receive', 'port', 'deck', 'ship', 'acknowledgement', 'acknowledge', 'realm', 'interesting', 'pound',' particular', 'jump', 'caresses', 'suburban', 'city',
				'liquid', 'solid', 'chicago', 'obstinate', 'hardest', 'softest', 'vocabulary', 'apathetic', 'arbitrary', 'arrogate',
				], i = 0;
				// set the timer for how the words will be appearing on the screen
			    setInterval(function() {
					let elem = $("<span />", {
    					"class": "quote"
					});
						$('.wordsscreen').append(elem);
							elem.slideDown(function() {
    					$(this).html(words[i = (i + 1) % words.length]).animate({
        					top: '100%'
    			}, 4000);
				});
					// have the words float from top to bottom
					let position = $('span').position()
					// start at this position from the top of the screen
						// want to make it come from right to left
					if (position.top > 280) {
					    // have each word fade in as they come in from the top
					    	// want to make them come from right to left
					    $('.gameover').fadeIn();
					}
					// set a duration for 2 seconds
					}, 2000);

					})();

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
	// $('.userInput').show();
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


















