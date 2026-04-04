import React, { memo } from 'react';
import { WhyChooseItem } from './types';

interface GridItemProps {
  item: WhyChooseItem;
  index: number;
  isActive: boolean;
  isFocused: boolean;
  hasActiveItem: boolean; // New prop to know if any item is active
  onMouseEnter: (itemId: string) => void;
  onMouseLeave: () => void;
  onFocus: (itemId: string, index: number) => void;
  onBlur: () => void;
  onKeyDown: (event: React.KeyboardEvent, itemId: string, index: number) => void;
}

const GridItem: React.FC<GridItemProps> = memo(({
  item,
  index,
  isActive,
  isFocused,
  hasActiveItem,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onKeyDown
}) => {
  // Determine if this item should be dimmed (when another item is active)
  const isDimmed = hasActiveItem && !isActive;
  return (
    <div
      className={`flex flex-col items-center p-4 rounded-lg border transition-all duration-300 cursor-pointer bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 ${
        isActive 
          ? 'border-blue-500 bg-blue-50 transform scale-110 shadow-2xl z-10' 
          : isDimmed
          ? 'border-gray-200 opacity-40 transform scale-95'
          : 'border-gray-200 hover:border-blue-300 hover:shadow-xl hover:transform hover:scale-108 hover:z-10'
      }`}
      style={{
        // CSS containment for layout and paint optimizations
        contain: 'layout style paint',
        // Hardware acceleration for smooth animations
        willChange: isActive || isDimmed ? 'transform, box-shadow, z-index, opacity' : 'auto',
        // Ensure smooth scaling without affecting layout
        transformOrigin: 'center',
        // Add subtle elevation
        position: 'relative',
        zIndex: isActive ? 10 : isDimmed ? 0 : 1,
        // Add blur effect for dimmed items
        filter: isDimmed ? 'blur(1px)' : 'none'
      }}
      role="gridcell"
      tabIndex={isFocused ? 0 : -1}
      aria-label={`${item.title}: ${item.description}`}
      aria-describedby={`item-${item.id}-desc`}
      aria-expanded={isActive}
      aria-selected={isActive}
      onMouseEnter={() => onMouseEnter(item.id)}
      onMouseLeave={onMouseLeave}
      onFocus={() => onFocus(item.id, index)}
      onBlur={onBlur}
      onKeyDown={(e) => onKeyDown(e, item.id, index)}
    >
      <div 
        className={`mb-3 transition-all duration-300 ${
          isActive ? 'text-blue-600' : isDimmed ? 'text-gray-400' : 'text-blue-600'
        }`}
        style={{
          // Icon-specific optimizations
          contain: 'layout style',
          transform: isActive ? 'scale(1.15)' : isDimmed ? 'scale(0.9)' : 'scale(1)',
          // Add subtle glow effect when active
          filter: isActive ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))' : 'none'
        }}
        aria-hidden="true"
      >
        {item.icon}
      </div>
      <span 
        className={`text-sm font-medium text-center transition-all duration-300 ${
          isActive ? 'text-blue-700 font-semibold' : isDimmed ? 'text-gray-400' : 'text-gray-800'
        }`}
        id={`item-${item.id}-desc`}
        style={{
          // Text containment
          contain: 'layout style'
        }}
      >
        {item.title}
      </span>
      {/* Hidden description for screen readers */}
      <span className="sr-only">
        {item.detailedDescription}
      </span>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function for memo optimization
  return (
    prevProps.isActive === nextProps.isActive &&
    prevProps.isFocused === nextProps.isFocused &&
    prevProps.hasActiveItem === nextProps.hasActiveItem &&
    prevProps.item.id === nextProps.item.id &&
    prevProps.index === nextProps.index
  );
});

GridItem.displayName = 'GridItem';

export default GridItem;