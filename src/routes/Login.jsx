import { useState } from "react";
import { useAuth } from "../components/auth/AuthCtx";
import { useNavigate } from "react-router-dom";
import { MdQuiz } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    const success = await login(username, password);

    if (!success) {
      toast.error("Invalid username or password", {
        position: "bottom-right",
        autoClose: 5000,
      });
      return;
    }

    toast.success("Login successful", {
      position: "bottom-right",
      autoClose: 5000,
    });
    navigate("/dashboard");
  };

  return (
    <>
      <ToastContainer />
      <div className="flex h-screen">
        <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-100">
          <div className="max-w-md w-full p-4">
            <div className="flex flex-col gap-y-2">
              <MdQuiz className="w-6 h-6 text-blue-500" />
              <h1 className="text-2xl font-bold">Sign in</h1>
              <h2 className="mb-6">
                Not a member?{" "}
                <span
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign up instead
                </span>
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="text-lg font-bold text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="text-lg font-bold text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 font-bold text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-md hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
        <img
          className="md:w-1/2 hidden md:block w-full h-full object-cover"
          src="/img/img-1.jpeg"
          alt="Login background"
        />
      </div>
    </>
  );
};

export default Login;
