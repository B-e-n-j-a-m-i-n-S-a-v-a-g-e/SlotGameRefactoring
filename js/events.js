 var mouse = {
        x : undefined,
        y : undefined
 },
	
	 firstRound = true; 


canvas2.addEventListener("click",function onClick() {
    
	if (checkCollision(casing.startButton.x,340,casing.startButton.y,390)) {
		if (!spinStarted) {
			if (firstRound) {
				update();  					// IF FIRST PLAY, CALL UPDATE LOOP
			}
			window.setInterval(function playTicks() {

				if (!selectionsComplete) {
					if (parseInt(canvas.style.width) < 450) {
				
					} else {
   						tick.play();
					}
				}
			},200)
			spinStarted = true;
			firstRound = false;
			coinImage.src = "";				// REMOVES COINS IF WON
			casing.drawCasing();
			canvas2.addEventListener("click", clickButtons);
		} 
		
		if (selectionsComplete) {  			// IF ALL 5 SELECTIONS HAVE BEEN 
											// MADE, REEL IS RESET
			resetReels();	
		}
	}
});

function clickButtons() {						// WHEN BUTTON IS PRESSED, IF
												// NO VALUE HAS BEEN ASSIGNED  
		                                        // stopReel() IS CALLED
    
    if (checkCollision(35,107,123,197)) {   
			if (results[0] === undefined) {	
				stopReel(0);
			}
		} else if (checkCollision(123,205,123,197)) {
			if (results[1] === undefined) {
				stopReel(1);
		}
		} else if (checkCollision(215,292,123,197)) {
			if (results[2] === undefined) {
				stopReel(2);
			}
		} else if (checkCollision(307,390,123,197)) {
			if (results[3] === undefined) {
				stopReel(3);
			}
		} else if (checkCollision(395,477,123,197)) {
			if (results[4] === undefined) {
				stopReel(4);
			}
		} 
}                                                             

canvas2.addEventListener("mousemove",function onMouseMove (e) {
    
	var correctValue = 500,  
		currentValue = parseInt(canvas.style.width),
		supplement = correctValue / currentValue; 	  // USED TO CALIBRATE  
												  	  // MOUSE X AND Y WITH	 	
	if (e.offsetX) {								  // RESIZED SCREEN
		mouse.x = e.offsetX * supplement;
        mouse.y = e.offsetY * supplement;
	}
    else if(e.layerX) {
        mouse.x = e.layerX * supplement;
        mouse.y = e.layerY * supplement;
    }
});
