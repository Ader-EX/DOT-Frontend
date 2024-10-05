import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { requirements } from "../constants/requirements.js";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-2  sm:py-6">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative p-4 bg-white shadow-lg sm:rounded-3xl sm:p-6">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center mb-6">
                Test Requirements
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <p>
                    {index + 1}. {req}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center w-full flex">
          <Link to="/quiz" className="w-full">
            <Button className={"w-full mt-6"}>Okay, I Understand</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
