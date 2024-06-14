"use client"
import Styles from './Calendar.module.css'
import { useState } from "react";

import { endOfWeek, isSameWeek, startOfWeek } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import { ru } from 'date-fns/locale'


  

/** Select the whole week when the day is clicked. */
export function CustomWeek() {
  const [selectedWeek, setSelectedWeek] = useState();

  return (
    <DayPicker
      className={Styles["calendar"]}
      showWeekNumber
      locale={ru}
      weekStartsOn={0}
      modifiers={{
        selected: selectedWeek
      }}
      onDayClick={(day, modifiers) => {
        if (modifiers.selected) {
          setSelectedWeek(undefined); // clear the selection if the week is already selected
          return;
        }
        setSelectedWeek({
          from: startOfWeek(day),
          to: endOfWeek(day)
        });
      }}
      onWeekNumberClick={(weekNumber, dates) => {
        if (selectedWeek?.from && isSameWeek(dates[0], selectedWeek.from)) {
          setSelectedWeek(undefined); // clear the selection if the week is already selected
          return;
        }
        setSelectedWeek({
          from: startOfWeek(dates[0]),
          to: endOfWeek(dates[dates.length - 1])
        });
      }}
      footer={
        selectedWeek && (
          <p>
            Неделя с {selectedWeek.from.toLocaleDateString()} по {selectedWeek.to.toLocaleDateString()}
          </p>
        )
      }
    />
  );
}