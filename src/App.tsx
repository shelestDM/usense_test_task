import CustomInput from "./components/CustomInput";
import PasswordStrengthIndicator from "./components/PasswordStrengthIndicator";
import PasswordStrengthMood from "./components/PasswordStrengthMood";
import { usePasswordContext } from "./context/PasswordStrengthContext";

export default function App() {

  const { passwordStrength } = usePasswordContext()

  return (
    <div className="my-12">
      <h1 className="text-center text-2xl font-semibold">Check your password strength</h1>
      <CustomInput />
      <PasswordStrengthIndicator passwordStrength={passwordStrength} />
      <PasswordStrengthMood passwordStrength={passwordStrength} />
    </div>
  )
};
