interface IIconProps {
    color?: string;
    width?: string;
    height?: string;
    className?: string;

}

export const EyeOffIcon = ({ color, height, width, className }: IIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || 20} height={height || 24} viewBox="0 0 24 24" fill="none" stroke={"currentColor" || color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-eye-off ${className}`}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
    )
};


export const EyeOnIcon = ({ color, height, width, className }: IIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || 20} height={height || 24} viewBox="0 0 24 24" fill="none" stroke={"currentColor" || color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-eye ${className}`}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    )
}

export const SadIcon = ({ color, height, width, className }: IIconProps) => {
    return (
<svg xmlns="http://www.w3.org/2000/svg"  width={width || 20} height={height || 24} viewBox="0 0 24 24" fill="none" stroke={"currentColor" || color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-sad ${className}`}><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>    )
}

export const NeutrallFace = ({ color, height, width, className }: IIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || 20} height={height || 24}  viewBox="0 0 24 24" fill="none" stroke={"currentColor" || color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-meh ${className}`}><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
    )
}

export const SmileFace = ({ color, height, width, className }: IIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width || 20} height={height || 24}  viewBox="0 0 24 24" fill="none" stroke={"currentColor" || color}  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className={`feather feather-smile ${className}`}><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
    )
}