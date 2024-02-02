import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full h-full">
      <HomePage />
    </div>
  );
};

export default App;

const HomePage = () => {
  return (
    <div className="w-full h-full flex text-white">
      {/* left typed animation */}
      <div className="w-4/6 h-full flex flex-col items-center justify-center bg-sky-700 relative">
        <div className="absolute top-5 left-5">RecipeGpt</div>
      </div>

      {/* right buttons */}
      <div className="h-full w-2/6 mx-auto flex flex-col bg-slate-900 py-3">
        <div className="w-full h-full flex flex-col gap-4 items-center justify-end">
          <h1 className="font-bold text-2xl">Get Started</h1>
          <div className="flex gap-4 items-center justify-center">
            <Link
              to={"/login"}
              className="ring-4 py-1 px-10 rounded-sm hover:underline underline-offset-2"
              title={"Login"}
              clickOn={() => console.log("")}
            >
              Login
            </Link>
            <Link
              to={"signup"}
              className="ring-4 py-1 px-10 rounded-sm hover:underline underline-offset-2"
              title={"SignUp"}
              clickOn={() => console.log("")}
            >
              Signup
            </Link>
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-4 items-center justify-end">
          <h1>Recipe Logo</h1>
          <div className="text-xs flex gap-4">
            <Link className="underline">Terms of use</Link>
            <span className="bg-white w-0.5 rounded-sm"></span>
            <Link className="underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
