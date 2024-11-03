import { ITask, useTask } from "../../context/TaskContext"
import Task from "./Task"

interface ITaskListProps {
    tasksList: ITask[]
}

export default function TaskList({
    tasksList
}: ITaskListProps) {

    let {onDelateTask} = useTask();

    return (
        <ul className="w-full max-w-sm mx-auto flex flex-col gap-5 lg:gap-10 items-center justyfy-center">
            {
                tasksList.length
                &&
                tasksList.map(({
                    title,
                    isCompleted,
                    id
                }) =>
                    <li key={id} className="w-full">
                        <Task 
                            taskId={id}
                            taskTitle={title} 
                            isTaskCompleted={isCompleted}
                            onDelateTask={onDelateTask}
                        />
                    </li>
                )
            }
        </ul>
    )
};
