'use client';

import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

export function Slider({
  min = 0,
  max = 1000,
  value,
  onChange,
  step = 1,
  className,
}) {
  const [localValue, setLocalValue] = useState(value || [min, max]);

  useEffect(() => {
    if (value) {
      setLocalValue(value);
    }
  }, [value]);

  const handleMinChange = (e) => {
    const newMin = Math.min(Number(e.target.value), localValue[1] - step);
    const newValue = [newMin, localValue[1]];
    setLocalValue(newValue);
    onChange?.(newValue);
  };

  const handleMaxChange = (e) => {
    const newMax = Math.max(Number(e.target.value), localValue[0] + step);
    const newValue = [localValue[0], newMax];
    setLocalValue(newValue);
    onChange?.(newValue);
  };

  const minPercent = ((localValue[0] - min) / (max - min)) * 100;
  const maxPercent = ((localValue[1] - min) / (max - min)) * 100;

  return (
    <div className={cn('w-full', className)}>
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-full bg-primary-500 rounded-full"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue[0]}
          onChange={handleMinChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue[1]}
          onChange={handleMaxChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>${localValue[0]}</span>
        <span>${localValue[1]}</span>
      </div>
    </div>
  );
}