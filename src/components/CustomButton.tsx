import { IIconProps } from "./Icons/Icons";

interface ICustomButtonProps {
    title?: string;
    Icon?: React.ComponentType<IIconProps>;
    iconColor?: string;
    iconWidth?: number
    iconHeight?: number
    onClickHandler: () => void
}


export default function CustomButton({
    title = '',
    Icon,
    iconColor,
    iconWidth,
    iconHeight,
    onClickHandler
}: ICustomButtonProps) {
    return (
        <button
            onClick={onClickHandler}
            className="border border-slate-300 rounded-md p-1 lg:p-2 flex gap-2 items-center justify-center"
        >
            {title && <span>{title}</span>}
            {Icon && <Icon color={iconColor} width={iconWidth} height={iconHeight} />}
        </button>
    )
};
