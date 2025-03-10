
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  hours: number;
  onComplete?: () => void;
}

const CountdownTimer = ({ hours, onComplete }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    // Check if there's a stored end time in localStorage
    const storedEndTime = localStorage.getItem('countdownEndTime');
    let endTime: number;
    
    if (storedEndTime) {
      endTime = parseInt(storedEndTime, 10);
    } else {
      // Set new end time if not stored
      endTime = new Date().getTime() + hours * 60 * 60 * 1000;
      localStorage.setItem('countdownEndTime', endTime.toString());
    }
    
    const difference = endTime - new Date().getTime();
    
    if (difference <= 0) {
      // Reset timer when it reaches zero
      localStorage.removeItem('countdownEndTime');
      if (onComplete) onComplete();
      return { hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="mx-auto my-4 p-3 rounded-xl bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 shadow-sm max-w-md">
      <p className="rtl-text text-sm font-medium text-amber-900 mb-2">מבצע השקה מיוחד - ייגמר בקרוב:</p>
      <div className="flex justify-center gap-2 sm:gap-4 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-amber-500 text-white rounded-md px-3 py-2 w-14 h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-inner">
            {formatNumber(timeLeft.hours)}
          </div>
          <span className="text-xs mt-1 text-amber-800">שעות</span>
        </div>
        <div className="text-amber-500 text-xl sm:text-2xl font-bold flex items-center">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-amber-500 text-white rounded-md px-3 py-2 w-14 h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-inner">
            {formatNumber(timeLeft.minutes)}
          </div>
          <span className="text-xs mt-1 text-amber-800">דקות</span>
        </div>
        <div className="text-amber-500 text-xl sm:text-2xl font-bold flex items-center">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-amber-500 text-white rounded-md px-3 py-2 w-14 h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-inner">
            {formatNumber(timeLeft.seconds)}
          </div>
          <span className="text-xs mt-1 text-amber-800">שניות</span>
        </div>
      </div>
      <p className="rtl-text text-xs font-medium text-amber-900 mt-2 text-center">
        השאירו פרטים עכשיו וקבלו מחיר השקה מיוחד!
      </p>
    </div>
  );
};

export default CountdownTimer;
