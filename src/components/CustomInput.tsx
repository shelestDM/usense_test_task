import { usePasswordContext } from "../context/PasswordStrengthContext";
import { EyeOffIcon, EyeOnIcon } from "../Icons";

export default function CustomInput() {

    let {
        password,
        isPasswordVisible,
        togglePasswordVisibility,
        onSetPassword,
        onSetPasswordStrength
    } = usePasswordContext()

    return (
        <div className="w-fit mx-auto mt-9 relative">
            <input
                value={password}
                onInput={(e) => {
                    onSetPassword(e.currentTarget.value);
                    onSetPasswordStrength(e.currentTarget.value)
                }}
                type={isPasswordVisible ? 'text' : 'password'}
                id="password_check"
                placeholder="Enter your password here"
                className="outline-none w-[400px] py-3 pl-5 pr-12 border rounded-xl placeholder:text-gray-400 placeholder:font-medium text-lg font-medium"
            />
            <span className="absolute right-3 top-[15px] cursor-pointer" onClick={togglePasswordVisibility}>
                {
                    isPasswordVisible? <EyeOnIcon /> : <EyeOffIcon />
                }
            </span>
        </div>
    )
};
