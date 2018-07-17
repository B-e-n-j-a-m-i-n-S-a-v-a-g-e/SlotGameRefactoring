
var canvas = document.getElementById("theCanvas"),
    context = canvas.getContext("2d"),
    
    canvas2 = document.getElementById("theCanvas2"),
    context2 = canvas2.getContext("2d");

function initializeGame() {   	// BASIC INITIALIZATION AND RENDERING OF
								// SLOT MACHINE
	createStacks();
	renderReels();
	casing.drawCasing();
	addInitialValues();
	
	canvas2.addEventListener("mousemove",onMouseMove);
}
        
function update() {   			// MAIN LOOP OF GAME

    context.clearRect(0,0,canvas.width,canvas.height); 
    renderReels();
    moveReels();
    
	//window.requestAnimationFrame(update);
	window.setTimeout(update,10);
}

initializeGame();



