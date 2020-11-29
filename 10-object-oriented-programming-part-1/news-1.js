function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	var boola = false;
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
	
    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
	
    function onReady() {

    if(this.setOnReady !== null){
        boola = false;
        onReady();
        
        
    }
    else if (this.setOnReady == null){
          console.log('Coffee is ready');

    }
    }

  this.setOnReady = function(i) {
        
        onReady = i;
  }
  this.getWaterAmount = function(){
        return waterAmount;
  }

    
  this.isRunning = function () {
     return boola;
  }
	this.run = function() {
    boola = true;
		setTimeout(onReady, getTimeToBoil());
	};
}




var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log('Before: ' + coffeeMachine.isRunning()); // Before: false

coffeeMachine.run();

console.log('In progress: ' + coffeeMachine.isRunning()); // In progress: true

coffeeMachine.setOnReady(function() {
	console.log('After: ' + coffeeMachine.isRunning()); // After: false
});