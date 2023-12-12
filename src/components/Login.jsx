import { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setUserName } = useContext(UserContext);
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginHandle = (e) => {
    e.preventDefault();
    setUserName(name);
    setEmail("");
    setName("");
    setPassword("");
    // <Navigate to={"/"} replace={true} />;
    navigate("/");
  };

  return (
    <div className="mt-16 flex w-full flex-1 items-start justify-center">
      <form
        onSubmit={loginHandle}
        className="rounded bg-gray-100 p-6 shadow-md"
      >
        <div className="flex justify-around">
          <h2 className="mb-4 text-3xl font-semibold">Login</h2>
        </div>
        <div className="mb-4">
          <input
            className="mb-4 w-full rounded border px-3 py-2"
            type="text"
            id="name"
            placeholder="Enter Name Here"
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            className="w-full rounded border px-3 py-2"
            type="email"
            id="email"
            placeholder="Enter Email Here"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-6">
          <input
            className="w-full rounded border px-3 py-2"
            type="password"
            id="password"
            placeholder="Enter Password Here"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="flex justify-around">
          <button
            className="w-72 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
