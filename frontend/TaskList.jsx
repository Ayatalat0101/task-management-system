function TaskList() {

  const tasks = [
    {
      id: 1,
      title: "Learn React",
      completed: true
    },
    {
      id: 2,
      title: "Learn Laravel",
      completed: false
    },
    {
      id: 3,
      title: "Learn AI",
      completed: false
    }
  ];


  // المهام غير المكتملة فقط
  const activeTasks = tasks.filter(
    task => !task.completed
  );


  return (
    <div>

      <h1>All Tasks</h1>

      {
        tasks.map(task => (
          <div key={task.id}>

            <h3>
              {task.title}
            </h3>

            <p>
              Status:
              {
                task.completed
                  ? " Completed"
                  : " Not Completed"
              }
            </p>

          </div>
        ))
      }


      <hr />


      <h1>Active Tasks</h1>

      {
        activeTasks.map(task => (
          <div key={task.id}>

            <h3>
              {task.title}
            </h3>

          </div>
        ))
      }


    </div>
  );
}


export default TaskList;