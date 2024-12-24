import React from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  price: number;
}

interface TimeSlotPickerProps {
  slots: TimeSlot[];
  selectedSlot: string | null;
  onSelect: (slotId: string) => void;
}

export function TimeSlotPicker({
  slots,
  selectedSlot,
  onSelect
}: TimeSlotPickerProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg flex items-center">
        <Clock className="h-5 w-5 mr-2" />
        Available Time Slots
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {slots.map(slot => (
          <motion.button
            key={slot.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => slot.available && onSelect(slot.id)}
            className={`
              p-4 rounded-lg border transition-all
              ${
                selectedSlot === slot.id
                  ? 'border-orange-600 bg-orange-50'
                  : 'border-gray-200'
              }
              ${
                slot.available
                  ? 'hover:border-orange-600 cursor-pointer'
                  : 'opacity-50 cursor-not-allowed'
              }
            `}
            disabled={!slot.available}
          >
            <div className="text-lg font-medium">{slot.time}</div>
            <div className="text-sm text-gray-600">
              From ₹{slot.price.toLocaleString('en-IN')}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}