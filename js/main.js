// Javascript Code - For animations and user interaction

// Pause (in milliseconds) between successive tiles
var reloadSpeed;
var reloadSpeedBloom = 967.741935483;
var reloadSpeedTwilight = 875.912408759124087;
var reloadSpeedDont = 2000;

// Time (in milliseconds) for the tile to travel down the screen
var movementSpeed;
var movementSpeedBloom = 1940;
var movementSpeedTwilight = 5000;
var movementSpeedDont = 5000;

// Index variable - keeps track of current array position
var currentIndex = 0;

// Songs
var bloom = [
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 1, 0, 0, 0, 0, 0],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[1, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 1, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 1],
	[0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 1],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 1, 0],
	[1, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0],
	[1, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0],
	[0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 1, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0],
	[1, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 1, 0],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 1, 0, 1, 0, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 1, 0],
	[1, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 1, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
];
var twilight = [
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 1, 0, 0, 0, 0, 0],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[1, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 1, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 1],
	[0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 1],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 1, 0],
	[1, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0],
	[1, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0],
	[0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 1, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0],
	[1, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 1, 0],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 1, 0, 1, 0, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 1, 0],
	[1, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 1, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
];
var dont = [
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 1, 0, 0, 0, 0, 0],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[1, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 1, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 1],
	[0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 1],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 1, 0],
	[1, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0],
	[1, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 1, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0],
	[0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 1, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0],
	[1, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 1, 0],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 1, 0, 1, 0, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 1, 0],
	[1, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 1],
	[0, 1, 0, 1, 0, 0, 0, 0],
	[0, 0, 1, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 1],
];

// Other global variables
var end;
var selection;
var game;
var audio;
var score;

// Setting background image of game
function setBackground(song) {
	if (song == 'bloom') {
		$('#game_background').html("<img src='images/bloombackground.png'>");
	} else if (song == 'twilight') {
		$("#game_background").html("<img src='images/twilightbackground.png'>");
	} else if (song == 'dont') {
		$("#game_background").html("<img src='images/dontbackground.png'>");
	}
};

// Playing audio
function startSong(song) {
	if (song == 'bloom') {
		audio = new Audio('songs/bloom.mp3');
		audio.play();
	} else if (song == 'twilight') {
		audio = new Audio('songs/twilight.mp3');
		audio.play();
	} else if (song == 'dont') {
		audio = new Audio('songs/dont.mp3');
		audio.play();
	}
};

// Function that is repeatedly called and creates new tiles based off the song array using forEach loop
function updateGame(number) {
	if (currentIndex < end) {
		selection[currentIndex].forEach(function (item, index) {
			if (item == 1) {
				createTile(index);
			}
		});
	} else {
		stopGame();
	}
	currentIndex++;
};

function changeScore() {
	$("#game_score_content").html("Score: " + score);
}

// Creates a tile at 'place' and animates it to move downwards
function createTile(place) {
	
	// Creating the tile in a variable and adding it into the DOM
	var tile = $("<img src='images/bluetile.png'>");
	$('#game_tiles').append(tile);
	$(tile).addClass("tile w" + place);

	// Attaching a click listener to the tile
	$(tile).click(function() {
		score++;
		changeScore();
		$(tile).attr('src', 'images/yellowtile.png').stop().hide('fade', 500, function() {
			$(tile).remove();
		})
	})

	// Depending on its location, the tile will move differently
	switch(place) {
		case 0:
			$(tile).animate({top: '100%', width: '15%', left: '-3%'}, movementSpeed, 'linear');
			break;
		case 1:
			$(tile).animate({top: '100%', width: '15%', left: '10%'}, movementSpeed, 'linear');
			break;
		case 2:
			$(tile).animate({top: '100%', width: '15%', left: '23%'}, movementSpeed, 'linear');
			break;
		case 3:
			$(tile).animate({top: '100%', width: '15%', left: '36%'}, movementSpeed, 'linear');
			break;
		case 4:
			$(tile).animate({top: '100%', width: '15%', left: '49%'}, movementSpeed, 'linear');
			break;
		case 5:
			$(tile).animate({top: '100%', width: '15%', left: '62%'}, movementSpeed, 'linear');
			break;
		case 6:
			$(tile).animate({top: '100%', width: '15%', left: '75%'}, movementSpeed, 'linear');
			break;
		case 7:
			$(tile).animate({top: '100%', width: '15%', left: '88%'}, movementSpeed, 'linear');
			break;
	}
};

