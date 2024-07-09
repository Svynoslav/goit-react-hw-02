import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

const getReviews = () => {
  const savedReviews = window.localStorage.getItem("reviews");
  return savedReviews !== null
    ? JSON.parse(savedReviews)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

export default function App() {
  const [reviews, setReviews] = useState(getReviews);

  useEffect(() => {
    window.localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = (feedbackType) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [feedbackType]: prevReviews[feedbackType] + 1,
    }));
  };

  const reset = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const { good, neutral, bad } = reviews;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback =
    totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        onReset={reset}
      />
      {totalFeedback >= 1 ? (
        <Feedback
          reviews={reviews}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
