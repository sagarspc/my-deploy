module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
	  fishname: {
			type: Sequelize.STRING
	  },
	  imageurl: {
		type: Sequelize.STRING
		},
	  fishsize: {
			type: Sequelize.STRING
		},
		qty: {
			type: Sequelize.STRING
		},
		price: {
			type: Sequelize.STRING
		},
	});
	
	return Customer;
}