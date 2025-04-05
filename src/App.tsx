import { JSX } from "react";
import SlogDatePicker from "./components/slog-date-picker";

const App = (): JSX.Element => {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgb(205, 255, 204), rgb(207, 255, 204))",
      }}
    >
      <div className="p-5 bg-white w-full max-w-xl mx-auto h-60 rounded-xl flex flex-col items-center">
        <h1 className="mt-8 text-2xl font-bold text-primary">
          Slogdev react-datepicker Demo:
        </h1>
        <SlogDatePicker />
      </div>
    </div>
  );
};

export default App;
