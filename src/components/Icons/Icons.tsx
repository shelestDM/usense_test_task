export interface IIconProps {
    color?: string;
    width?: number;
    height?: number;
}

export function TrashIcon({
    color, width, height
}: IIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || '24'} height={height || "24"} viewBox="0 0 24 24" fill="none" stroke={color || "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
    )
};

export function EditIcon({
    color, width, height
}: IIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || '24'} height={height || "24"} viewBox="0 0 24 24" fill="none" stroke={color || 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
    )
}


export function CompletedIcon({
    color, width, height
}: IIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || '24'} height={height || "24"} viewBox="0 0 24 24" fill="none" stroke={color || 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
    )
}

export function PlusIcon({
    color, width, height
}: IIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || "24"} height={height || '24'} viewBox="0 0 24 24" fill="none" stroke={color || 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>)
}

export function CloseIcon({
    color, width, height
}: IIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || "24"} height={height || "24"} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    )
}

