import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter full name.");
      return;
    }

    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (!password || !validatePassword(password)) {
      setError("Please enter a strong password");
      return;
    }

    setError("");

    try {
    } catch (error) {}
  };
  return (
    <div className="w-full flex flex-col">
      <h3 className="text-lg font-semibold text-black">Create an Account</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Join us today by entering your details below.
      </p>

      <form onSubmit={handleSignUp}>
        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="John"
            type="text"
          />

          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="John@example.com"
            type="text"
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />
        </div>

        {error && <p className="text-red-500 text-xs py-2.5">*{error}</p>}
        <button type="submit" className="btn btn-neutral w-full mt-2">
          SIGN UP
        </button>

        <p className="text-sm">
          Already an account?{" "}
          <button
            className="underline text-primary text-sm font-medium py-2"
            onClick={() => {
              setCurrentPage("login");
            }}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
