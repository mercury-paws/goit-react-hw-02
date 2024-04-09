import css from "./options.module.css";

export default function Options() {
  return (
    <div className={css.buttonBlock}>
      <button className={css.button} type="button">
        Good
      </button>
      <button className={css.button} type="button">
        Neutral
      </button>
      <button className={css.button} type="button">
        Bad
      </button>
      <button className={css.button} type="button">
        Reset
      </button>
    </div>
  );
}
