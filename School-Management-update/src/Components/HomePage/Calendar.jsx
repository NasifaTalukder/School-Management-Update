import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Tooltip } from "@mui/material"; // Using Material UI for tooltip

const holidays = {
  "2025-02-05": "Sports Day",
  "2025-02-15": "Winter Break",
  "2025-02-22": "Teacher's Workshop",
};

const SchoolCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateString = date.toISOString().split("T")[0];
      if (holidays[dateString]) {
        return (
          <Tooltip title={holidays[dateString]} arrow>
            <span className="text-red-500 font-bold">•</span>
          </Tooltip>
        );
      }
    }
    return null;
  };

  return (
    <div className="p-4 mt-20 w-full">
      <h2 className="text-2xl font-semibold mb-4 text-center">School Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        className="shadow-md rounded-lg w-full"
        tileContent={tileContent}
      />
    </div>
  );
};

export default SchoolCalendar;
