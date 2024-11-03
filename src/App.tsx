
import TaskList from "./components/Tasks/TaskList";
import { useTask } from "./context/TaskContext";

export default function App() {

  let {tasks} = useTask();

  return (
    <div className="mt-10">
     <TaskList tasksList={tasks}/>
    </div>
  )
};
