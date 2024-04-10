import css from "./feedback.module.css";

export default function Feedback({ values, totalFeedback, positiveFeedback }) {
  return (
    <>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral} </p>
      <p>Bad: {values.bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </>
  );
}
