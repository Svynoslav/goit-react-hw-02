export default function Feedback({ reviews, total }) {
  const { good, neutral, bad } = reviews;

  const positive = total === 0 ? 0 : Math.round((good / total) * 100);

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </>
  );
}
