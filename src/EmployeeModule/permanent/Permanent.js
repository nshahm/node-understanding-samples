var Permananent = function (_id, _name) {
	this.id = _id;
	this.name = _name;
};

Permananent.prototype.getContractor = function() {
	return this;
}

module.exports.Permananent = Permananent;

