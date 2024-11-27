import { useEffect, useState } from "react";

export default function CountDown({ newYear }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date().getTime();
      const distance = (newYear - now) / 1000;
      if (distance > 0) {
        const days = Math.floor(distance / 60 / 60 / 24);
        const hours = Math.floor((distance / 60 / 60) % 24);
        const minutes = Math.floor((distance / 60) % 60);
        const seconds = Math.floor(distance % 60);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        clearInterval(timerId);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [newYear]);

  return (
    <div className="flex bg-[#EB1B31] py-6 px-6 w-full relative">
      <img
        src="/timer-decor-top-b.svg"
        alt="decorative"
        class="absolute right-[1.25rem] top-[-3rem]"
        width="140"
      />
      <img
        src="/timer-decor-top-a.svg"
        alt="decorative"
        class="absolute left-[1.25rem] top-[-3rem]"
        width="154"
      />
      <img
        src="/timer-decor-bottom-a.svg"
        alt="decorative"
        class="absolute left-[0rem] bottom-[-2rem]"
        width="30"
      />
      <img
        src="/timer-decor-bottom-b.svg"
        alt="decorative"
        class="absolute right-[0rem] bottom-[-2rem]"
        width="30"
      />

      <div class="flex flex-col justify-center bg-white p-[0.875rem_1rem_1.125rem_1rem] rounded-l-lg flex-1 border-r-2 border-[#E2E2E2]">
        <div class="font-raleway text-[1.5rem] text-center font-black leading-[130%]">
          {days}
        </div>
        <div class="font-raleway text-[.75rem] text-center text-slate-500 font-extrabold leading-[130%]">
          Hari
        </div>
      </div>

      <div class="flex flex-col justify-center bg-white p-[0.875rem_1rem_1.125rem_1rem] flex-1 border-r-2 border-[#E2E2E2]">
        <div class="font-raleway text-[1.5rem] text-center font-black leading-[130%]">
          {hours}
        </div>
        <div class="font-raleway text-[.75rem] text-center text-slate-500 font-extrabold leading-[130%]">
          Jam
        </div>
      </div>

      <div class="flex flex-col justify-center bg-white p-[0.875rem_1rem_1.125rem_1rem] flex-1 border-r-2 border-[#E2E2E2]">
        <div class="font-raleway text-[1.5rem] text-center font-black leading-[130%]">
          {minutes}
        </div>
        <div class="font-raleway text-[.75rem] text-center text-slate-500 font-extrabold leading-[130%]">
          Menit
        </div>
      </div>

      <div class="flex flex-col justify-center bg-white p-[0.875rem_1rem_1.125rem_1rem] rounded-r-lg flex-1">
        <div class="font-raleway text-[1.5rem] text-center font-black leading-[130%]">
          {seconds}
        </div>
        <div class="font-raleway text-[.75rem] text-center text-slate-500 font-extrabold leading-[130%]">
          Detik
        </div>
      </div>
    </div>
  );
}
