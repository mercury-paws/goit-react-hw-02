import Description from "./Description/Description.jsx";
import Options from "./Options/Options.jsx";
import Feedback from "./Feedback/Feedback.jsx";
import Notification from "./Notification/Notification.jsx";
import { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setValues((values) => ({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
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
  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetClickCount={resetClickCount}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 && <Notification />}
      {totalFeedback > 0 && (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}
