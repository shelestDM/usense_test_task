import React from "react";
import { ITask, useTask } from "../../context/TaskContext"
import Task from "./Task"

interface ITaskListProps {
    tasksList: ITask[],
    toggleNewTaskForm: () => void,
    onGetTaskToEdit: (id: string | undefined) => void,
}

export const TaskList: React.FC<ITaskListProps> = React.memo(({
    tasksList,
    toggleNewTaskForm,
    onGetTaskToEdit
}) => {

    let { onDeleteTask } = useTask();

    const onEditTaskHandler = (id: string) => {
        onGetTaskToEdit(id);
        toggleNewTaskForm();
    }

    return (
        <ul className="w-full max-w-[300px] s:max-w-[370px] md:max-w-sm mx-auto flex flex-col gap-5 lg:gap-10 items-center justyfy-center">
            {
                tasksList.map(({
                    title,
                    isCompleted,
                    description,
                    id,
                    fileName
                }) =>
                    <li key={id} className="w-full">
                        <Task
                            taskId={id}
                            taskTitle={title}
                            fileName={fileName}
                            taskDesription={description}
                            isTaskCompleted={isCompleted}
                            onDeleteTask={onDeleteTask}
                            onEditTask={onEditTaskHandler}
                        />
                    </li>
                )
            }
        </ul>
    )
});
