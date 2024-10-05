import "./App.css";
// import Button from "./components/ui/Button";
// import { FiArrowUpRight } from "react-icons/fi";
import Button from "./components/ui/Button";
import { FiArrowUpRight } from "react-icons/fi";

function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <section className="relative">
        <img
          src="/img/img-1.jpeg"
          alt="Quiz Background"
          width="0"
          height="0"
          sizes="100vw"
          className="h-40 md:h-60 lg:h-80 w-full md:w-[120%] lg:w-[150%] object-cover rounded-lg"
        />
        <div className="mx-auto max-w-6xl">
          <div className="">
            <div className=" text-center ">
              <div className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div className="-mx-0.5 flex justify-center -space-x-3"></div>
              </div>
              <h1 className="mb-6 border-y text-5xl my-4 font-bold md:text-6xl">
                Challenge Your Knowledge <br className="max-lg:hidden" /> with
                Our Ultimate Quiz App
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-lg text-gray-700"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  Ready to put your brain to the test? Explore a wide range of
                  topics, answer fun and engaging questions, and track your
                  progress as you learn!
                </p>

                <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"></div>
                <div className="mt-10 flex w-full justify-center">
                  <Button href="/dashboard" className="flex mr-4">
                    Take the quiz now{" "}
                    <FiArrowUpRight className="s-0 w-6 h-6 self-center" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