// Stop game loop and audio, wait a few seconds, and return to selection menu
function stopGame() {
	game.stop();
	setTimeout(function() {
		audio.pause();
		$('#game').fadeOut(1000);
		$('#select').fadeIn(1000);
	}, movementSpeed);
};

// Updating information panels
function onChange(index) {
    if (index ==  0) {
    	$('#select_info_content').html("THE BOYZ(더보이즈) - 2nd Single Album - Bloom Bloom");
    	$('#select_difficulty_content').html("Reload: " + reloadSpeedBloom.toFixed(3) + "&nbsp;&nbsp;&nbsp;&nbsp&nbsp Movement: " + movementSpeedBloom);
    } else if (index == 1) {
    	$('#select_info_content').html("ONEUS(원어스) - RAISE US - Twilight(태양이 떨어진다)");
    	$('#select_difficulty_content').html("Reload: " + reloadSpeedTwilight.toFixed(3) + "&nbsp;&nbsp;&nbsp;&nbsp&nbsp Movement: " + movementSpeedTwilight);
    } else if (index == 2) {
    	$('#select_info_content').html("Loco(로꼬) x Hwasa(화사) - The hyena on the keyboard - Don't(주지마)");
    	$('#select_difficulty_content').html("Reload: " + reloadSpeedDont.toFixed(3) + "&nbsp;&nbsp;&nbsp;&nbsp&nbsp Movement: " + movementSpeedDont);
    }
}

// Once jQuery is initialized, the following is run
(function($) {

	// Starting animation
	$('#dalcom').show('slide', { direction: 'down' }, 2000);
	$('#dalcom').hide('puff', 1000, function() {
		$('#logo').show('fade', 100).delay(1000).hide('scale', 500, function() {
			$('#loading').hide();
			$('#select').show('fade', 500);
		});
	});

	// Owl carousel initialization
	var carousel = $('#select_center');
	carousel.owlCarousel({
		loop: false,
		margin: 10,
		items: 5,
		center: true,
		lazyLoad: true,
		dots: false,
	});

	// Allowing clicking of carousel items
	$('.owl-item').click(function() {
            n = $(this).index();
            carousel.trigger('to.owl.carousel', n);
    });

	// Update the information panels when carousel position is changed
    onChange(0);
	carousel.on('changed.owl.carousel', function(event) {
	    onChange(event.item.index);
	});

	// Start button
	$('#select_start').click(function() {
		
		// Retriveing song selected and setting up global variables
		var song = $('.center').children().attr('id');
		if (song == 'bloom') {
			selection = bloom;
			reloadSpeed = reloadSpeedBloom;
			movementSpeed = movementSpeedBloom;
			end = bloom.length;
		} else if (song == 'twilight') {
			selection = twilight;
			reloadSpeed = reloadSpeedTwilight;
			movementSpeed = movementSpeedTwilight;
			end = twilight.length;
		} else if (song == 'dont') {
			selection = dont;
			reloadSpeed = reloadSpeedDont;
			movementSpeed = movementSpeedDont;
			end = dont.length;
		}
		setBackground(song);
		
		// Show game
		$('#select').fadeOut(500);
		$('#game').fadeIn(500);
		
		// Resetting other global variables
		currentIndex = 0;
		score = 0;
		changeScore();

		// Starting game loop - self correcting timer
		game = setTimer(function(drift) {
			updateGame();
		}, reloadSpeed);

		// Start the song after the first tile reaches the bottom
		setTimeout(function() { startSong(song) }, movementSpeed);
	})


})(jQuery);