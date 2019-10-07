module.exports = (sequelize, Sequelize) => {
	const Transport = sequelize.define('transport', {
	  drivername: {
			type: Sequelize.STRING
	  },
	  vehiclenumber: {
			type: Sequelize.INTEGER
	  },
      
      materialname: {
            type: Sequelize.STRING
    },
	  pickpoint: {
		type: Sequelize.STRING
    },
    qty: {
        type: Sequelize.INTEGER
    },
    rate: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    }

	});
	
	return Transport;
}