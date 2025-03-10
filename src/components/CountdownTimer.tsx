
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
    <div className="mx-auto my-8 p-6 rounded-2xl bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 border border-amber-200 shadow-lg max-w-md text-center">
      <p className="rtl-text text-base font-semibold text-amber-900 mb-4">
        מבצע השקה מיוחד - ייגמר בקרוב!
      </p>
      <div className="flex justify-center gap-4 sm:gap-6 text-center mb-4">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl px-4 py-3 w-16 h-16 flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-inner">
            {formatNumber(timeLeft.hours)}
          </div>
          <span className="text-sm mt-2 text-amber-800 font-medium">שעות</span>
        </div>
        <div className="text-amber-500 text-2xl sm:text-3xl font-bold flex items-center">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl px-4 py-3 w-16 h-16 flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-inner">
            {formatNumber(timeLeft.minutes)}
          </div>
          <span className="text-sm mt-2 text-amber-800 font-medium">דקות</span>
        </div>
        <div className="text-amber-500 text-2xl sm:text-3xl font-bold flex items-center">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl px-4 py-3 w-16 h-16 flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-inner">
            {formatNumber(timeLeft.seconds)}
          </div>
          <span className="text-sm mt-2 text-amber-800 font-medium">שניות</span>
        </div>
      </div>
      <p className="rtl-text text-sm font-medium text-amber-900 mt-2 text-center">
        השאירו פרטים עכשיו וקבלו מחיר השקה מיוחד!
      </p>
    </div>
  );
};

export default CountdownTimer;
