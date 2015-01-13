// Build basic info input fields and append to $('#generalInfo')
var AppModel = Backbone.Model.extend({

	initialize: function() {
		// build basic info gatherer.
		this.buildInfo();

		// build payment options checkboxes.
		this.buildPaymentOptions();

		$('.alignRight').keypress(function(e) {
		  var key = e.keyCode || e.which;
		  key = String.fromCharCode(key);
		  var regex = /[0-9]|\,|\./;
		  if(!regex.test(key)) {
		    theEvent.returnValue = false;
		    if(theEvent.preventDefault) theEvent.preventDefault();
		  }
		})
	},



});


// Build payment options checklist and append to $('#paymentOptions')







