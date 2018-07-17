function checkCollision(x1,x2,y1,y2) {
        
	if (mouse.x > x1 && mouse.x < x2) {
    	if (mouse.y > y1 && mouse.y < y2) {
        	return true;
        }
    }                
 }