import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [date, setData] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setData(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Son las: {date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock