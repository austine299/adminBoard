import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Fullcalendar from "@fullcalendar/react";

function Calendar() {
  
  return (
    <div className="calender-body">
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "next",
        }}

        // dateClick={handleDateClick}
      />
    </div>
  );
}

export default Calendar;
