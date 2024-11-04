import { useEffect, useRef, useState } from "react"
import CustomButton from "../CustomButton";
import { ITask, useTask } from "../../context/TaskContext";
import { CloseIcon } from "../Icons/Icons";

interface ITaskFormProps {
    taskToEdit: ITask | undefined;
    isTaskFormVisible: boolean;
    toggleNewTaskForm: () => void;
    onRemoveTaskToEdit: () => void
}

export default function TaskForm({
    taskToEdit,
    isTaskFormVisible,
    toggleNewTaskForm,
    onRemoveTaskToEdit
}: ITaskFormProps) {

    let [isTipVisible, setIsTipVisible] = useState<boolean>(false);

    let [isNewTaskDone, setIsNewTaskDone] = useState<boolean>(false);

    let [taskTitle, setTaskTitle] = useState<string>('');
    const onChangeTaskTitle = (e: React.FormEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }

    let [taskDescription, setTaskDescription] = useState<string>('');
    const onChangeTaskDescription = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setTaskDescription(e.currentTarget.value)
    }

    const [fileName, setFileName] = useState<string>('Add a file');

    useEffect(() => {
        if (taskToEdit) {
            const {
                title: editTaskTitle,
                description: editTaskDescription,
                isCompleted: editTaskIsCompleted,
                fileName: editTaskFileName,
            } = taskToEdit;

            setIsNewTaskDone(editTaskIsCompleted);
            setTaskTitle(editTaskTitle);
            setTaskDescription(editTaskDescription);
            setFileName(editTaskFileName || 'Add a file');
        }
    }, [taskToEdit])

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFileName(file.name);
            };
            reader.readAsText(file);
        }
        event.target.value = '';
    };

    const {
        onAddNewTask,
        onUpdateTasksAfterEditing,
        onGetTaskToEdit
    } = useTask();

    const onAddNewTaskHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (validateTaskValue()) {
            const newTask = createNewTask();

            taskToEdit ? onUpdateTasksAfterEditing(newTask) : onAddNewTask(newTask);

            cleanStates();
            if (taskToEdit) onGetTaskToEdit(undefined);

        } else {
            setIsTipVisible(true);
        }
    };


    function createNewTask() {
        return ({
            id: taskToEdit?.id || `${new Date().getTime()}`,
            title: taskTitle,
            description: taskDescription,
            isCompleted: isNewTaskDone,
            fileName: fileName !== 'Add a file' ? fileName : '',
        })
    }

    function validateTaskValue() {
        if ((taskTitle.trim().length > 3) && (taskDescription.trim().length > 3)) return true;
    };

    const cleanStates = () => {
        toggleNewTaskForm();
        setTaskTitle('');
        setTaskDescription('');
        setIsNewTaskDone(false);
        setFileName('Add a file');
        onRemoveTaskToEdit()
    }

    const onCloseForm = () => {
        cleanStates();
    };

    const onHideTip = () => {
        if (isTipVisible) setIsTipVisible(false);
    }

    return (
        <div
            style={{ transform: `scale(${isTaskFormVisible ? 1 : 0})` }}
            className="w-10/12 max-w-sm fixed top-[20%] mx-auto left-0 right-0"
        >
            <div className="bg-gray-100 min-h-[200px] py-10 px-5 rounded-lg">
                <h2 className="text-md font-semibold text-center mb-7">Create Your Task</h2>
                <form className="flex flex-col gap-5 items-center" onClick={onHideTip}>
                    <input
                        className="bg-transparent shadow-md border border-slate-300 rounded-md w-3/4 py-2 px-4 outline-none text-[13px] lg:text-[16px]"
                        type="text"
                        id="task_title"
                        placeholder="Task title"
                        value={taskTitle}
                        onInput={onChangeTaskTitle}
                    />
                    <textarea
                        className="bg-transparent shadow-md border border-slate-300 h-24 rounded-md w-3/4 py-2 px-4 outline-none text-[13px] lg:text-[16px] resize-none"
                        id="task_description"
                        placeholder="Enter the description"
                        value={taskDescription}
                        onInput={onChangeTaskDescription}
                    />
                    <div className="text-[15px] text-center lg:text-md text-gray-500 font-semibold ">
                        Is this Task completed?
                        <div className="flex gap-5 items-center mt-4">
                            <span onClick={() => setIsNewTaskDone(!isNewTaskDone)} className={`${isNewTaskDone ? '' : 'opacity-50 scale-90'} py-2 px-3 bg-gray-200 rounded-xl text-[12px] text-black`}>Сompleted</span>
                            <span onClick={() => setIsNewTaskDone(!isNewTaskDone)} className={`${isNewTaskDone ? 'opacity-50 scale-90' : ''} py-2 px-3 bg-gray-200 rounded-xl text-[12px] text-black`}>Undone</span>
                        </div>
                    </div>
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer shadow-md py-1 px-4 rounded-md w-3/4 truncate"
                    >
                        <span id="file-name" className="text-[13px]">{fileName}</span>
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            ref={fileInputRef}
                            accept=".txt"
                            onChange={handleFileChange}
                        />
                    </label>
                    <CustomButton
                        type="submit"
                        onClickHandler={onAddNewTaskHandler}
                        title={taskToEdit ? 'Edit task' : 'Add new Task'}
                        className="text-[14px] px-2"
                    />
                </form>
            </div>
            <CustomButton className="absolute right-5 top-5" Icon={CloseIcon} iconColor="black" iconHeight={18} iconWidth={18} onClickHandler={onCloseForm} />
            <div
                style={{ top: `${isTipVisible ? -75 : 0}px`, zIndex: `${isTipVisible ? '5' : '-5'}` }}
                className="absolute mx-auto left-0 right-0 bg-gray-200 py-3 px-4 rounded-md text-[12px] w-3/4 text-center font-semibold"
            >
                The length of title and description should be more than 3 characters
            </div>
        </div>
    )
};