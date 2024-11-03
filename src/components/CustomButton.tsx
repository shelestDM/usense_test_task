import { IIconProps } from "./Icons/Icons";

interface ICustomButtonProps {
    title?: string;
    Icon?: React.ComponentType<IIconProps>;
    iconColor?: string;
    iconWidth?: number
    iconHeight?: number
    onClickHandler: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    type?: 'button' | 'submit' | 'reset',
    className?:string;
}


export default function CustomButton({
    title = '',
    Icon,
    iconColor,
    iconWidth,
    iconHeight,
    onClickHandler,
    type = 'button',
    className
}: ICustomButtonProps) {
    return (
        <button
            type={type}
            onClick={onClickHandler}
            className={`border border-slate-300 rounded-md p-1 lg:p-2 flex gap-2 items-center justify-center ${className}`}
        >
            {title && <span>{title}</span>}
            {Icon && <Icon color={iconColor} width={iconWidth} height={iconHeight} />}
        </button>
    )
};
