
var cherries = new Image();
cherries.src = "images/cherries.png";

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
	
		context2.fillStyle = "#000";				// BLACK SHADOWS
		context2.beginPath();
		context2.arc(70,165,30,0,Math.PI * 2);
		context2.closePath();
		context2.fill();
		context2.beginPath();
		context2.arc(160,165,30,0,Math.PI * 2);
		context2.closePath();
		context2.fill();
		context2.beginPath();
		context2.arc(250,165,30,0,Math.PI * 2);
		context2.closePath();
		context2.fill();
		context2.beginPath();
		context2.arc(340,165,30,0,Math.PI * 2);
		context2.closePath();
		context2.fill();
		context2.beginPath();
		context2.arc(430,165,30,0,Math.PI * 2);
		context2.closePath();
		context2.fill();

		context2.fillStyle = "#fff";				// ACTUAL BUTTONS
		context2.beginPath();
		context2.arc(70,160,30,0,Math.PI * 2);
		context2.closePath();
		context2.fill();

		context2.beginPath();
		context2.arc(160,160,30,0,Math.PI * 2);
		context2.closePath();
		context2.fill();

		context2.beginPath();
		context2.arc(250,160,30,0,Math.PI * 2);
		context2.closePath();
		context2.fill();

		context2.beginPath();
		context2.arc(340,160,30,0,Math.PI * 2);
		context2.closePath();
		context2.fill();

		context2.beginPath();
		context2.arc(430,160,30,0,Math.PI * 2);
		context2.closePath();
		context2.fill();
	},
	drawDividers : function() {
	
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
		context2.fillRect(20,210,95,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.4;
		context2.fillStyle = "#111";
		context2.fillRect(20,320,95,10);
		context2.restore();

		context2.save();
		context2.globalAlpha = 0.3;
		context2.fillStyle = "#aaa";
		context2.fillRect(20,220,95,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.3;
		context2.fillStyle = "#aaa";
		context2.fillRect(20,310,95,10);
		context2.restore();

		context2.save();
		context2.globalAlpha = 0.4;
		context2.fillStyle = "#111";
		context2.fillRect(115,210,90,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.4;
		context2.fillStyle = "#111";
		context2.fillRect(115,320,90,10);
		context2.restore();

		context2.save();
		context2.globalAlpha = 0.3;
		context2.fillStyle = "#aaa";
		context2.fillRect(115,220,90,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.3;
		context2.fillStyle = "#aaa";
		context2.fillRect(115,310,90,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.4;
		context2.fillStyle = "#111";
		context2.fillRect(205,210,90,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.4;
		context2.fillStyle = "#111";
		context2.fillRect(205,320,90,10);
		context2.restore();

		context2.save();
		context2.globalAlpha = 0.3;
		context2.fillStyle = "#aaa";
		context2.fillRect(205,220,90,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.3;
		context2.fillStyle = "#aaa";
		context2.fillRect(205,310,90,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.4;
		context2.fillStyle = "#111";
		context2.fillRect(295,210,90,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.4;
		context2.fillStyle = "#111";
		context2.fillRect(295,320,90,10);
		context2.restore();

		context2.save();
		context2.globalAlpha = 0.3;
		context2.fillStyle = "#aaa";
		context2.fillRect(295,220,90,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.3;
		context2.fillStyle = "#aaa";
		context2.fillRect(295,310,90,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.4;
		context2.fillStyle = "#111";
		context2.fillRect(385,210,95,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.4;
		context2.fillStyle = "#111";
		context2.fillRect(385,320,95,10);
		context2.restore();

		context2.save();
		context2.globalAlpha = 0.3;
		context2.fillStyle = "#aaa";
		context2.fillRect(385,220,95,10);
		context2.restore();
	
		context2.save();
		context2.globalAlpha = 0.3;
		context2.fillStyle = "#aaa";
		context2.fillRect(385,310,95,10);
		context2.restore();
	},
	clearScreen : function() {
		
		context2.clearRect(this.screen.x,this.screen.y,this.screen.width,
				this.screen.height);
		this.drawScreen();
	}
};