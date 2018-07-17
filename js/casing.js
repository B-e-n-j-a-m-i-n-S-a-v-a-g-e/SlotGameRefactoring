
var cherries = new Image();
cherries.src = "images/cherries2.png";

var bar = new Image();
bar.src = "images/bar.png";

var bell = new Image();
bell.src = "images/bell.png";

var coinImage = new Image();
coinImage.src = "images/coins.png";

var casing = {
	
	cover : {
		x: 0,
		y: 0,
		width : canvas.width,
		height : canvas.height
	},
	screen : {
		x : 20,
		y : 10,
		width : 460,
		height : 110
	},
	hole : {
    	x: 20,
		y: 210,
		width: 460,
		height: 120
	},
	startButton : {
		x: 140,
		y: 340,
		width: 205,
		height: 45
	},
	drawer : {
		x: 20,
		y: 410,
		width: 460,
		height: 120
	},
	drawCasing : function() {
	
		this.drawCover();
		this.drawShadows();
		this.drawScreen();
		this.drawButtons();
		this.drawDividers();
	},
	drawCover : function() {
    
		context2.clearRect(0,0,canvas2.width,canvas2.height);
		context2.fillStyle = "#f00";
		context2.fillRect(this.cover.x,this.cover.y,this.cover.width,
				this.cover.height);
		context2.clearRect(this.hole.x,this.hole.y,this.hole.width,
				this.hole.height);
		context2.save();
		context2.strokeStyle = "#ffd700";
		context2.lineWidth = 7;
		context2.strokeRect(this.hole.x -2,this.hole.y - 2, 
				this.hole.width + 4,this.hole.height + 4);
		context2.restore();

		context2.fillStyle = "#fff";
		context2.fillRect(this.drawer.x,this.drawer.y,this.drawer.width,
				this.drawer.height);
		context2.fillStyle = "#0f0";
		context2.fillRect(this.startButton.x,this.startButton.y,
				this.startButton.width,this.startButton.height);
		context2.fillStyle = "#000";
		context2.font = "40px Verdana";
		context2.fillText("SPIN",this.startButton.x + 55,
				this.startButton.y + 38);
	},
	drawButtons : function() {
	
        var leftButtonShadowX = 70,
            leftButtonShadowY = 165;
                    
        var leftButtonX = 70,
            leftButtonY = 160;
            
        var buttonRadius = 30,
            buttonStartAngle = 0,
            buttonEndAngle = Math.PI * 2;

 
        // BUTTON SHADOWS
        
        for (var i = 0; i < 5; i++) {
            
            context2.beginPath();
            context2.arc(leftButtonShadowX + (90 * i) , leftButtonShadowY, buttonRadius, buttonStartAngle, buttonEndAngle);
            context2.closePath();
            context2.fill();    
        }
            
        // ACTUAL BUTTONS
        
        context2.fillStyle = "#fff";
        
       for (var i = 0; i < 5; i++) {
            
            context2.beginPath();
            context2.arc(leftButtonX + (90 * i) , leftButtonY, buttonRadius, buttonStartAngle, buttonEndAngle);
            context2.closePath();
            context2.fill();    
        }

	},
	drawDividers : function() {
	
        leftDividerX = 115;
        dividerTop = 210;
        dividerBottom = 330;
        
        context2.beginPath();
        context2.lineWidth = 1;
        
        for (var i = 0; i < 4; i++) {
                
            context2.moveTo(leftDividerX + (90 * i), dividerTop);
            context2.lineTo(leftDividerX + (90 * i), dividerBottom);
            context2.stroke();
        }
        
        /*
		context2.beginPath();
		context2.lineWidth = 1;
		context2.moveTo(115,210);
		context2.lineTo(115,330);
		context2.closePath();
		context2.stroke();

		context2.moveTo(205,210);
		context2.lineTo(205,330);
		context2.stroke();

		context2.moveTo(295,210);
		context2.lineTo(295,330);
		context2.stroke();

		context2.moveTo(385,210);
		context2.lineTo(385,330);
		context2.stroke();
        */
        
	},
	drawScreen : function() {
	
		context2.save();
		context2.fillStyle = "#fff";
		context2.fillRect(this.screen.x,this.screen.y,this.screen.width,
				this.screen.height);
		context2.strokeStyle = "#ffd700";
		context2.lineWidth = 7;
		context2.strokeRect(this.screen.x -2,this.screen.y - 2, 
				this.screen.width + 4,this.screen.height + 4);
		context2.restore();
	},
	drawShadows : function() {   			// DRAWS SHADOWS FOR 3-D EFFECT 
											// ON REELS
		context2.save();
		context2.globalAlpha = 0.4;
		context2.fillStyle = "#111";
		context2.fillRect(20,210,460,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.4;
		context2.fillStyle = "#111";
		context2.fillRect(20,320,460,10);
		context2.restore();

		context2.save();
		context2.globalAlpha = 0.3;
		context2.fillStyle = "#aaa";
		context2.fillRect(20,220,460,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.3;
		context2.fillStyle = "#aaa";
		context2.fillRect(20,310,460,10);
		context2.restore();
	},
    
	clearScreen : function() {
		
		context2.clearRect(this.screen.x,this.screen.y,this.screen.width,
				this.screen.height);
		this.drawScreen();
	}
};