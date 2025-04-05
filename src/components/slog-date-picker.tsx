import React, { useRef, useState } from "react";
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

  // Khai báo ref cho DatePicker
  const datePickerRef = useRef<DatePicker | null>(null);

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

  // Hàm để mở DatePicker khi click vào icon
  const openDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true); // Mở DatePicker
    }
  };

  return (
    <div className="p-4 relative">
      <DatePicker
        ref={datePickerRef} // Thêm ref vào DatePicker
        selected={startDate}
        onChange={handleChange}
        placeholderText={placeholder}
        selectsRange={selectsRange}
        startDate={startDate}
        endDate={endDate}
        className={`cursor-pointer w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-primary-500 focus:border-primary-500 ${className}`}
        {...rest}
      />
      <span
        className="inline-block absolute top-1/2 right-8 -translate-y-1/2 text-zinc-600 text-sm cursor-pointer"
        onClick={openDatePicker} // Khi click vào icon, mở DatePicker
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              fill="currentColor"
              d="M2 9c0-1.886 0-2.828.586-3.414S4.114 5 6 5h12c1.886 0 2.828 0 3.414.586S22 7.114 22 9c0 .471 0 .707-.146.854C21.707 10 21.47 10 21 10H3c-.471 0-.707 0-.854-.146C2 9.707 2 9.47 2 9"
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M2 18c0 1.886 0 2.828.586 3.414S4.114 22 6 22h12c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-5c0-.471 0-.707-.146-.854C21.707 12 21.47 12 21 12H3c-.471 0-.707 0-.854.146C2 12.293 2 12.53 2 13zm5-3c0-.471 0-.707.146-.854C7.293 14 7.53 14 8 14h2c.471 0 .707 0 .854.146c.146.147.146.383.146.854s0 .707-.146.854C10.707 16 10.47 16 10 16H8c-.471 0-.707 0-.854-.146C7 15.707 7 15.47 7 15m.146 3.146C7 18.293 7 18.53 7 19s0 .707.146.854C7.293 20 7.53 20 8 20h2c.471 0 .707 0 .854-.146C11 19.707 11 19.47 11 19s0-.707-.146-.854C10.707 18 10.47 18 10 18H8c-.471 0-.707 0-.854.146M13 15c0-.471 0-.707.146-.854C13.293 14 13.53 14 14 14h2c.471 0 .707 0 .854.146c.146.147.146.383.146.854s0 .707-.146.854C16.707 16 16.47 16 16 16h-2c-.471 0-.707 0-.854-.146C13 15.707 13 15.47 13 15m.146 3.146C13 18.293 13 18.53 13 19s0 .707.146.854c.147.146.383.146.854.146h2c.471 0 .707 0 .854-.146C17 19.707 17 19.47 17 19s0-.707-.146-.854C16.707 18 16.47 18 16 18h-2c-.471 0-.707 0-.854.146"
              clipRule="evenodd"
            ></path>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M7 3v3m10-3v3"
            ></path>
          </g>
        </svg>
      </span>
    </div>
  );
};

export default SlogDatePicker;
