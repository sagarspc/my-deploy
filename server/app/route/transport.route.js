module.exports = function(app) {
 
    const transports = require('../controller/transport.controller.js');
 
    // Create a new Transport
    app.post('/api/transports', transports.create);
    
    // Retrieve all Transport
    app.get('/api/transports', transports.findAll);
 
    // Retrieve a single Transport by Id
    app.get('/api/transports/:transportId', transports.findById);
 
    // Update a Transport with Id
    app.put('/api/transports', transports.update);
 
    // Delete a Transport with Id
    app.delete('/api/transports/:transportId', transports.delete);
}