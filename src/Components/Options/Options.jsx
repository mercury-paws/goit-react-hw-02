import css from "./options.module.css";
import { useState } from "react";
import ClickCounter from "../ClickCounter/ClickCounter.jsx";

export default function Options({ updateClickCount, resetClickCount }) {
  return (
    <div className={css.buttonBlock}>
      <ClickCounter text={"Good"} updateClickCount={updateClickCount} />
      <ClickCounter text={"Neutral"} updateClickCount={updateClickCount} />
      <ClickCounter text={"Bad"} updateClickCount={updateClickCount} />
      <button onClick={resetClickCount} className={css.button} type="button">
        Reset
      </button>
      {/* <ClickCounter text={"Reset"} resetClickCount={resetClickCount} /> */}
    </div>
  );
}
