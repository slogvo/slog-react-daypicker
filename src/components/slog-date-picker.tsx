import React, { useState } from "react";
import type { DatePickerProps } from "react-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type SlogDatePickerProps = DatePickerProps & {
  className?: string;
  placeholder?: string;
  selectsRange?: boolean;
};

const SlogDatePicker: React.FC<SlogDatePickerProps> = ({
  className = "",
  placeholder = "Select a date",
  onChange,
  selected,
  selectsRange = false,
  ...rest
}) => {
  const [startDate, setStartDate] = useState<Date | null>(selected || null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleChange = (
    date: Date | [Date | null, Date | null] | null,
    event?: React.SyntheticEvent<any>
  ) => {
    if (selectsRange) {
      if (Array.isArray(date)) {
        setStartDate(date[0]);
        setEndDate(date[1]);
      }
    } else {
      setStartDate(date as Date | null);
    }
    onChange?.(date, event);
  };

  return (
    <div className="p-4">
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        placeholderText={placeholder}
        selectsRange={selectsRange}
        startDate={startDate}
        endDate={endDate}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 ${className}`}
        {...rest}
      />
    </div>
  );
};

export default SlogDatePicker;
