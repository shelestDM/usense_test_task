import React, { useCallback } from "react";
import { PasswordStrengthType } from "../context/PasswordStrengthContext";

interface IPasswordStrengthTypes {
    passwordStrengthType: PasswordStrengthType,
    className: string;
    strengthColor: string;
    needToApplyStrengthColor: boolean;
}

let passwordStrengthColors: Record<PasswordStrengthType, string> = {
    'easy': '#ef4444',
    'medium': '#eab308',
    'hard': '#10b981',
    'short': '#ef4444',
    'empty': '#6b7280'
};

let passwordStrengthScore: Record<PasswordStrengthType, number> = {
    'empty': 0,
    'short': 1,
    'easy': 2,
    'medium': 3,
    'hard': 4,
}

const PasswordStrengthIndicator = React.memo(({ passwordStrength }: { passwordStrength: PasswordStrengthType }) => {

    let passwordStrengthTypes: IPasswordStrengthTypes[] = [
        {
            passwordStrengthType: 'easy',
            className: 'rounded-l-3xl',
            strengthColor: passwordStrengthColors[passwordStrength],
            needToApplyStrengthColor: passwordStrengthScore['easy'] <= passwordStrengthScore[passwordStrength] && true,
        },
        {
            passwordStrengthType: 'medium',
            className: '',
            strengthColor: passwordStrengthColors[passwordStrength],
            needToApplyStrengthColor: passwordStrengthScore['medium'] <= passwordStrengthScore[passwordStrength] && true,
        },
        {
            passwordStrengthType: 'hard',
            className: 'rounded-r-3xl',
            strengthColor: passwordStrengthColors[passwordStrength],
            needToApplyStrengthColor: passwordStrengthScore['hard'] <= passwordStrengthScore[passwordStrength] && true,
        },
    ];

    const getDynamicBackground = useCallback((needToApplyStrengthColor: boolean): string => {
        return passwordStrength === 'short'
            ? passwordStrengthColors['short']
            : needToApplyStrengthColor
                ? passwordStrengthColors[passwordStrength]
                : passwordStrengthColors['empty']
    }, [passwordStrength])

    return (
        <div className="w-fit mx-auto mt-4">
            <h2 className="text-center text-xl font-semibold">Current password strength</h2>
            <ul className="flex items-center mt-3">
                {
                    passwordStrengthTypes.map(({
                        passwordStrengthType,
                        className,
                        needToApplyStrengthColor
                    }) =>
                        <li
                            style={{
                                backgroundColor: getDynamicBackground(needToApplyStrengthColor)
                            }}
                            key={passwordStrengthType}
                            className={`
                                flex items-center text-[14px] 
                                font-medium justify-center h-5 w-[150px] 
                                border-r border text-white ${className}`
                            }>
                            <span className="first-letter:uppercase">
                                {passwordStrengthType}
                            </span>
                        </li>
                    )
                }
            </ul>
        </div>
    )
});

export default PasswordStrengthIndicator;
