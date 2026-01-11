'use client';

import { FilterContainer } from '../filters/FilterContainer';

export function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-20">
        <FilterContainer />
      </div>
    </aside>
  );
}