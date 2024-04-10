import css from "./description.module.css";

export default function Description() {
  return (
    <>
      <h1 className={css.descriptionHeader}>Sip Happens Café</h1>
      <p className={css.descriptionText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}
