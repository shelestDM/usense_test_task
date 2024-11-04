import { createContext, useContext, useState } from "react";

interface ITaskContext {
    tasks: ITask[],
    onDeleteTask: (taskId: string) => void,
    onAddNewTask: (task: ITask) => void,
    onUpdateTasksAfterEditing: (task: ITask) => void,
    taskToEdit: ITask | undefined,
    onGetTaskToEdit: (taskId: string | undefined) => void,
}

interface ITaskProviderProps {
    children: React.ReactNode
}

export interface ITask {
    id: string,
    title: string,
    description: string,
    isCompleted: boolean,
    fileName?: string;
}

const simpleTasks: ITask[] = [
    {
        title: 'Do a test task',
        description: 'I need to complete a test task because I want to get the job.',
        isCompleted: false,
        id: '1',
        fileName: 'fileddddadasdasdasdadv3rybuinf2kskdaksdgmdfkgmfg.txt'
    },
    {
        title: 'Create a Context',
        description: 'Create a context to store the tasks',
        isCompleted: true,
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
        isCompleted: true,
        id: '4'
    },
    {
        title: 'Create a Form',
        description: 'Create a Form component to add ability to create a task',
        isCompleted: true,
        id: '5',
    },
    {
        title: "Calculate the time I've spent on this test task",
        description: "I've already spent 4 hours and 35 minutes on it so far.",
        isCompleted: true,
        id: '6',
    },
];

const TaskContext = createContext<ITaskContext | null>(null);

const TaskContextProvider = ({ children }: ITaskProviderProps) => {

    const [tasks, setTasks] = useState<ITask[]>(simpleTasks);

    const onDeleteTask = (taskId: string) => {
        setTasks(prevTasks => prevTasks.filter(({ id }) => id !== taskId));
    }

    const onAddNewTask = (newTask: ITask) => {
        setTasks(prevTasks => [newTask, ...prevTasks]);
    }

    const onUpdateTasksAfterEditing = (editedTask: ITask) => {
        setTasks(prevTasks => prevTasks.map((task) => task.id === editedTask.id ? editedTask : task));
    }

    const [taskToEdit, setTaskToEdit] = useState<ITask | undefined>(undefined);
    const onGetTaskToEdit = (taskId: string | undefined) => {
        setTaskToEdit(tasks.find(({ id }) => id === taskId));
    }

    let value = {
        tasks,
        onDeleteTask,
        onAddNewTask,
        onUpdateTasksAfterEditing,
        taskToEdit,
        onGetTaskToEdit,
    };

    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
};


const useTask = () => {
    let context = useContext(TaskContext);

    if (!context) throw new Error('Components should be wrapped in TaskContextProvider');

    return context;
};

export { useTask, TaskContextProvider };