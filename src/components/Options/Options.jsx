export default function Options({ updateFeedback, total, onReset }) {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {total >= 1 ? <button onClick={onReset}>Reset</button> : <></>}
    </>
  );
}
