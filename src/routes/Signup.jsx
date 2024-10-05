import { useState } from "react";
import { useAuth } from "../components/auth/AuthCtx";
import { useNavigate } from "react-router-dom";
import { MdQuiz } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const { Signup } = useAuth();
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

    try {
      const response = await fetch("http://localhost:8000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (
        response.status === 400 &&
        data.detail === "Username already registered"
      ) {
        toast.error("Username already exists", {
          position: "bottom-right",
          autoClose: 5000,
        });
        return;
      }

      if (response.ok) {
        toast.success("Signup successful", {
          position: "bottom-right",
          autoClose: 5000,
        });

        navigate("/login");
      } else {
        toast.error("Something went wrong!", {
          position: "bottom-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Something went wrong!", {
        position: "bottom-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex h-screen">
        <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-100">
          <div className="max-w-md w-full p-4">
            <div className="flex flex-col gap-y-2">
              <MdQuiz className="w-6 h-6 text-blue-500" />
              <h1 className="text-2xl font-bold">Sign Up</h1>
              <h2 className="mb-6">
                Already a member?{" "}
                <span
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign in instead
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

export default Signup;
