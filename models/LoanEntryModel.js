// define template for loan entry to be appended to $('#loans')
var LoanEntryModel = Backbone.Model.extend({
	
	// params is an object of the input values passed in when initialized
	initialize: function(params) {
		this.set('name', params.name),
		this.set('balance', params.balance),
		this.set('rate', params.rate)
	}

});
