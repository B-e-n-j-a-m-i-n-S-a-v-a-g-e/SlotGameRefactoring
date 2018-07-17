
var stacks = [
        [],
        [],
        [],
        [],
        []
    ],
	randomValue = 0,
	selectionsComplete = false,
	spinStarted = false;

function Reel(x,y,width,height) {  						 // REEL CONSTRUCTOR
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.vy = 30;
}

function renderReels() {
    
													 // DRAWING STATIC REELS 
	if (!spinStarted && firstRound) {				 // BEFORE SPINNING	
		
		context.drawImage(cherries,stacks[0][1].x,stacks[0][1].y,
				stacks[0][1].width,stacks[0][1].height);
		context.drawImage(bell,stacks[1][0].x,stacks[1][0].y,
				stacks[1][0].width,stacks[1][0].height);
		context.drawImage(bar,stacks[2][0].x,stacks[2][0].y,
				stacks[2][0].width,stacks[2][0].height);
		context.drawImage(cherries,stacks[3][0].x,stacks[3][0].y,
				stacks[3][0].width,stacks[3][0].height);
		context.drawImage(bar,stacks[4][0].x,stacks[4][0].y,
				stacks[4][0].width,stacks[4][0].height);
		
	} else {								  		 // DRAWING REELS DURING 	
											  		 // SPINNING PHASE	
		for (var i in stacks) {

			context.drawImage(bell,stacks[i][0].x,stacks[i][0].y,
					stacks[i][0].width,stacks[i][0].height);
			context.drawImage(bar,stacks[i][1].x,stacks[i][1].y,
					stacks[i][1].width,stacks[i][1].height);
			context.drawImage(cherries,stacks[i][2].x,stacks[i][2].y,
					stacks[i][2].width,stacks[i][2].height);
		}
	}
}

function addInitialValues() {		 // GIVE THE GAME DEFAULT VALUES ON LOAD
	
	if (!spinStarted && firstRound) {
		
		context.drawImage(cherries,25,220,80,100);
		context.drawImage(bar,120,220,80,100);
		context.drawImage(bell,210,215,80,100);
		context.drawImage(bell,300,215,80,100);
		context.drawImage(cherries,390,220,80,100);
		
		window.requestAnimationFrame(addInitialValues);
	}
}

function createStacks() {   	// POPULATE EACH ARRAY IN STACKS ARRAY WITH 
								// NEW REEL
    for (var i in stacks) {
        stacks[i].push(new Reel(i * 90 + 30,100, 80, 100));
        stacks[i].push(new Reel(i * 90 + 30,230, 80, 100));
        stacks[i].push(new Reel(i * 90 + 30,350, 80, 100));
    }
} 

function moveReels() {							// APPLY VELOCITY ON Y AXIS
	
    for (var i in stacks) {
        stacks[i][0].y += stacks[i][0].vy;
        stacks[i][1].y += stacks[i][1].vy;  
        stacks[i][2].y += stacks[i][2].vy; 
        
        if (stacks[i][0].y > 400) {			   // IF REEL Y VALUE IS GREATER 
            stacks[i][0].y = 40;   			   // THAN 400 SET IT BACK TO 40 
        }									 // CREATING A "SPINNING" EFFECT
        if (stacks[i][1].y > 400) {
            stacks[i][1].y = 40;   
        }
        if (stacks[i][2].y > 400) {
            stacks[i][2].y = 40;   
        }
    }
}

function stopReel(num) { 						  // SET THE 3 REEL VELOCITIES 
												  // TO 0 AND CHOOSES VALUE
	randomValue = Math.floor(Math.random() * 3);  // ACCORDING TO A RANDOM
												  // NUMBER
	stacks[num][0].vy = 0;
	stacks[num][1].vy = 0;
	stacks[num][2].vy = 0;
	
	switch(randomValue) {
			
		case 0:
		stacks[num][0].y = 100;
		stacks[num][1].y = 220;   // BAR
		stacks[num][2].y = 340;
		results[num] = "BAR";	
		break;
			
		case 1:
		stacks[num][2].y = 100;
		stacks[num][0].y = 220;  // BELL
		stacks[num][1].y = 340;
		results[num] = "BELL";	
		break;	
		
		case 2:
		stacks[num][1].y = 100;  
		stacks[num][2].y = 220;  // CHERRIES
		stacks[num][0].y = 340; 
		results[num] = "CHERRIES";	
		break;			
			
	}
	
	createjs.Sound.play(stopped);
	
	if (results.length === 5) {
		evaluateResults();
	}
}

function resetReels() {   		       // RESETS VALUES FOR SUBSEQUENT SPINS
	
	spinStarted = false;
	firstRound = false;
	selectionsComplete = false;
	randomValue = 0;
	stacks = [
        [],
        [],
        [],
        [],
        []
    ];
	results = [];	
	createStacks();
	renderReels();
	casing.clearScreen();
}