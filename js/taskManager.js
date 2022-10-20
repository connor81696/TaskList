class TaskManager {
    tasks=[];
    constructor(tasks) {
      this.tasks = tasks;
    }

    TaskManager() {
      console.log(this.tasks);
    }

  constructor(currentId = 0) {
    this.currentId = currentId
    this.status = 'TODO'
    this.tasks = [];
  }
<<<<<<< Updated upstream
 
=======

  addTask(obj) {
    this.currentId++
    const id = this.currentId
    const status = this.status
    this.tasks = [...this.tasks, { id, ...obj, status }]
    console.log(this.tasks);
  }

  }

const x = new TaskManager;
x.addTask({
  name: "Do dishes",
  assignedTo: "Connor",
  priority: "Med Priority",
  description: "description 1",
  dueDate: "08-17-2022"
})


>>>>>>> Stashed changes
