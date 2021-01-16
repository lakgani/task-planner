const express = require('express');
const { ValidationError } = require('sequelize/types');
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
        next(new Error(`No task for the id ${req.params.id} found`, 400));
    }
}));

module.exports = router;
