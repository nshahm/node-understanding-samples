// Outcome of this program. next tick has highest priority.
//Nexttick triggered
//setTimeout is called using execSetTimeout()
//setInterval is called using execSetInterval() on every second
//setInterval is called using execSetInterval() on every second
//setInterval is called using execSetInterval() on every second
//setInterval is called using execSetInterval() on every second
//setInterval is called using execSetInterval() on every second

var execSetTimeout = function () {
	
	var oneSecond = (1 * 1000);
	var timeoutfn = setTimeout(function() {
		console.log ('setTimeout is called using execSetTimeout()');
	}, oneSecond);
	//clearTimeout(timeoutfn);
};
execSetTimeout();

var execSetInterval = function () {
	
	var oneSecond = (1 * 1000);
	var	limit = 5, count = 1;
	setInterval(function() {
		if (count === 5 ) {
			clearInterval(this);
		}
		count++;
		console.log ('setInterval is called using execSetInterval() on every second')
	}, oneSecond);
};
execSetInterval();


process.nextTick(function() {
	console.log('Nexttick triggered');
	
// Trigger some blocking code in nextTick will block node event loop. so all the setTimeout, setInterval javascript queue will never get called.
//	var z = 0;
//	while (true) {
//		z++
//	}

});



