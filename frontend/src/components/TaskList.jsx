import TaskCard from "./TaskCard";


function TaskList(){

const tasks=[
{
id:1,
title:"Learn React",
completed:true
},
{
id:2,
title:"Learn Laravel",
completed:false
},
{
id:3,
title:"Learn AI",
completed:false
}
];


return(

<div>

<h1>
Tasks
</h1>


{
tasks.map(task=>(

<TaskCard
key={task.id}
task={task}
/>

))
}


</div>

)

}


export default TaskList;