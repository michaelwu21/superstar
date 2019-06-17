(function(w){
    
    /**
    *   The main constructor function.
    *   @constructor
    *   @param {Function} onTick The tick function.
    *   @param {Number} interval The tick duration.
    *   @returns {Timer} The instance of timer.
    */
    var Timer = function(onTick, interval) {
        this.setInterval(interval);
        this.setOnTick(onTick);
        
        this._timer = null;
        this._active = false;
        
        this._startTime = 0;
    };
    
    
    /**
    *   Start the timer.
    *   The tick function is called with one argument, the drift amount (int).
    *   @returns {Timer} this.
    */
    Timer.prototype.start = function() {
        
        var drift = 0,
            currentTime = 0,
            actual = 0,
            ideal = 0,
            counter = 0,
            that = this,
            now = Date.now;
        
        
        function onTick() {
            
            that._onTick(drift);
            
            ++counter;
            
            ideal = that._interval * counter;
            actual = now() - that._startTime;
            
            drift = actual - ideal;
            
            if(that._active) {
                setTimeout(onTick, that._interval - drift);
            }
        }
        
        that._active = true;
        that._startTime = now();
        that._timer = setTimeout(onTick, that._interval);
        
        return this;
    };
    
    
    /**
    *   Stop the timer.
    *   @returns {Timer} this.
    */
    Timer.prototype.stop = function() {
        this._active = false;
        clearTimeout(this._timer);
        return this;
    };
    
    
    /**
    *   Set the tick duration. Can be called whilst timer is running.
    *   @param {Number} ms The tick duration.
    *   @returns {Timer} this.
    */
    Timer.prototype.setInterval = function(ms) {
        if(isNaN(ms)) {
            throw new Error('Timer.setInterval requires a number');
        }
        else if(ms < 10) {
            ms = 10;
        }
        
        this._interval = ms;
        return this;
    };
    
    /**
    *   Allow for replacement of the tick function, even whilst the timer
    *   is running.
    *   @param {Function} onTick The new tick function to be called on each cycle.
    *   @returns {Timer} this.
    */
    Timer.prototype.setOnTick = function(onTick) {
        this._onTick = onTick;
        return this;
    };
    
    
    
    /**
    *   Allow the `Timer` constructor to be used as a replacement for 
    *   setInterval.
    *   @param {Function} tick The tick function to call every `interval` ms.
    *   @param {Number} interval The tick duration.
    *   @returns {Timer} A new instance of the `Timer` constructor.
    */
    var setTimer = function(tick, interval) {
        var timer = new Timer(tick, interval);
        timer.start();
        return timer;
    };
    
    
    /**
    *   Imitate the clearTimeout method...
    *   @param {Timer} 
    */
    var clearTimer = function(timer) {
        timer.stop();
    };
    
    
    // Expose.    
    w.Timer = Timer;
    w.setTimer = setTimer;


// Replace `window` with wherever you want to attach `Timer` to if you don't
// want it polluting the global scope.
}(window));