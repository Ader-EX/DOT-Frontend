import { MdQuiz } from "react-icons/md";
import { useAuth } from "../auth/AuthCtx";

const Navigation = () => {
  const { isAuthenticated } = useAuth();
  const handleButtonClick = (event) => {
    event.preventDefault();
    if (isAuthenticated) {
      localStorage.removeItem("isAuthenticated");
      window.location.href = "/";
    } else {
      window.location.href = "/login";
    }
  };
  return (
    <nav className="relative z-20  p-8 ">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="flex gap-x-4">
          <MdQuiz className="self-center text-3xl text-black" />
          <span className="self-center text-xl italic font-semibold whitespace-nowrap">
            QUIZ.
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            onClick={handleButtonClick}
            className="text-white cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-4 py-1 text-center me-2"
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
