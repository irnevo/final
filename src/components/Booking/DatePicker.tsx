import React from 'react';
import { format, addDays, isSameDay } from 'date-fns';
import { motion } from 'framer-motion';

interface DatePickerProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  availableDates: Date[];
  minDate?: Date;
  maxDate?: Date;
}

export function DatePicker({
  selectedDate,
  onDateSelect,
  availableDates,
  minDate = new Date(),
  maxDate = addDays(new Date(), 90)
}: DatePickerProps) {
  const dates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i));

  const isDateAvailable = (date: Date) => {
    return availableDates.some(d => isSameDay(d, date));
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-2 p-2 min-w-max">
        {dates.map((date, index) => {
          const isAvailable = isDateAvailable(date);
          const isSelected = selectedDate && isSameDay(date, selectedDate);

          return (
            <motion.button
              key={date.toISOString()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => isAvailable && onDateSelect(date)}
              className={`
                flex flex-col items-center p-3 rounded-lg transition-colors
                ${isSelected ? 'bg-orange-600 text-white' : 'bg-white'}
                ${
                  isAvailable
                    ? 'hover:bg-orange-50 cursor-pointer'
                    : 'opacity-50 cursor-not-allowed'
                }
              `}
              disabled={!isAvailable}
            >
              <span className="text-sm font-medium">
                {format(date, 'EEE')}
              </span>
              <span className="text-lg font-bold">
                {format(date, 'd')}
              </span>
              <span className="text-sm">
                {format(date, 'MMM')}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}