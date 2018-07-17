
var results = [];

function evaluateResults() { 	// GO THROUGH EACH ELEMENT OF THE RESULTS ARRAY
							 	// AND IF SYMBOL IS FOUND, INCREMENT  
	var cherries = 0,			// CORRESPONDINGVARIABLE AND SET INDEX TO EMPTY 
		bells = 0,				// STRING
		bars = 0;
	
	for (var i = 0; i < results.length; i++) {  
												
		if (results[i].indexOf("CHERRIES") > -1) {
			cherries++;
			results[i] = "";
		} else if (results[i].indexOf("BELL") > -1) {
			bells++;
			results[i] = "";
		} else if (results[i].indexOf("BAR") > -1) {
			bars++;
			results[i] = "";
		}
	}
	
	countSymbols(cherries,bells,bars);
	selectionsComplete = true;	
}

function countSymbols(cherries,bells,bars) {   	  // COUNTS # OF SYMBOLS PASSED 	
												  // IN AS ARGUMENTS THEN PLAYS  
	if (cherries < 3 && bells < 3 && bars < 3) {  // WIN/LOSE AUDIO AND 
		context2.save();						  // OUTPUTS PRIZE VALUE TO 
		context2.strokeStyle = "#000";			  // SCREEN
    	context2.font = "40px Verdana";
    	context2.strokeText("YOU LOSE!",casing.screen.x + 120,
				casing.screen.y + 70);
		context2.restore();
		createjs.Sound.play(lose);
	} else {
		createjs.Sound.play(win);
		coinImage.src = "images/coins.png";
		context2.drawImage(coinImage,0,410,500,500);
	}
		
	//OUTPUT RESULTS FOR CHERRIES

	if (cherries === 3) {
		context2.save();
		context2.strokeStyle = "#000";
    	context2.font = "40px Verdana";
    	context2.strokeText("3 CHERRIES!",casing.screen.x + 110,
				casing.screen.y + 70);
		context2.restore();
	} else if (cherries === 4) {
		context2.save();
		context2.strokeStyle = "#000";
    	context2.font = "40px Verdana";
    	context2.strokeText("4 CHERRIES!",casing.screen.x + 110,
				casing.screen.y + 70);
		context2.restore();	
	} else if (cherries === 5)  {
		context2.save();
		context2.strokeStyle = "#000";
    	context2.font = "40px Verdana";
    	context2.strokeText("5 CHERRIES!",casing.screen.x + 110,
				casing.screen.y + 40);
		context2.strokeText("JACKPOT!",casing.screen.x + 140, 
				casing.screen.y + 90);
		context2.restore();	
	}
	
	// OUTPUT RESULTS FOR BELLS
	
	if (bells === 3) {
		context2.save();
		context2.strokeStyle = "#000";
    	context2.font = "40px Verdana";
    	context2.strokeText("3 BELLS!",casing.screen.x + 140,
				casing.screen.y + 70);
		context2.restore();
	} else if (bells === 4) {
		context2.save();
		context2.strokeStyle = "#000";
    	context2.font = "40px Verdana";
    	context2.strokeText("4 BELLS!",casing.screen.x + 140, 
				casing.screen.y + 70);
		context2.restore();	
	} else if (bells === 5) {
		context2.save();
		context2.strokeStyle = "#000";
    	context2.font = "40px Verdana";
    	context2.strokeText("5 BELLS!",casing.screen.x + 147,
				casing.screen.y + 40);
		context2.strokeText("JACKPOT!",casing.screen.x + 140,
				casing.screen.y + 90);
		context2.restore();	
	}
	
	// OUTPUT RESULTS FOR BARS
	
	if (bars === 3) {
		context2.save();
		context2.strokeStyle = "#000";
    	context2.font = "40px Verdana";
    	context2.strokeText("3 BARS!",casing.screen.x + 140,
				casing.screen.y + 70);
		context2.restore();
	} else if (bars === 4) {
		context2.save();
		context2.strokeStyle = "#000";
    	context2.font = "40px Verdana";
    	context2.strokeText("4 BARS!",casing.screen.x + 140,
				casing.screen.y + 70);
		context2.restore();
	} else if (bars === 5) {
		context2.save();
		context2.strokeStyle = "#000";
    	context2.font = "40px Verdana";
    	context2.strokeText("5 BARS!",casing.screen.x + 152,
				casing.screen.y + 40);
		context2.strokeText("JACKPOT!",casing.screen.x + 140,
				casing.screen.y + 90);
		context2.restore();
	}	
}
