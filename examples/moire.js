
var text = "Time present and time past Are both perhaps present in time future And time future contained in time past. If all time is eternally present All time is unredeemable. What might have been is an abstraction Remaining a perpetual possibility Only in a world of speculation.  What might have been and what has been Point to one end, which is always present. Footfalls echo in the memory Down the passage which we did not take Towards the door we never opened Into the rose-garden. My words echo Thus, in your mind. But to what purpose Disturbing the dust on a bowl of rose-leaves I do not know. Other echoes Inhabit the garden. Shall we follow? Quick, said the bird, find them, find them, Round the corner. Through the first gate, Into our first world, shall we follow The deception of the thrush? Into our first world. There they were, dignified, invisible, Moving without pressure, over the dead leaves, In the autumn heat, through the vibrant air, And the bird called, in response to The unheard music hidden in the shrubbery, And the unseen eyebeam crossed, for the roses Had the look of flowers that are looked at. There they were as our guests, accepted and accepting. So we moved, and they, in a formal pattern, Along the empty alley, into the box circle, To look down into the drained pool. Dry the pool, dry concrete, brown edged, And the pool was filled with water out of sunlight, And the lotos rose, quietly, quietly, The surface glittered out of heart of light, And they were behind us, reflected in the pool. Then a cloud passed, and the pool was empty. Go, said the bird, for the leaves were full of children, Hidden excitedly, containing laughter. Go, go, go, said the bird: human kind Cannot bear very much reality. Time past and time future What might have been and what has been Point to one end, which is always present."
var SQUARE_SIZE = 10;

function sleep(ms) {
    var unixtime_ms = new Date().getTime();
    while(new Date().getTime() < unixtime_ms + ms) {}
}

var rotate = function(fg, i, seed) {
	fg[i].setAttribute("transform","rotate(-" + i*seed + " 700 700)");
}

var update = function() {

	fg = document.getElementsByClassName('fg');
	var seed = Math.random();
	for (var i=0; i<fg.length; i++) {
		var timer = setInterval(rotate, 0, fg, i, seed);
	}
}

onPageLoad(function(event) {

	var x_max = size.width;
	var y_max = size.height;
	var graph = $('#bitmap').add('svg').attr('width', x_max).attr('height', y_max);

	for (var i=0; i<x_max; i+=SQUARE_SIZE) {
		for (var j=0; j<y_max; j+=SQUARE_SIZE) {
			graph.rect().class("bg").x(i).y(j).width(SQUARE_SIZE - 2).height(SQUARE_SIZE - 2);
			graph.rect().class("fg").x(i).y(j).width(SQUARE_SIZE - 2).height(SQUARE_SIZE - 2).transform("rotate(-" + i + " " + x_max/2 + " " + y_max/2 + ")");
		}
	}

	var timer = setInterval(update, 1000);

});