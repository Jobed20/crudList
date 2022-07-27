const taskDB = [
    {
      id: 1,
      title: "Task #1",
      description: "buy Groceries",
      date: "07/26/2026",
      done: true,
    }
    
  
]
  const getAllTask = () => {
    return taskDB;
  };
  
  const getTaskById = (id) => {
    const filteredDB = taskDB.filter((task) => task.id === id);
    return filteredDB[0];
  };
  
  const createTask = (taskObj) => {
    if (taskDB.length === 0) {
      const newTask = {
        id: 1,
        title: taskObj.title,
        description: taskObj.description,
        date: taskObj.date,
        done: taskObj.done,
       
      };
      taskDB.push(newTask);
      return newTask;
    }
    const newTask = {
      id: taskDB[taskDB.length - 1].id + 1,
      title: taskObj.title,
      description: taskObj.description,
      date: taskObj.date,
      done: taskObj.done,
      
    };
    taskDB.push(newTask);
    return newTask;
  };
  
  const updateTask = (data, id)=>{
    
    const index = taskDB.findIndex((item) => item.id === id);
  
    if (data.title && data.description && data.date && data.done ) {
      taskDB[index] = {
        id,
        title: data.title,
        description: data.description,
        date: data.date,
        done: data.done,
      };
       
      }
     return taskDB[index];
  }
  
  const deleteTask = (id) => {
    const index = taskDB.findIndex((item) => item.id === id);
  
    if (index !== -1) {
      taskDB.splice(index, 1);
    }
    return taskDB
  }
  
  module.exports = {
    getAllTask,
    getTaskById,
    updateTask,
    createTask,
    deleteTask,
  };
  