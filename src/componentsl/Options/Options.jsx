import css from "./options.module.css";

export default function Options({
  updateFeedback,
  resetClickCount,
  totalFeedback,
}) {
  return (
    <div className={css.buttonBlock}>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetClickCount} className={css.button} type="button">
          Reset
        </button>
      )}
    </div>
  );
}
