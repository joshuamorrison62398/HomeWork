const Log = require('../models/logs')

// bring in seed data
const seed = require('../models/seed');

// route - index
const findAllLogs = (req, res) => {
    Log.find({}, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('index', { logs: foundLog })
        }
    })
}

// route - new
const showNewView = (req, res) => {
    res.render('new');
}

// route - delete
const deleteALog = (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, deleteLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    })
}

// route - update
const updateOneLog = (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    
    Log.findByIdAndUpdate(req.params.id, req.body, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/logs/${req.params.id}`);
        }
    })
}

// route - create
const createNewLog = (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    
    Log.create(req.body, (err, createdLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    })
}

// route - edit
const showEditView = (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Edit', { log: foundLog });
        }
    })
}

// route - seed
const seedStarterData = (req, res) => {
    
    Log.deleteMany({}, (err, deleteLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            // console.log('deleted data')
            // console.log(seed.logs)
            
            Log.create(seed.logs, (err, createdlog) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/logs')
                }
            })
        }
    })
}

// route - show
const showOneLog = (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Show', { log: foundLog })
        }
    })
}



module.exports = {
    findAllLogs,
    showNewView,
    deleteALog,
    updateOneLog,
    createNewLog,
    showEditView,
    seedStarterData,
    showOneLog,
}

