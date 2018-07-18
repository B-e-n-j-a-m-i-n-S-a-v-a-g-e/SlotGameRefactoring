
var results = [];

function evaluateResults() { 	// GO THROUGH EACH ELEMENT OF THE RESULTS ARRAY
							 	// AND IF SYMBOL IS FOUND, INCREMENT  
	var cherries = 0,			// CORRESPONDING VARIABLE AND SET INDEX TO EMPTY 
		bells = 0,				// STRING
		bars = 0;
	
    
	for (var i = 0; i < results.length; i++) {  
												
		if (results[i] == "CHERRIES") {
			cherries++;
		} else if (results[i] == "BELL") {
			bells++;
		} else if (results[i] == "BAR") {
			bars++;
		}
        
        results[i] = "";
	}
	
	countSymbols(cherries,bells,bars);
	selectionsComplete = true;	
}

function countSymbols(cherries,bells,bars) {   	  // COUNTS # OF SYMBOLS PASSED 	
					                              // IN AS ARGUMENTS THEN PLAYS
    			                                  // WIN/LOSE AUDIO AND 
                                                 // OUTPUTS PRIZE VALUE TO SCREEN                                                  
	if (cherries < 3 && bells < 3 && bars < 3) {  					  
    	context2.strokeText("YOU LOSE!",casing.screen.x + 120,
        casing.screen.y + 70);
		createjs.Sound.play(lose);
	} else {
		createjs.Sound.play(win);

		context2.drawImage(coinImage,20,370,300,300);
        context2.drawImage(coinImage,200,370,300,300);
	}
		
	//OUTPUT RESULTS FOR CHERRIES

	if (cherries === 3) {
    	context2.strokeText("3 CHERRIES!",casing.screen.x + 110,
				casing.screen.y + 70);
	} else if (cherries === 4) {
    	context2.strokeText("4 CHERRIES!",casing.screen.x + 110,
				casing.screen.y + 70);
	} else if (cherries === 5)  {
    	context2.strokeText("5 CHERRIES!",casing.screen.x + 110,
				casing.screen.y + 40);
		context2.strokeText("JACKPOT!",casing.screen.x + 140, 
				casing.screen.y + 90);
	}
	
	// OUTPUT RESULTS FOR BELLS
	
	if (bells === 3) {
    	context2.strokeText("3 BELLS!",casing.screen.x + 140,
				casing.screen.y + 70);
	} else if (bells === 4) {
    	context2.strokeText("4 BELLS!",casing.screen.x + 140, 
				casing.screen.y + 70);
	} else if (bells === 5) {
    	context2.strokeText("5 BELLS!",casing.screen.x + 147,
				casing.screen.y + 40);
		context2.strokeText("JACKPOT!",casing.screen.x + 140,
				casing.screen.y + 90);
	}
	
	// OUTPUT RESULTS FOR BARS
	
	if (bars === 3) {
    	context2.strokeText("3 BARS!",casing.screen.x + 140,
				casing.screen.y + 70);
	} else if (bars === 4) {
    	context2.strokeText("4 BARS!",casing.screen.x + 140,
				casing.screen.y + 70);
	} else if (bars === 5) {
    	context2.strokeText("5 BARS!",casing.screen.x + 152,
				casing.screen.y + 40);
		context2.strokeText("JACKPOT!",casing.screen.x + 140,
				casing.screen.y + 90);
	}	
}
