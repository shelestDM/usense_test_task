import CustomButton from "../CustomButton";
import { TrashIcon, EditIcon, CompletedIcon, FileIcon } from "../Icons/Icons";

interface ITaskProps {
    taskId: string,
    taskTitle: string,
    onEditTask: (id: string) => void,
    onDeleteTask: (id: string) => void,
    isTaskCompleted?: boolean,
    taskDesription: string,
    fileName?: string
}

export default function Task({
    taskId,
    taskTitle,
    onEditTask,
    onDeleteTask,
    isTaskCompleted,
    taskDesription,
    fileName
}: ITaskProps) {

    return (
        <div
            className="
                border border-slate-200 rounded-lg max-w-sm w-full p-3 lg:p-5 
                relative text-[14px] font-semibold animate-smoothAppearFromBottom
                hover:shadow-xl
            "
            id={taskId}
        >
            <div className="flex items-center justify-between gap-5">
                {taskTitle}
                <div className="flex items-center gap-3">
                    <CustomButton
                        Icon={EditIcon}
                        iconColor="black"
                        iconHeight={18}
                        iconWidth={18}
                        onClickHandler={() => onEditTask(taskId)}
                        className="hover:bg-slate-200"
                    />
                    <CustomButton
                        Icon={TrashIcon}
                        iconColor="black"
                        iconHeight={18}
                        iconWidth={18}
                        onClickHandler={() => onDeleteTask(taskId)}
                        className="hover:bg-slate-200"
                    />
                </div>
            </div>
            <p className="mt-3 text-[12px] font-medium">{taskDesription}</p>
            {
                fileName
                &&
                <div className="flex gap-3 items-center justify-start mt-3 self-start">
                    <FileIcon width={20} height={20} />
                    <span className="text-[13px] truncate">{fileName}</span>
                </div>
            }
            <div
                style={{ opacity: isTaskCompleted ? 1 : 0 }}
                className="absolute top-[-9px] right-[-9px] bg-green-500 rounded-full p-1"
            >
                <CompletedIcon color="white" width={15} height={15} />
            </div>
        </div>
    )
};

