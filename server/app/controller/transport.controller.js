const db = require('../config/db.config.js');
const Transport = db.transports;

// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	let transport = req.body;
	Transport.create(transport).then(result => {		
		// Send created transport to client
		res.json(result);
	});
};
 
// Fetch all transport
exports.findAll = (req, res) => {
	Transport.findAll().then(transports => {
	  // Send all transports to Client
	  res.json(transports);
	});
};

// Find a transport by Id
exports.findById = (req, res) => {	
	Transport.findById(req.params.transportId).then(transport => {
		res.json(transport);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	let transport = req.body;
	let id = req.body.id;
	Transport.update(transport, 
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a transport with id = " + id});
				   });	
};
 
// Delete a transport by Id
exports.delete = (req, res) => {
	const id = req.params.transportId;
	Transport.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a transport with id = ' + id});
	});
};