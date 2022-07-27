const express = require('express');
const taskRouter = require('./tasks/task.router').router

const app = express();

app.use(express.json());

app.use('/todolist/v1', taskRouter)

app.listen(3000, () => {
    console.log("Server started at port 3000");
  });

//localhost:3000/todolist/v1/tasks