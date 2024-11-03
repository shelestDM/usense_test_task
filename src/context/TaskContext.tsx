import { createContext, useContext, useState } from "react";

interface ITaskContext {
    tasks: ITask[],
    onDelateTask: (id: string) => void,
}

interface ITaskProviderProps {
    children: React.ReactNode
}

export interface ITask {
    id: string,
    title: string,
    description: string,
    isCompleted: boolean,
    file?: string;
}

const TaskContext = createContext<ITaskContext | null>(null);

const TaskContextProvider = ({ children }: ITaskProviderProps) => {

    const [tasks, setTasks] = useState<ITask[]>([
        {
            title: 'Do a test task',
            description: 'I need to do a tesk task, because i want to have the job',
            isCompleted: false,
            id: '1'
        },
        {
            title: 'Create a Context',
            description: 'Create a context to store the tasks',
            isCompleted: false,
            id: '2'
        },
        {
            title: 'Create a Task Component',
            description: 'Create component to display a Task',
            isCompleted: true,
            id: '3'
        },
        {
            title: 'Create a TaskList Component',
            description: 'Create a List component to display a list of Task',
            isCompleted: false,
            id: '4'
        },
        {
            title: 'Create a Form',
            description: 'Create a Form component to add ability to create a task',
            isCompleted: false,
            id: '5',
        },
        {
            title: 'Calculate a time wich i spend on this testTask',
            description: 'Now i already spended 46 minutes for this task',
            isCompleted: false,
            id: '6',
        },
    ]);

    const onDelateTask = (taskId: string) => setTasks(prevTasks => prevTasks.filter(({ id }) => id !== taskId))

    let value = {
        tasks,
        onDelateTask
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
};


const useTask = () => {
    let context = useContext(TaskContext);

    if (!context) throw new Error('Components should be wrapped in TaskContextProvider');

    return context;
};

export { useTask, TaskContextProvider };