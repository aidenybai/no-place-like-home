'use client';

import { Tooltip } from '@base-ui-components/react';

export default function AmiTooltip() {
  return (
    <Tooltip.Provider delay={0}>
      <Tooltip.Root>
        <Tooltip.Trigger className="cursor-help">
          <span>*</span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={4}>
            <Tooltip.Popup className="bg-stone-800 text-stone-200 text-xs px-2.5 py-1.5 rounded-md shadow-lg">
              Hold ⌘+C to try it out.
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}




