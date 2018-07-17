var canvas = document.getElementById("theCanvas"),
    context = canvas.getContext("2d"),
    
    canvas2 = document.getElementById("theCanvas2"),
    context2 = canvas2.getContext("2d");


    var newGameWidth, newGameHeight;
    var game = {
            element: document.getElementById("container"),
            width: 650,
            height: 650,
            safeWidth: 700,
            safeHeight: 700
    },

    resizeGame = function () {				// RESIZES CANVASES TO FIT ANY 
											// SIZE SCREEN AND CENTERS THEM 
											// HORIZONTALLY AND VERTICALLY
   		var viewport, newGameX, newGameY;

        viewport = {
        	width: window.innerWidth,
            height: window.innerHeight
        };

        if (game.height / game.width > viewport.height / viewport.width) {
        	if (game.safeHeight / game.width > viewport.height / 
					viewport.width) {
  
            	newGameHeight = viewport.height * game.height / 
					game.safeHeight;
                newGameWidth = newGameHeight * game.width / game.height;
            } else {

                newGameWidth = viewport.width;
                newGameHeight = newGameWidth * game.height / game.width;
            }
        } else {
            if (game.height / game.safeWidth > viewport.height / 
					viewport.width) {
   
            	newGameHeight = viewport.height;
                newGameWidth = newGameHeight * game.width / game.height;
            } else {

                newGameWidth = viewport.width * game.width / game.safeWidth;
                newGameHeight = newGameWidth * game.height / game.width;
                }
            }

			canvas.style.width = newGameWidth + "px";
            canvas.style.height = newGameHeight + "px";
			canvas2.style.width = newGameWidth + "px";
            canvas2.style.height = newGameHeight + "px";

            newGameX = (viewport.width - newGameWidth) / 2;
            newGameY = (viewport.height - newGameHeight) / 2;

            canvas.style.marginLeft = newGameY + "px " + newGameX + "px";
            canvas.style.marginBottom = newGameY + "px " + newGameX + "px";
		    canvas2.style.marginLeft = newGameY + "px " + newGameX + "px";
            canvas2.style.marginBottom = newGameY + "px " + newGameX + "px";
		
			canvas.style.left = (viewport.width / 2) - 
					(parseInt(canvas.style.width) / 2);
			canvas2.style.left = (viewport.width / 2) - 
					(parseInt(canvas2.style.width) / 2);
			canvas.style.top = (viewport.height / 2) - 
					(parseInt(canvas.style.height) / 2);
			canvas2.style.top = (viewport.height / 2) - 
					(parseInt(canvas2.style.height) / 2);
        };

    window.addEventListener("resize", resizeGame);
    resizeGame();