const getAllTasks = (req, res)=>{
    res.send('Get all tasks')
}

const createTask = (req, res)=>{
    res.send('Create Task')
}

const getTask = (req, res)=>{
    res.send('Get single task')
}

const updateTask = (req, res)=>{
    res.send('update task')
}

const deleteTask = (req, res)=>{
    res.send('Delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}