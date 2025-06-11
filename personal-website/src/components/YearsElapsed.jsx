import React, { useEffect, useState } from "react";

function YearsElapsed({ fromDateString }) {
  const [years, setYears] = useState(null);

  useEffect(() => {
    const today = new Date();
    const pastDate = new Date(fromDateString);

    let elapsed = today.getFullYear() - pastDate.getFullYear();

    // Adjust if the current date hasn't reached the anniversary yet
    const hasNotReachedAnniversary =
      today.getMonth() < pastDate.getMonth() ||
      (today.getMonth() === pastDate.getMonth() &&
        today.getDate() < pastDate.getDate());

    if (hasNotReachedAnniversary) {
      elapsed -= 1;
    }

    setYears(elapsed);
  }, [fromDateString]);

  return <span>{years}</span>;
}

export default YearsElapsed;
