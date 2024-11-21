import { createContext, useContext, useState } from "react";

export type PasswordStrengthType = 'easy' | 'medium' | 'hard' | 'empty' | 'short';


interface IPasswordStrengthContext {
    passwordStrength: PasswordStrengthType;
    password: string;
    isPasswordVisible: boolean;
    togglePasswordVisibility: () => void;
    onSetPassword: (password: string) => void;
    onSetPasswordStrength: (password: string) => void;
}

const PasswordthContext = createContext<IPasswordStrengthContext | null>(null);


const PasswordProvider = ({ children }: { children: React.ReactNode }) => {

    let [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    let [passwordStrength, setPasswordStrength] = useState<PasswordStrengthType>('empty');
    let [password, setPassword] = useState<string>('')


    const togglePasswordVisibility = (): void => setIsPasswordVisible(prev => !prev);

    const onSetPassword = (password: string) => setPassword(password);

    const onSetPasswordStrength = (password: string) => setPasswordStrength(onDeterminatePasswordStrength(password));

    const onDeterminatePasswordStrength = (password: string): PasswordStrengthType => {
        if (!password.length) return 'empty';

        if (password.length <= 7) return 'short'

        const hasPasswordLetters = /[A-Za-z]/.test(password);
        const hasPasswordDigits = /\d/.test(password);
        const hasPasswordSymbols = /[^A-Za-z\d]/.test(password);

        let passwordStrengthScore: number = [hasPasswordLetters, hasPasswordDigits, hasPasswordSymbols].filter(Boolean).length;

        let passwordStrengthGrade: PasswordStrengthType[] = ['easy', 'medium', 'hard'];

        return passwordStrengthGrade[passwordStrengthScore - 1]
    }


    let value = {
        password,
        passwordStrength,
        isPasswordVisible,
        togglePasswordVisibility,
        onSetPassword,
        onSetPasswordStrength
    }

    return (
        <PasswordthContext.Provider value={value}>
            {children}
        </PasswordthContext.Provider>
    )
};

const usePasswordContext = () => {
    const context = useContext(PasswordthContext);

    if(!context) throw new Error('Componens should be wrapped in PasswordProvider');

    return context;
};

export { usePasswordContext, PasswordProvider}