const express = require('express');
const Task = require("../db/Task");
const globalErrorHandler = require("../utils/globalErrorHandler");

const router = express.Router();

/* GET users listing. */
router.get('/', globalErrorHandler(async function(req, res, next) {
    try {
        const allTasks = await Task.findAll(); 
        res.json(allTasks);
        
    } catch (error) {
        console.log(error);
        res.json({
            error: true
        })
    }
}));

router.post('/', globalErrorHandler(async function(req, res, next) {
    const newTask = await Task.create(req.body);
    res.json(newTask);
}));

router.put('/:id', globalErrorHandler(async function(req, res, next) {
    const updatedTask = await Task.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.json(updatedTask);
}));

router.delete('/:id', globalErrorHandler(async function(req, res, next) {
    const deletedTaskCount = await Task.destroy({
        where: {
            id: req.params.id
        }
    });

    if(deletedTaskCount > 0) {
        res.json({error: false});
    } else {
        next(new Error(`No task for the id ${id} found`));
    }
}));

module.exports = router;
