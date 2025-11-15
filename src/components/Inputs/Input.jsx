import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const isPassword = type === "password";

  return (
    <div className="flex flex-col w-full">
      <label className="text-[13px] text-slate-800 mb-1 font-semibold">
        {label}
      </label>

      <div className="relative w-full">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input outline-none w-full py-2 pr-10 bg-white mb-3"
        />

        {isPassword && (
          <>
            {showPassword ? (
              <FaRegEyeSlash
                size={20}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
                onClick={toggleShowPassword}
              />
            ) : (
              <FaRegEye
                size={20}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
