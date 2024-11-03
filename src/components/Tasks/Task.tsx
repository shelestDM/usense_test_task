import CustomButton from "../CustomButton";
import { TrashIcon, EditIcon, CompletedIcon } from "../Icons/Icons";

interface ITaskProps {
    taskId: string,
    taskTitle: string,
    onEditTask: (id: string) => void,
    onDeleteTask: (id: string) => void,
    isTaskCompleted?: boolean,
    taskDesription: string
}

export default function Task({
    taskId,
    taskTitle,
    onEditTask,
    onDeleteTask,
    isTaskCompleted,
    taskDesription
}: ITaskProps) {

    return (
        <div
            className="
                border border-slate-200 rounded-lg max-w-sm w-full shadow-md p-3 lg:p-5 
                relative text-[14px] font-semibold animate-smoothAppearFromBottom
            "
            id={taskId}
        >
            <div className="flex items-center justify-between">
                {taskTitle}
                <div className="flex items-center gap-3">
                    <CustomButton
                        Icon={EditIcon}
                        iconColor="black"
                        iconHeight={18}
                        iconWidth={18}
                        onClickHandler={() => onEditTask(taskId)}
                    />
                    <CustomButton
                        Icon={TrashIcon}
                        iconColor="black"
                        iconHeight={18}
                        iconWidth={18}
                        onClickHandler={() => onDeleteTask(taskId)}
                    />
                </div>
            </div>
            <p className="mt-3 text-[12px] font-medium">{taskDesription}</p>
            <div
                style={{ opacity: isTaskCompleted ? 1 : 0 }}
                className="absolute top-[-9px] right-[-9px] bg-green-500 rounded-full p-1"
            >
                <CompletedIcon color="white" width={15} height={15} />
            </div>
        </div>
    )
};

