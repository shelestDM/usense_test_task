import CustomButton from "../CustomButton";
import { TrashIcon, EditIcon, CompletedIcon } from "../Icons/Icons";

interface ITaskProps {
    taskId: string,
    taskTitle: string,
    onEditTask?: () => void,
    onDelateTask: (id: string) => void,
    isTaskCompleted?: boolean,
}

export default function Task({
    taskId,
    taskTitle,
    onEditTask,
    onDelateTask,
    isTaskCompleted
}: ITaskProps) {

    return (
        <div
            className="
                border border-slate-200 rounded-lg max-w-sm w-full shadow-md p-3 lg:p-5 
                flex items-center justify-between relative text-[14px] font-medium
            "
            id={taskId}
        >
            {taskTitle}
            <div className="flex items-center gap-3">
                <CustomButton
                    Icon={EditIcon}
                    iconColor="black"
                    iconHeight={18}
                    iconWidth={18}
                    onClickHandler={() => { }}
                />
                <CustomButton
                    Icon={TrashIcon}
                    iconColor="black"
                    iconHeight={18}
                    iconWidth={18}
                    onClickHandler={() => onDelateTask(taskId)}
                />
            </div>
            <div
                style={{ opacity: isTaskCompleted ? 1 : 0 }}
                className="absolute top-[-9px] right-[-9px] bg-green-500 rounded-full p-1"
            >
                <CompletedIcon color="white" width={18} height={18} />
            </div>
        </div>
    )
};
