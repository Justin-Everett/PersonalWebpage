import { useState, useEffect } from "react";

//calculate the number of days from today until a target date in the future
function DaysUntil({ targetDateString }) {
  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    const today = new Date();
    const targetDate = new Date(targetDateString);

    //get difference in system time between the two dates
    const timeDiff = targetDate.getTime() - today.getTime();

    //convert system time to days
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    setDaysLeft(days);
  }, [targetDateString]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 0,
      }}
    >
      {daysLeft > 0 ? (
        <p
          style={{
            fontWeight: "bold",
            margin: 2,
          }}
        >
          {daysLeft} day{daysLeft !== 1 ? "s" : ""} until graduation!
        </p>
      ) : (
        <p
          style={{
            fontWeight: "bold",
          }}
        >
          I have officially graduated!
        </p>
      )}
    </div>
  );
}

export default DaysUntil;
