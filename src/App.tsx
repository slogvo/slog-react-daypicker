import { JSX } from "react";
import SlogDatePicker from "./components/slog-date-picker";
import "./styles/index.css";

const App = (): JSX.Element => {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgb(177, 158, 255), rgb(168, 181, 255))",
      }}
    >
      <div className="p-5 bg-white w-full max-w-xl mx-auto h-60 rounded-xl flex flex-col items-center">
        <h1 className="mt-8 text-2xl font-bold text-[#7681e3]">
          Slogdev react-datepicker Demo:
        </h1>
        <SlogDatePicker />
      </div>
    </div>
  );
};

export default App;
