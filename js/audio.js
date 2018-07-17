	
	var tick = new Audio();
	tick.src = "audio/tick.wav";
	tick.volume = 0.1;

	var stopped = "stopped";
	createjs.Sound.registerSound("audio/stopped.wav", stopped);

	var lose = "lose";
	createjs.Sound.registerSound("audio/lose.wav", lose);

	var win = "win";
	createjs.Sound.registerSound("audio/win.wav", win);

	createjs.Sound.volume = 0.2;
	