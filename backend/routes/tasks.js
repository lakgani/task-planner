const express = require('express');
const Task = require("../db/Task");
const ApiError = require('../utils/ApiError');
const globalErrorHandler = require("../utils/globalErrorHandler");

const router = express.Router();

/* GET users listing. */
router.get('/', globalErrorHandler(async function(req, res, next) {
    const allTasks = await Task.findAll(); 
    res.json(allTasks);
}));

router.post('/', globalErrorHandler(async function(req, res, next) {
    const newTask = await Task.create(req.body);
    res.json(newTask);
}));

router.put('/:id', globalErrorHandler(async function(req, res, next) {
    const [updatedTaskCounts] = await Task.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    if(updatedTaskCounts <= 0) {
        next(new ApiError(`No task found for the id ${req.params.id}`, 400))
    }
    res.json({error: false});
}));

router.delete('/:id', globalErrorHandler(async function(req, res, next) {
    const deletedTaskCount = await Task.destroy({
        where: {
            id: req.params.id
        }
    });

    if(deletedTaskCount <= 0) {
        next(new ApiError(`No task found for the id ${req.params.id}`, 400));
    }
    res.json({error: false});
}));

module.exports = router;
