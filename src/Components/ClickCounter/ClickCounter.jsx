import css from "./clickCounter.module.css";
import { useState } from "react";

export default function ClickCounter({
  text,
  updateClickCount,
  resetClickCount,
}) {
  const [clicks, setClicks] = useState(0);

  const handleClicks = () => {
    // setClicks(clicks + 1);
    const newClicks = clicks + 1;
    setClicks(newClicks);
    updateClickCount(text.toLowerCase(), newClicks);
  };

  return (
    <>
      <button onClick={handleClicks} className={css.button} type="button">
        {text}
      </button>
      {/* <button onClick={resetClickCount} className={css.button} type="button">
        Reset
      </button> */}
    </>
  );
}
