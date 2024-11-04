
import { useCallback, useState } from "react";
import CustomButton from "./components/CustomButton";
import EmptyTasks from "./components/EmptyTasks";
import TaskForm from "./components/Form/TaskForm";
import { PlusIcon } from "./components/Icons/Icons";
import { TaskList } from "./components/Tasks/TaskList";
import { ITask, useTask } from "./context/TaskContext";


export default function App() {

  let { tasks } = useTask();

  const [isTaskFormVisible, setIsTaskFormVisible] = useState<boolean>(false);
  const toggleNewTaskForm = useCallback(() => setIsTaskFormVisible(prevState => !prevState), []);

  const [taskToEdit, setTaskToEdit] = useState<ITask | undefined>(undefined);
  const onGetTaskToEdit = useCallback((taskId: string | undefined) => {
    setTaskToEdit(tasks.find(({ id }) => id === taskId));
  }, [tasks]);

  const onRemoveTaskToEdit = () => setTaskToEdit(undefined);

  return (
    <div className="pt-10 pb-20">
      {
        tasks.length
          ? 
          <TaskList
            onGetTaskToEdit={onGetTaskToEdit}
            toggleNewTaskForm={toggleNewTaskForm}
            tasksList={tasks}
          />
          : <EmptyTasks />
      }
      <TaskForm
        onRemoveTaskToEdit={onRemoveTaskToEdit}
        toggleNewTaskForm={toggleNewTaskForm}
        isTaskFormVisible={isTaskFormVisible}
        taskToEdit={taskToEdit}
      />
      <CustomButton
        onClickHandler={toggleNewTaskForm}
        Icon={PlusIcon}
        iconHeight={20}
        iconWidth={20}
        iconColor="black"
        className="fixed bottom-[20px] right-[30px] p-3 shadow-xl hover:scale-110 active:scale-90 bg-white"
      />
    </div>
  )
};
