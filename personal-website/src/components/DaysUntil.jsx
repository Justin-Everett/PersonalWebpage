import React, { useState, useEffect } from "react";

function DaysUntil({ targetDateString }) {
  const [daysLeft, setDaysLeft] = useState(null);

  useEffect(() => {
    const today = new Date();
    const targetDate = new Date(targetDateString);

    // Calculate the difference in milliseconds
    const timeDiff = targetDate.getTime() - today.getTime();

    // Convert to days (1 day = 1000ms * 60s * 60min * 24hr)
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    setDaysLeft(days);
  }, [targetDateString]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {daysLeft > 0 ? (
        <p
          style={{
            fontWeight: "bold",
          }}
        >
          {daysLeft} day{daysLeft !== 1 ? "s" : ""} until graduation!
        </p>
      ) : (
        <p>The date has passed or is today!</p>
      )}
    </div>
  );
}

export default DaysUntil;
