import css from "./feedback.module.css";

export default function Feedback({ values }) {
  return (
    <>
      <p>No feedback yet</p>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral} </p>
      <p>Bad: {values.bad}</p>
    </>
  );
}
