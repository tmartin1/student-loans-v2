// Handle user interaction
var AppView = Backbone.View.extend({
	
	initialize: function() {
		// create views for the models that were created in AppModel.js
		// this.someModelView = new SomeModelView( { model:this.model.get('someModel') } )

	},

	validateAsNumber: function(event) {
	  var theEvent = event || window.event;
	  var key = theEvent.keyCode || theEvent.which;
	  key = String.fromCharCode(key);
	  var regex = /[0-9]|\,|\./;
	  if(!regex.test(key)) {
	    theEvent.returnValue = false;
	    if(theEvent.preventDefault) theEvent.preventDefault();
	  }
	},

	// Document form event listeners
	events: {
		"click $('#runCals')": function( {
			this.
		}),
	}

});


// Maintain total balance and weighted average of loan inputs

// 



