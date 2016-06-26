exports.install = function() {
	F.route('/user/', json_register, ['post', 'json']);
};

function json_register() {
	var self = this;
	// self.body ==> user object
	self.json(SUCCESS(true));
}