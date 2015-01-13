// View for LoanEntryModel
var LoanEntryView = Backbone.View.extend({

	tagName: 'tr',

  template: _.template('<td><input type="text"/><%= name %></td><td><input type="text" class="alignRight"/><%= balance %></td><td><input type="text" class="alignRight"/><%= rate %></td>'),

	initialize: function() {
		//
		this.render();
	},

	render: function() {
    return this.$el.html(this.template(this.model.attributes));
	}

});

