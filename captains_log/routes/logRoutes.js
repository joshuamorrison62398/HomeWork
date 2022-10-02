// load express
const express = require('express');

// create a special router object for our routes
const router = express.Router();

// const Log = require('../models/logs')


// bring in controller functions
const { 
    findAllLogs, 
    showNewView, 
    deleteALog, 
    updateOneLog, 
    createNewLog, 
    showEditView, 
    seedStarterData, 
    showOneLog
 } = require('../controllers/logsController');


// setup index route
router.get('/', findAllLogs);

//setup New route
router.get('/new', showNewView);

//setup Delete route
router.delete('/:id', deleteALog);

// setup update route
router.put('/:id', updateOneLog);

// setup create route
router.post('/', createNewLog);

// setup edit route
router.get('/:id/edit', showEditView);

// setup 'seed' route
router.get('/seed', seedStarterData);

// clear route
// router.get('/clear', clearData);

// setup show route
router.get('/:id', showOneLog);



module.exports = router;