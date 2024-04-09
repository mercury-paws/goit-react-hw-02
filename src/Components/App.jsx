import Description from "./Description/Description.jsx";
import Options from "./Options/Options.jsx";
import Feedback from "./Feedback/Feedback.jsx";
import { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateClickCount = (type, value) => {
    setValues((values) => ({
      ...values,
      [type]: value,
    }));
  };

  const resetClickCount = () => {
    setValues((values) => ({
      ...values,
      good: 0,
      neutral: 0,
      bad: 0,
    }));
  };

  return (
    <>
      <Description />
      <Options
        updateClickCount={updateClickCount}
        resetClickCount={resetClickCount}
      />
      <Feedback values={values} />
    </>
  );
}
