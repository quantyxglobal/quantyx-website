import React, { useState, useEffect, useCallback, useRef, memo } from 'react';
import { InteractiveWhyChooseProps, DefaultContent } from './types';
import { whyChooseItems, defaultContent } from './data';
import TextContent from './TextContent';
import GridItem from './GridItem';

const InteractiveWhyChoose: React.FC<InteractiveWhyChooseProps> = ({ className = '' }) => {
  // State for managing the currently active item
  const [activeItem, setActiveItem] = useState<string | null>(null);
  // State for managing content transitions
  const [isTransitioning, setIsTransitioning] = useState(false);
  // State for the displayed content (to handle transition timing)
  const [displayedContent, setDisplayedContent] = useState(defaultContent);
  // State for managing focus for keyboard navigation
  const [focusedItemIndex, setFocusedItemIndex] = useState<number>(-1);

  // Cleanup timeout reference for hover delay
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  // Transition timeout reference
  const transitionTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  // Live region ref for screen reader announcements
  const liveRegionRef = useRef<HTMLDivElement>(null);
  // Grid container ref for keyboard navigation
  const gridRef = useRef<HTMLDivElement>(null);

  // Cleanup effect for timeout references
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Effect to handle smooth content transitions with fade animation
  useEffect(() => {
    // Clear any existing transition timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    // Get the new content based on active item
    let newContent: DefaultContent;
    if (activeItem) {
      const item = whyChooseItems.find(item => item.id === activeItem);
      if (item) {
        newContent = {
          title: item.title,
          description: item.detailedDescription,
          cta: defaultContent.cta
        };
      } else {
        newContent = defaultContent;
      }
    } else {
      newContent = defaultContent;
    }

    // Only transition if content is actually different
    if (JSON.stringify(newContent) !== JSON.stringify(displayedContent)) {
      // Start fade out
      setIsTransitioning(true);

      // After fade out completes (150ms), update content and fade in
      transitionTimeoutRef.current = setTimeout(() => {
        setDisplayedContent(newContent);
        setIsTransitioning(false);
      }, 150);
    }
  }, [activeItem, displayedContent]);

  // Optimized hover enter handler with useCallback
  const handleItemHover = useCallback((itemId: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Immediately set the active item
    setActiveItem(itemId);
  }, []);

  // Optimized hover leave handler with useCallback and debouncing
  const handleItemLeave = useCallback(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a debounced timeout to revert to default content (150ms delay)
    timeoutRef.current = setTimeout(() => {
      setActiveItem(null);
      timeoutRef.current = null;
    }, 150);
  }, []);

  // Keyboard navigation handler
  const handleKeyDown = useCallback((event: React.KeyboardEvent, itemId: string, index: number) => {
    switch (event.key) {
      case 'Enter':
      case ' ': // Space key
        event.preventDefault();
        handleItemHover(itemId);
        // Announce the content change to screen readers
        if (liveRegionRef.current) {
          const item = whyChooseItems.find(item => item.id === itemId);
          if (item) {
            liveRegionRef.current.textContent = `Now showing: ${item.title}. ${item.detailedDescription}`;
          }
        }
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (index + 1) % whyChooseItems.length;
        setFocusedItemIndex(nextIndex);
        // Focus the next item
        const nextElement = gridRef.current?.children[nextIndex] as HTMLElement;
        nextElement?.focus();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = index === 0 ? whyChooseItems.length - 1 : index - 1;
        setFocusedItemIndex(prevIndex);
        // Focus the previous item
        const prevElement = gridRef.current?.children[prevIndex] as HTMLElement;
        prevElement?.focus();
        break;
      case 'Escape':
        event.preventDefault();
        setActiveItem(null);
        setFocusedItemIndex(-1);
        // Announce return to default content
        if (liveRegionRef.current) {
          liveRegionRef.current.textContent = `Returned to overview: ${defaultContent.title}. ${defaultContent.description}`;
        }
        break;
    }
  }, [handleItemHover]);

  // Handle focus events for keyboard navigation
  const handleItemFocus = useCallback((itemId: string, index: number) => {
    setFocusedItemIndex(index);
    handleItemHover(itemId);
  }, [handleItemHover]);

  // Handle blur events
  const handleItemBlur = useCallback(() => {
    // Only clear active item if not navigating with keyboard
    setTimeout(() => {
      if (document.activeElement && !gridRef.current?.contains(document.activeElement)) {
        handleItemLeave();
        setFocusedItemIndex(-1);
      }
    }, 0);
  }, [handleItemLeave]);

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        // CSS containment for the entire section
        contain: 'layout style paint',
        // Optimize for animations
        willChange: 'auto'
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
          style={{
            // Background element containment
            contain: 'layout style paint'
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">About</h2>
        </div>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ${className}`}
          aria-labelledby="why-choose-heading"
          role="region"
          style={{
            // Main grid containment
            contain: 'layout style'
          }}
        >
          {/* Screen reader live region for dynamic content announcements */}
          <div
            ref={liveRegionRef}
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          />

          {/* TextContent component (left side) */}
          <div
            className="order-2 lg:order-1"
            role="complementary"
            aria-label="Feature details"
            style={{
              // Text content containment
              contain: 'layout style'
            }}
          >
            <TextContent
              title={displayedContent.title}
              description={displayedContent.description}
              cta={displayedContent.cta}
              isTransitioning={isTransitioning}
            />
          </div>

          {/* ItemGrid component (right side) */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 order-1 lg:order-2"
            role="grid"
            aria-label="Quantyx features and benefits"
            aria-describedby="grid-instructions"
            style={{
              // Grid container containment and optimization
              contain: 'layout style',
              // Optimize for frequent updates
              willChange: activeItem ? 'auto' : 'auto',
              // Add padding to accommodate scaling without clipping
              padding: '8px'
            }}
          >
            {/* Instructions for screen readers */}
            <div id="grid-instructions" className="sr-only">
              Use arrow keys to navigate between features. Press Enter or Space to view details. Press Escape to return to overview.
            </div>

            {whyChooseItems.map((item, index) => (
              <GridItem
                key={item.id}
                item={item}
                index={index}
                isActive={activeItem === item.id}
                isFocused={focusedItemIndex === index}
                hasActiveItem={activeItem !== null}
                onMouseEnter={handleItemHover}
                onMouseLeave={handleItemLeave}
                onFocus={handleItemFocus}
                onBlur={handleItemBlur}
                onKeyDown={handleKeyDown}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MemoizedInteractiveWhyChoose = memo(InteractiveWhyChoose, (prevProps, nextProps) => {
  return prevProps.className === nextProps.className;
});

MemoizedInteractiveWhyChoose.displayName = 'InteractiveWhyChoose';

export default MemoizedInteractiveWhyChoose;