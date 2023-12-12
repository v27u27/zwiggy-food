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
    <div className="flex-1 flex justify-center items-start mt-16 w-full">
      <form
        onSubmit={loginHandle}
        className="bg-gray-100 p-6 rounded shadow-md"
      >
        <div className="flex justify-around">
          <h2 className="text-3xl font-semibold mb-4">Login</h2>
        </div>
        <div className="mb-4">
          <input
            className="border rounded px-3 py-2 w-full mb-4"
            type="text"
            id="name"
            placeholder="Enter Name Here"
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            className="border rounded px-3 py-2 w-full"
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
            className="border rounded px-3 py-2 w-full"
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
            className="bg-blue-500 w-72 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
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
