import React, { useEffect, useState } from 'react';

const Footer = () => {

    const [remainingTime, setRemainingTime] = useState('');


    useEffect(() => {
    const calculateRemainingTime = () => {
        const targetDate = new Date();
        targetDate.setMonth(10);
        targetDate.setDate(23);
        targetDate.setHours(13,30,0,0);

        const now = new Date();

        const timeDifference = targetDate - now;

        const days = Math.floor(timeDifference / (1000*60*60*24));
        const hours = Math.floor(timeDifference % (1000*60*60*24) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setRemainingTime(`${days}:${hours}:${minutes}:${seconds}`);
    };

    calculateRemainingTime();

    // Update the time every second
    const intervalID = setInterval(calculateRemainingTime, 1000);

    return () => clearInterval(intervalID);
    }, []);
  
  return (
    <footer>
      <p>{remainingTime}</p>
    </footer>
  );
};

export default Footer;
