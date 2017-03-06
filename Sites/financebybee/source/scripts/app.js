$(document).ready(function() {
	var app = new App();
});

var App = function() {

	this.tpl = templates;

	this.header = $('#header');
	this.header_en = $('#header_en');
	this.content = $('#content');
	this.content_en = $('#content_en');
	this.footer = $('#footer');

	this.bind();

	this.init();
};

// App initialization
App.prototype.init = function() {

	console.log('= INIT =');

	this.loadTemplates();

	console.log('= INIT DONE =');
};


// Bind buttons/events
App.prototype.bind = function() {
	
};

// Load HBS templates
App.prototype.loadTemplates = function() {

	console.log('= LOADING TEMPLATES =');

	this.header.append(this.tpl.header);
	this.header_en.append(this.tpl.header_en);
	this.content.append(this.tpl.content);
	this.content_en.append(this.tpl.content_en);
	this.footer.append(this.tpl.footer);

	console.log('= TEMPLATES DONE =');
};