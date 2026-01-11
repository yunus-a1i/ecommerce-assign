'use client';

import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Checkbox({ checked, onChange, label, className }) {
  return (
    <label onClick={() => onChange(!checked)} className={cn('flex items-center gap-2 cursor-pointer', className)}>
      <div
        className={cn(
          'w-5 h-5 border-2 rounded flex items-center justify-center transition-colors',
          checked
            ? 'bg-primary-600 border-primary-600'
            : 'border-gray-300 hover:border-gray-400'
        )}
        
      >
        {checked && <Check className="h-3 w-3 text-white" />}
      </div>
      {label && <span className="text-sm text-white">{label}</span>}
    </label>
  );
}