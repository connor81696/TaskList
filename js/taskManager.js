class TaskManager {
  tasks = [];
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

const result = (command, cb) => {
  var child = exec(command, (err, stdout, stderr) => {
    if (err != null) {
      return cb(new Error(err), null);
    } else if (typeof (stderr) != "string") {
      return cb(new Error(stderr), null);
    } else {
      return cb(null, stdout);
    }
  });
  return child
}

