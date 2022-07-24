import { useState } from "react";
import Calendar from "react-calendar";

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Calendar onChange={setDate} value={date} />
    </>
  );
};

export default CustomCalendar;
